<?php
namespace Bricks;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Compatibility {
	public function __construct() {}

	public static function register() {
		$instance = new self();

		// Learndash
		add_action( 'bricks/frontend/before_render_data', [ $instance, 'learndash_skip_the_content_filter' ] );

		// Litespeed
		add_action( 'litespeed_init', [ $instance, 'litespeed_no_cache' ] );

		// Polylang
		if ( function_exists( 'pll_the_languages' ) ) {
			add_filter( 'bricks/helpers/get_posts_args', [ $instance, 'polylang_get_posts_args' ] );
			add_filter( 'bricks/ajax/get_pages_args', [ $instance, 'polylang_get_posts_args' ] );
		}

		// Paid Memberships Pro: Restrict Bricks content (@since 1.5.4)
		if ( function_exists( 'pmpro_has_membership_access' ) ) {
			add_filter( 'bricks/render_with_bricks', [ $instance, 'pmpro_has_membership_access' ], 10, 1 );
		}

		// TranslatePress (@since 1.6)
		if ( bricks_is_builder() ) {
			// Not working as it runs too early (on plugins_loaded)
			// add_filter( 'trp_enable_translatepress', '__return_false' );

			add_filter( 'trp_allow_tp_to_run', '__return_false' );
			add_filter( 'trp_stop_translating_page', '__return_true' );

			// TranslatePress: Remove language switcher HTML in builder
			add_filter( 'trp_floating_ls_html', function( $html ) {
				return '';
			} );
		}
	}

	/**
	 * Learndash: Abort running Learndash process filter as it add breadcrumbs & navigation to 'the_content' filter
	 *
	 * @see #37219eg Elements like icon-box.php, text.php, etc. that use 'the_content' filter.
	 *
	 * @since 1.6
	 */
	function learndash_skip_the_content_filter() {
		add_filter( 'learndash_template_preprocess_filter', '__return_false' );
	}

	/**
	 * LiteSpeed Cache plugin: Ignore Bricks builder
	 *
	 * Tested with version 3.6.4
	 *
	 * @return void
	 */
	public function litespeed_no_cache() {
		if ( isset( $_GET['bricks'] ) && $_GET['bricks'] === 'run' ) {
			do_action( 'litespeed_disable_all', 'bricks editor' );
		}
	}

	/**
	 * Polylang - set the query arg to get all the posts/pages languages
	 *
	 * @param array $query_args
	 * @return array
	 */
	public function polylang_get_posts_args( $query_args ) {

		if ( ! isset( $query_args['lang'] ) ) {
			$query_args['lang'] = 'all';
		}

		return $query_args;
	}

	/**
	 * Check if user has membership access to Bricks content in Helpers::render_with_bricks
	 *
	 * @since 1.5.4
	 */
	public function pmpro_has_membership_access( $render ) {
		return pmpro_has_membership_access();
	}
}
