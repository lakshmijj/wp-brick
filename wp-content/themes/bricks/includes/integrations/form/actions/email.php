<?php
namespace Bricks\Integrations\Form\Actions;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Email extends Base {

	/**
	 * Send email
	 *
	 * @since 1.0
	 */
	public function run( $form ) {

		$form_settings = $form->get_settings();
		$form_fields   = $form->get_fields();

		// Email To
		if ( $form_settings['emailTo'] === 'custom' && ! empty( $form_settings['emailToCustom'] ) ) {
			$recipients = $form->render_data( $form_settings['emailToCustom'] );

			$recipients = explode( ',', $recipients );

			$recipients = array_map( 'trim', $recipients );

			$recipients = array_filter( $recipients, 'is_email' );
		}

		if ( empty( $recipients ) ) {
			$recipients = get_option( 'admin_email' );
		}

		// Email Subject
		$subject = isset( $form_settings['emailSubject'] ) ? $form->render_data( $form_settings['emailSubject'] ) : sprintf( esc_html__( '%s: New contact form message', 'bricks' ), get_bloginfo( 'name' ) );

		// Email message
		if ( ! empty( $form_settings['emailContent'] ) ) {
			$message = $form->render_data( $form_settings['emailContent'] );

			// Only add line breaks in case the user didn't add an HTML template
			$message = isset( $form_settings['htmlEmail'] ) && strpos( $message, '<html' ) === false ? nl2br( $message ) : $message;
		} else {
			$message = $this->get_default_message( $form_settings, $form_fields );
		}

		$email = [
			'to'      => $recipients,
			'subject' => $subject,
			'message' => $message,
		];

		// Email headers
		$headers = [];

		// Header: 'From'
		if ( isset( $form_settings['fromEmail'] ) ) {
			$headers[] = sprintf( 'From: %s <%s>', $form->render_data( $form_settings['fromName'] ), $form->render_data( $form_settings['fromEmail'] ) );
		}

		// Header: 'Content-Type'
		if ( isset( $form_settings['htmlEmail'] ) ) {
			$headers[] = 'Content-Type: text/html; charset=UTF-8';
		}

		// Header: 'Bcc'
		if ( isset( $form_settings['emailBcc'] ) ) {
			$headers[] = sprintf( 'Bcc: %s', $form->render_data( $form_settings['emailBcc'] ) );
		}

		// Header: 'Reply-To' email address
		if ( isset( $form_settings['replyToEmail'] ) ) {
			$headers[] = sprintf( 'Reply-To: %s', $form->render_data( $form_settings['replyToEmail'] ) );
		} else {
			// Find field value with valid email address to use as 'Reply-To' email address
			foreach ( $form_fields as $key => $value ) {
				if ( is_string( $value ) && is_email( $value ) ) {
					$headers[] = sprintf( 'Reply-To: %s', $value );
					break;
				}
			}
		}

		// Add attachments if exist
		$attachments = [];

		if ( $uploaded_files = $form->get_uploaded_files() ) {
			foreach ( $uploaded_files as $input_name => $files ) {
				foreach ( $files as $file ) {
					$attachments[] = $file['file'];
				}
			}
		}

		// Send the email
		$email_sent = wp_mail( $email['to'], $email['subject'], $email['message'], $headers, $attachments );

		// Error
		if ( ! $email_sent ) {
			$form->set_result(
				[
					'action'  => $this->name,
					'type'    => 'danger',
					'message' => isset( $form_settings['emailErrorMessage'] ) ? $form_settings['emailErrorMessage'] : '',
					'content' => $message, // DEV_ONLY
				]
			);
		} else {
			$form->set_result(
				[
					'action'  => $this->name,
					'type'    => 'success',
					'message' => 'OK',
				]
			);
		}
	}

	public function get_default_message( $form_settings, $form_fields ) {

		$message    = '';
		$index      = 0;
		$line_break = isset( $form_settings['htmlEmail'] ) ? '<br>' : "\n";

		foreach ( $form_fields as $key => $value ) {
			if ( strpos( $key, 'form-field-' ) === false ) {
				continue;
			}

			if ( ! empty( $form_settings['fields'][ $index ]['label'] ) ) {
				$message .= $form_settings['fields'][ $index ]['label'] . ': ';
			}

			$value = ! empty( $value ) && is_array( $value ) ? implode( ', ', $value ) : $value;

			$message .= $value . $line_break;

			$index++;
		}

		if ( isset( $_POST['referrer'] ) ) {
			$message .= "{$line_break}{$line_break}" . esc_html__( 'Message sent from:', 'bricks' ) . ' ' . esc_url( $_POST['referrer'] );
		}

		return $message;
	}

}
