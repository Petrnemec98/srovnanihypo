<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'srovnanihypo' );

/** Database username */
define( 'DB_USER', 'root-mysql' );
/** Database password */
define( 'DB_PASSWORD', 'KtepWYtvEiUcgE9RVZNV' );
/** Database hostname */
define( 'DB_HOST', 'zameckehotely.cz' );

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
define( 'AUTH_KEY',         '7*f:x|sDY&5aH&Fo=1=W]G mM1pYE>I&c##Ds[zbDKA(Msx7PgP4SV8[ !`caDD[' );
define( 'SECURE_AUTH_KEY',  'rgoQ@TW+fAqC&dqyKh@c$Px9|<Srz|YW$c%i>^$GN{coacE<q0cXOP$tPLRbUxXM' );
define( 'LOGGED_IN_KEY',    'kl~%q0M#X$MD<bW< a;o+S4qC1lbHmg(|.!w|sl[T=YzZ;m1D&;/Sp%EPJ6r=g~A' );
define( 'NONCE_KEY',        'Wl9#9^aC;oQ/vqqi[:Bh5rOI3C<YA1GXo8ADeN8MAgW5[.WmH`Dso;L}>Htk],Gl' );
define( 'AUTH_SALT',        'PUb*7iWXj*2z6$%0Pj!V-?F1a|~xVZ:>,2b>]z#C/ 3g:[+ZRVoB&_o)6L3x($H&' );
define( 'SECURE_AUTH_SALT', 'ftYH0xnxXv*M*9TD1(RQ@SJwS&h#Gp{bkwk.+k9IM31Z?>;#*P,F&=(&FEw+$=~7' );
define( 'LOGGED_IN_SALT',   '8vkSg_ekcjste8g9!{K_=Y+ryOU.KRyvHQk9&u;g}O^yQu6%]KhT3?J`C=&aJN%_' );
define( 'NONCE_SALT',       'OVXp)tW*Gb01>:WWXjc@uoEE2baGVHl$io/<%s^iO`L*(/odk(<;p:@K/2.h$7%L' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
