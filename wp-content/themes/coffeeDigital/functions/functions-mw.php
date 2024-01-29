<?

/*==================================================================
MW FUNCTIONS
==================================================================*/

// Get file size
function get_filesize($field) {
	$attachment_id = get_field($field)['ID'];
	$filesize = filesize(get_attached_file($attachment_id));
	$filesize = size_format($filesize, 2);
	return $filesize;
}

// Get file extension
function get_ext($field) {
	$attachment_id = get_field($field)['ID'];
	$path_info = pathinfo(get_attached_file($attachment_id))['extension'];
	return '.'. $path_info;
}

// Get format date
function get_format_date($format = 'j/m') {
	$date = get_field('datum', false, false);
	$date = strtotime($date);
	$date = date_i18n($format, $date);
	return $date;
}

// SVG icon
function get_icon($class) {
	$icon = '<svg class="icon icon-'. $class .'"><use xlink:href="'. get_template_directory_uri() . '/static/svg/svg-sprite.svg#icon-'. $class .'" /></svg>';
	return $icon;
}

// Allow non breaking space
function mw_allow_nbsp_in_tinymce($init) {
  $init['entities'] = '160,nbsp,38,amp,60,lt,62,gt';
  $init['entity_encoding'] = 'named';
  return $init;
}
add_filter('tiny_mce_before_init', 'mw_allow_nbsp_in_tinymce');

// Global options
function cl_acf_set_language() {
  return acf_get_setting('default_language');
}

function get_global_option($name) {
	add_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
	$option = get_field($name, 'option');
	remove_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
	return $option;
}

// Disable GA plugin upgrade
function filter_plugin_updates($value) {
  unset($value->response['google-analytics-dashboard-for-wp/gadwp.php']);
  return $value;
}
add_filter('site_transient_update_plugins', 'filter_plugin_updates');

// Remove P in CF7
add_filter('wpcf7_autop_or_not', '__return_false');

// Redirect /favicon.ico to generated favicon (for Favicon by RealFaviconGenerator plugin)
add_filter('init', function() {
  if(!class_exists('Favicon_By_RealFaviconGenerator_Common')) return; // skip

  add_filter( 'get_site_icon_url', function($url, $size) {
    if($size !== 32) return $url; // skip

    $html = get_option( Favicon_By_RealFaviconGenerator_Common::OPTION_HTML_CODE );
    if(empty($html)) return $url; // skip

    $doc  = new DOMDocument();
    $doc->loadHTML($html);
    $xpath    = new DOMXpath($doc);
    $elements = $xpath->query('//link[@rel="shortcut icon"]');
    if($elements->length === 0) return $url; // skip

    $link_favicon = $elements->item(0);
    $favicon_url  = $link_favicon->getAttribute('href');
    if(empty($favicon_url)) return $url; // skip
    return $favicon_url;
  }, 10, 2);
});

// Remove Contact Form 7 from dashboard
if (!(current_user_can('administrator'))) {
	function remove_wpcf7() {
    remove_menu_page('wpcf7');
	}
	add_action('admin_menu', 'remove_wpcf7');
}

// CFDB7 allow for editor role
include_once(ABSPATH . 'wp-admin/includes/plugin.php');
if (is_plugin_active('contact-form-cfdb7/contact-form-cfdb-7.php')) {
  // Add custom capability
  $role = get_role('editor');
  if (!$role->has_cap('cfdb7_access')) {
    $role->add_cap('cfdb7_access');
  }
}

// Hide Types button
function mw_remove_toolset_buttons() {
  add_filter('toolset_editor_add_form_buttons', '__return_false');
  add_filter('toolset_cred_button_before_print', '__return_false');
  add_filter('toolset_editor_add_access_button', '__return_false');
}
add_action('init', 'mw_remove_toolset_buttons');

// Get youtube id
function get_youtube_video_ID($data) {
	// IF 11 CHARS
	if (strlen($data) == 11) {
		return $data;
	}

	preg_match( "/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/", $data, $matches);
	return isset($matches[2]) ? $matches[2] : false;
}

/*==================================================================
FIREMNI AJTACI
==================================================================*/

