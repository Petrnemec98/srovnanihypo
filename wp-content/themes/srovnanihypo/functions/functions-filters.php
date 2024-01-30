<?php

/*==================================================================
MW FILTERS
==================================================================*/

function my_pre_get_posts( $query ) {
	// do not modify queries in the admin
	if (is_admin()) {
		return $query;
	}

	// only modify queries for 'kalendar' post type
	if (isset($query->query_vars['post_type']) && $query->query_vars['post_type'] == 'kalendar') {
		// allow the url to alter the query

		// Filter by kategorie
		if (isset($_GET['kategorie'])) {
			if (!empty($_GET['kategorie'])) {
				$kategorie_query[] = array(
					array(
						'taxonomy' => 'kategorie',
						'field'    => 'slug',
						'terms'    => $_GET['kategorie'],
					),
				);
				$query->set('tax_query', $kategorie_query);
			}
		}
		// return
		return $query;
	}
}

add_action('pre_get_posts', 'my_pre_get_posts');

// Alter search page fot outputs
function template_chooser($template) {
	global $wp_query;
	$post_type = get_query_var('post_type');
	
	if ($wp_query->is_search && $post_type == 'kalendar') {
		return locate_template('archive-kalendar.php');  //  redirect to archive-kalendar.php
	}
	
	return $template;
}

add_filter('template_include', 'template_chooser');

?>