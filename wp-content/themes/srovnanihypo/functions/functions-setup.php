<?php

function wp_setup() {
	// This theme styles the visual editor with editor-style.css to match the theme style.
	add_editor_style(get_template_directory_uri() . '/editor-style.css?v=3');

	// This theme uses Featured Images (also known as post thumbnails) for per-post/per-page Custom Header images
	add_theme_support('post-thumbnails');

	// Custom image sizes
	add_image_size('440_490', 440, 490, true); // kolegove
	add_image_size('680_400', 680, 400, true); // fotogalerie
	add_image_size('244_228', 244, 228, true); // fotogalerie alt
	add_image_size('246_160', 246, 160, true); // technologie

	remove_image_size('thumbnail');
	remove_image_size('medium');
	remove_image_size('medium_large');
	remove_image_size('1536x1536');
	remove_image_size('2048x2048');

	// Remove automatic jQuery script by wp
	if (!is_admin()) {
		//wp_deregister_script('jquery');
	}
}
add_action('init', 'wp_setup');

/*
/* Jpg quality
*/

function mw_jpg_quality() {
  return 80;
}
add_filter('jpeg_quality', 'mw_jpg_quality');

/*
/* Disable REST API endpoints
*/

function disable_custom_rest_endpoints($endpoints) {
  if (isset($endpoints['/wp/v2/users'])) {
    unset($endpoints['/wp/v2/users']);
  }

  if (isset($endpoints['/wp/v2/posts'])) {
    unset($endpoints['/wp/v2/posts']);
  }

  return $endpoints;
}
add_filter('rest_endpoints', 'disable_custom_rest_endpoints');

/*
/* Remove default image sizes
*/

function prefix_remove_default_images($sizes) {
	unset($sizes['small']); // 150px
	unset($sizes['medium']); // 300px
	unset($sizes['large']); // 1024px
	unset($sizes['medium_large']); // 768px
	return $sizes;
}
add_filter('intermediate_image_sizes_advanced', 'prefix_remove_default_images');

?>