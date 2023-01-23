<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'foodfestival' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'J3eVcWHrD@!G&9A.b<yV-F67w6>`^(V}fZX};m!JXqu~(RT=StUvn=~wA4l$;9P,' );
define( 'SECURE_AUTH_KEY',  '*gQ.ipBEvu?lSI%hC(B7$?~xyCY^*pN[nm~S0qx&q>/zV~Vv)VzV eU@?s8,wr,{' );
define( 'LOGGED_IN_KEY',    'ZDV}l!?s`$].AC/FwII&A{md<|k,)@bw;lMW*bTc*1N0q_sS_&<Av$ZC,_6Iwn%5' );
define( 'NONCE_KEY',        'w1}:^c{C7.[a1Lnt/; /IVr|aTTc&{;cbnn1oC8l,ue6]As(M~X,S8YMwN&9mNzQ' );
define( 'AUTH_SALT',        'PEZiGOp!f!=?cYUkTf.ya{>.hU*O#SBi_qe^AUO{?uU%{_KQ):^)2lxBRj$z!.^M' );
define( 'SECURE_AUTH_SALT', 'ry1u?cwP0`F1L9Km(#>;HHiw7XBa52k^NHrH9tqeO{]1]vYCS5~)pa9uy2ty#SoV' );
define( 'LOGGED_IN_SALT',   '<KjqmHUMi!iR8{HfUVD#Uf+?U=F@Jb*cU`<{^M|)2t<Gh}nhU!BS+Vfn$-0@1TJ^' );
define( 'NONCE_SALT',       '1ro(T$CF!U{.X`U}FQhwjX.]7]L +<9iB5w;tO$?%j6!5vZ@Q!dHq0Q9mea~ (~!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