// CF7 TO API - push form data to ajtaci API
function mw_send_cf7_to_ajtaci_api($contact_form) {
  // Get current form
  $wpcf7 = WPCF7_ContactForm::get_current();
  $submission = WPCF7_Submission::get_instance();

  // 006: kontaktni formular
  // 218: formular kariera

  if ($wpcf7->id == '6') {

    if ($submission) {

      // Get the posted data
      $posted_data = $submission->get_posted_data();

      $url = "https://is.nastav.it/registrace/public/index.php/api/webhook/b2b";

      $curl = curl_init($url);
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
      curl_setopt($curl, CURLOPT_HEADER, false);
      curl_setopt($curl, CURLOPT_POST, true);

      $headers = array(
        "Content-Type: application/json",
      );
      curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

      $jmeno = "";
      $prijmeni = "";
      $email = "";
      $telefon = "";
      $poznamka = "";
      $firma = "";
      $source_url = "";

      $post_id = $posted_data['post_id'];

      // Load fields from CF7 form submission
      if (isset($posted_data['jmeno']) && !empty($posted_data['jmeno'])) {
        $jmeno = $posted_data['jmeno'];
      }
      if (isset($posted_data['prijmeni']) && !empty($posted_data['prijmeni'])) {
        $prijmeni = $posted_data['prijmeni'];
      }
      if (isset($posted_data['e-mail']) && !empty($posted_data['e-mail'])) {
        $email = $posted_data['e-mail'];
      }
      if (isset($posted_data['telefon']) && !empty($posted_data['telefon'])) {
        $telefon = $posted_data['telefon'];
      }
      if (isset($posted_data['firma']) && !empty($posted_data['firma'])) {
        $firma = $posted_data['firma'];
      }
      if (isset($posted_data['poznamka']) && !empty($posted_data['poznamka'])) {
        $poznamka = $posted_data['poznamka'];
      }
      //if (isset($posted_data['_url']) && !empty($posted_data['_url'])) {
        $source_url = get_permalink($post_id);
      //}

      // Create array
      $data = array(
        "firstname" => $jmeno,
        "surname" => $prijmeni,
        "email" => $email,
        "phone" => $telefon,
        "message" => $poznamka,
        "company" => $firma,
        "source_url" => $source_url
      );

      curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));

      //for debug only!
      //curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
      //curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

      $resp = curl_exec($curl);
      curl_close($curl);

      return $resp;
    }
  }
}
add_action('wpcf7_before_send_mail', 'mw_send_cf7_to_ajtaci_api');

/*==================================================================
FIREMNI AJTACI
==================================================================*/

// Reading time
function mw_get_reading_time() {
	$contentArray = array();

	if (have_rows('clanek_obsah')) {
		while (have_rows('clanek_obsah')) { the_row();
			if (get_row_layout() == 'text') {
				$text = get_sub_field('text');

				array_push($contentArray, $text);
			}

			if (get_row_layout() == 'perex') {
				$text = get_sub_field('perex');

				array_push($contentArray, $text);
			}
		}
	}

	$content = implode(" ", $contentArray);

	$clean_content = strip_shortcodes($content);
	$clean_content = strip_tags($clean_content);
	//$word_count = str_word_count($clean_content);
	$word_count = count(preg_split("~[^\p{L}\p{N}\']+~u",$clean_content));
	$time = ceil($word_count / 200);

	$output = $time . esc_attr__(' min čtení', 'firemniajtaci');
	return $output;
}

/*==================================================================
WPML SWITCHER
==================================================================*/

function language_selector_flags() {
	$languages = icl_get_languages('skip_missing=0&orderby=code');
	if (!empty($languages)) {
		foreach ($languages as $l) {
			if ($l['active']) {
				echo '<a href="javascript:void(0)"><div class="frame"><img src="'. get_template_directory_uri() . '/static/img/lng/' . $l['language_code'] . '.svg" alt="' . $l['language_code'] . '" width="20" height="15"></div></a>';
			}
		}
		if (!empty($languages)) {
			echo '<ul>';
			foreach ($languages as $l) {
				if (!$l['active']) {
					if ($l['code'] == 'de') {
						echo '<li><a href="' . $l['url'] . '"><div class="frame"><img src="'. get_template_directory_uri() . '/static/img/lng/' . $l['language_code'] . '.svg" alt="' . $l['language_code'] . '" width="20" height="15"></div></a></li>';
					}
					else {
						echo '<li><a href="' . $l['url'] . '"><div class="frame"><img src="'. get_template_directory_uri() . '/static/img/lng/' . $l['language_code'] . '.svg" alt="' . $l['language_code'] . '" width="20" height="15"></div></a></li>';
					}
				}
			}
			echo '</ul>';
		}
	}
}

/*==================================================================
PURGE CACHE FOR EDITOR ROLE
==================================================================*/

function allow_users_to_flush($capability) {
  return "publish_posts";
}
add_filter("w3tc_capability_row_action_w3tc_flush_post", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_w3tc_flush", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_w3tc_flush_all", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_admin_bar", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_admin_bar_flush_all", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_admin_bar_w3tc", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_admin_bar_flush", "allow_users_to_flush", 10, 10);
add_filter("w3tc_capability_w3tc", "allow_users_to_flush", 10, 10);

function w3tc_cap_filter($allcaps, $cap, $args) {
	if(preg_match("/w3tc_dashboard/", $_SERVER["REQUEST_URI"])) {
		$allcaps[$cap[0]] = true;
	}
	return $allcaps;
}
add_filter('user_has_cap', 'w3tc_cap_filter', 10, 3);

