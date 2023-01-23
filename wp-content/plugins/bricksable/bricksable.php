<?php
/**
 * Plugin Name: Bricksable
 * Version: 1.5.5
 * Plugin URI: https://bricksable.com/
 * Description: A collection of premium quality elements for Bricks Builder.
 * Author: Bricksable
 * Author URI: https://bricksable.com/about/
 * Requires at least: 5.6
 * Tested up to: 6.0.3
 *
 * Text Domain: bricksable
 * Domain Path: /lang/
 *
 * @package WordPress
 * @author Bricksable
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load plugin class files.
require_once 'includes/class-bricksable.php';
require_once 'includes/class-bricksable-settings.php';
require_once 'includes/class-bricksable-helper.php';

// Load plugin libraries.
require_once 'includes/lib/class-bricksable-admin-api.php';
require_once 'includes/lib/class-bricksable-post-type.php';
require_once 'includes/lib/class-bricksable-taxonomy.php';

/**
 * Returns the main instance of Bricksable to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Bricksable
 */
function bricksable() {
	$instance = Bricksable::instance( __FILE__, '1.5.5' );

	if ( is_null( $instance->settings ) ) {
		$instance->settings = Bricksable_Settings::instance( $instance );
	}

	return $instance;
}

bricksable();