/*==================================================================
ACF MAP API KEY
==================================================================*/

function my_acf_google_map_api( $api ){
	$api['key'] = get_field('api_key','options');
	return $api;
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

/*==================================================================
OPTIONS PAGE (ACF PRO)
==================================================================*/

if (function_exists('acf_add_options_page')) {
	acf_add_options_page(
		array(
			'page_title' => 'Options',
			'menu_title' => 'Options',
			'menu_slug' => 'options',
			'capability' => 'edit_posts',
			'redirect' => false
		)
	);
}

/*==================================================================
MENU
==================================================================*/

// Nav menu
register_nav_menu('primary', __('Primary Menu'));

/*==================================================================
REMOVE FEEDS
==================================================================*/

if (!is_admin()) {
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'rel_canonical');
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'feed_links_extra', 3);
	remove_action('wp_head', 'feed_links', 2);
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action('admin_print_styles', 'print_emoji_styles');

	remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
	remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');

	remove_action('wp_head', 'rest_output_link_wp_head');
	remove_action('wp_head', 'wp_oembed_add_discovery_links');

	// Remove styles
	function mwRemoveStyles() {
		if (!is_admin()) {
			wp_dequeue_style('wpmf-gallery-style');
			wp_dequeue_style('wpmf-flexslider-style');
			wp_dequeue_style('wpmf-material-design-iconic-font.min');
			wp_dequeue_style('wpmf-gallery-popup-style');

			// Remove Gutenberg Block Library CSS from loading on the frontend
			wp_dequeue_style('wp-block-library');
			wp_dequeue_style('wp-block-library-theme');
			wp_dequeue_style('wc-block-style'); // Remove WooCommerce block CSS
			wp_dequeue_style('global-styles'); // Remove theme.json
		}
	}
	add_action( 'wp_enqueue_scripts', 'mwRemoveStyles' );
}

// Remove WP robots
function mw_hide_wp_robots($robots) {
  unset($robots['max-image-preview']);
  return $robots;
}
add_filter('wp_robots', 'mw_hide_wp_robots');

/*==================================================================
TITLE
==================================================================*/

function mw_wp_title($title, $sep) {
	global $paged, $page;

	if (is_feed()) {
		return $title;
	}

	$sep = '–';

	// Add the site name.
	$title .= get_bloginfo('name');

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ($site_description && (is_home() || is_front_page())) {
		$title = "$title $sep $site_description";
	}

	// Add a page number if necessary.
	if ($paged >= 2 || $page >= 2) {
		$title = "$title $sep " . sprintf( __('Strana %s'), max($paged, $page));
	}

	// 1. Standardní alt title
	$alt_title = get_field('alt_title');
	$name = get_bloginfo('name');

	// 2. Taxonomie
	if (is_tax('kategorie')) {
		$term_id = get_queried_object()->term_id;
		$alt_title = get_field('alt_title','category_' . $term_id);
	}

	if (is_tax('technologie')) {
		$term_id = get_queried_object()->term_id;
		$alt_title = get_field('alt_title','category_' . $term_id);
	}

	// 3. Archivy
	if (is_post_type_archive('aktuality')) {
		$alt_title = get_field('alt_title_aktuality','options');
	}

	if (is_post_type_archive('pripadove-studie')) {
		$alt_title = get_field('alt_title_pripadove_studie','options');
	}

	if (is_post_type_archive('technologie')) {
		$alt_title = get_field('alt_title_technologie','options');
	}

	if (is_post_type_archive('kariera')) {
		$alt_title = get_field('alt_title_kariera','options');
	}

	if (is_post_type_archive('it-sluzby')) {
		$alt_title = get_field('alt_title_it_sluzby','options');
	}

	// Výsledná konstrukce
	if ($alt_title) {
		$title = "$alt_title $sep $name";
	}

	return $title;
}

add_filter('wp_title', 'mw_wp_title', 10, 2);

/*==================================================================
ADMIN - REMOVE MENUS
==================================================================*/

function remove_menus () {
	global $menu;
	$restricted = array(__('Posts'), __('Comments'));
	end ($menu);

	while (prev($menu)) {
		$value = explode(' ',$menu[key($menu)][0]);
		if (in_array($value[0] != NULL?$value[0]:"" , $restricted)) {
			unset($menu[key($menu)]);
		}
	}
}

add_action('admin_menu', 'remove_menus');

/*==================================================================
ADD CUSTOM POST TYPES ARCHIVE TO WP NAV MENU
==================================================================*/

if (!class_exists('CustomPostTypeArchiveInNavMenu')) {
	class CustomPostTypeArchiveInNavMenu {

		function __construct() {
			load_plugin_textdomain( 'andromedamedia', false, basename( dirname( __FILE__ ) ) . '/languages' );
			add_action( 'admin_head-nav-menus.php', array( &$this, 'cpt_navmenu_metabox' ) );
			add_filter( 'wp_get_nav_menu_items', array( &$this,'cpt_archive_menu_filter'), 10, 3 );
		}

		function cpt_navmenu_metabox() {
			add_meta_box( 'add-cpt', __('Custom Post Type Archives'), array( &$this, 'cpt_navmenu_metabox_content' ), 'nav-menus', 'side', 'default' );
		}

		function cpt_navmenu_metabox_content() {
			$post_types = get_post_types( array( 'show_in_nav_menus' => true, 'has_archive' => true ), 'object' );

			if ($post_types)  {
				foreach ( $post_types as &$post_type ) {
					$post_type->classes = array();
					$post_type->type = $post_type->name;
					$post_type->object_id = $post_type->name;
					$post_type->title = $post_type->labels->name . ' ' . __( 'Archive' );
					$post_type->object = 'cpt-archive';
				}
				$walker = new Walker_Nav_Menu_Checklist( array() );

				echo '<div id="cpt-archive" class="posttypediv">';
				echo '<div id="tabs-panel-cpt-archive" class="tabs-panel tabs-panel-active">';
				echo '<ul id="ctp-archive-checklist" class="categorychecklist form-no-clear">';
				echo walk_nav_menu_tree( array_map('wp_setup_nav_menu_item', $post_types), 0, (object) array( 'walker' => $walker) );
				echo '</ul>';
				echo '</div><!-- /.tabs-panel -->';
				echo '</div>';
				echo '<p class="button-controls">';
				echo '<span class="add-to-menu">';
				//echo '<img class="waiting" src="' . esc_url( admin_url( 'images/wpspin_light.gif' ) ) . '" alt="" />';
				echo '<input type="submit"' . disabled( $nav_menu_selected_id, 0 ) . ' class="button-secondary submit-add-to-menu" value="' . __('Přidat do menu') . '" name="add-ctp-archive-menu-item" id="submit-cpt-archive" />';
				echo '</span>';
				echo '</p>';

			};
		}

		function cpt_archive_menu_filter( $items, $menu, $args ) {
			foreach ($items as &$item) {
				if ($item->object != 'cpt-archive') continue;
				$item->url = get_post_type_archive_link( $item->type );

				if (get_query_var( 'post_type' ) == $item->type) {
					$item->classes[] = 'current-menu-item';
					$item->current = true;
				}
			}

			return $items;
		}
	}

	/* Instantiate the plugin */
	$CustomPostTypeArchiveInNavMenu = new CustomPostTypeArchiveInNavMenu();
}

/*==================================================================
DISABLE ADMIN BAR
==================================================================*/

add_filter( 'show_admin_bar', '__return_false' );

/*==================================================================
WP_NAV_MENU()
==================================================================*/

function mw_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}

add_filter('wp_page_menu_args', 'mw_page_menu_args');

/*==================================================================
OPEN GRAPH TAGS
==================================================================*/

function fb_opengraph() {
  global $post;

  $img_src = '';
  if (get_field('og_image','options')) {
  	$img_src = get_field('og_image','options')['url'];
  }
  $description = get_field('meta_description','options');
  $keywords = get_field('meta_kw','options');

  if (get_field('og_image')) {
    $img_src = get_field('og_image')['url'];
  }

  if (get_field('meta_description')) {
    $description = get_field('meta_description');
  }

  if (get_field('meta_kw')) {
    $keywords = get_field('meta_kw');
  }

 	if (is_post_type_archive('pripadove-studie')) {
		$description = get_field('description_pripadove_studie','options');
	}

 	if (is_post_type_archive('technologie')) {
		$description = get_field('description_technologie','options');
	}

 	if (is_post_type_archive('kariera')) {
		$description = get_field('description_kariera','options');
	}

 	if (is_post_type_archive('it-sluzby')) {
		$description = get_field('description_it_sluzby','options');
	}

	if (is_tax()) {
    $description = get_field('meta_description',get_queried_object());
  }
?>

  <meta property="og:title" content="<? wp_title( '-', true, 'right' ); ?>">
  <meta property="og:description" content="<?=$description; ?>">
  <meta property="og:type" content="article">
  <meta property="og:url" content="<?=the_permalink(); ?>">
  <meta property="og:site_name" content="<?=get_bloginfo(); ?>">
  <meta property="og:image" content="<?=$img_src; ?>">

  <meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="<? wp_title('-', true, 'right'); ?>">
	<meta name="twitter:description" content="<?=$description; ?>">
	<meta name="twitter:image" content="<?=$img_src; ?>">

  <meta name="description" content="<?=$description; ?>">
  <meta name="keywords" content="<?=$keywords; ?>">

<?
}
add_action('wp_head', 'fb_opengraph', 5);

?>
