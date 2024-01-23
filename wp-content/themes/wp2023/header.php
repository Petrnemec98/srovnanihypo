<!DOCTYPE html>
<html <? language_attributes(); ?> dir="ltr">
<head>

	<title>
		<?php
		if (is_post_type_archive('blog')) {
			echo 'Blog - Firemní ajťáci';
		} elseif (is_tax('temata')) {
			echo get_queried_object()->name . ' - Firemní ajťáci';
		} else {
			wp_title('-', true, 'right');
		}
		?>
	</title>

	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<? bloginfo('pingback_url'); ?>">
	<? /*link rel="canonical" href="<?=get_site_url() . $_SERVER['REQUEST_URI']; ?>"> */ ?>
	<meta charset="<? bloginfo('charset'); ?>">

	<? if (get_field('noindex')) { ?>
		<meta name="robots" content="noindex, nofollow">
	<? } else { ?>
		<meta name="robots" content="index, follow">
	<? } ?>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180"
		  href="<?= get_template_directory_uri(); ?>/static/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32"
		  href="<?= get_template_directory_uri(); ?>/static/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16"
		  href="<?= get_template_directory_uri(); ?>/static/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?= get_template_directory_uri(); ?>/static/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?= get_template_directory_uri(); ?>/static/favicon/safari-pinned-tab.svg"
		  color="#5bbad5">
	<link rel="shortcut icon" href="<?= get_template_directory_uri(); ?>/static/favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="<?= get_template_directory_uri(); ?>/static/favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<!-- Font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri(); ?>/static/css/styles.css?v=1.1">

	<!-- WP -->
	<? wp_enqueue_script('jquery'); ?>
	<? wp_head(); ?>

	<!-- Google Tag Manager -->
	<script>(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start':
					new Date().getTime(), event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src =
				'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PTGC7D8');</script>
	<!-- End Google Tag Manager -->
</head>

<body<? if (get_field('lista_zobrazit', 'options')) { ?> class="notification-bar-visible"<? } ?>>
<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTGC7D8"
			height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<? if (get_field('lista_zobrazit', 'options')) { ?>
	<div class="notification-bar">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="inner">
						<?= get_field('lista_text', 'options'); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
<? } ?>
<div class="main-wrap">
	<header class="header">
		<div class="top-bar h70 black d-show__flex">
			<div class="content-position__center">
				<a href="https://nastav.it/" class="links topbar-size upper-case white hover">nastav it</a>
				<a href="https://www.firemniajtaci.cz/" class="links topbar-size upper-case active">firemní ajťáci</a>
				<a href="https://www.hodinoviajtaci.cz/" class="links topbar-size upper-case white hover">hodinovi
					ajťáci</a>
			</div>
			<div class="content-position__absolut-right">
				<p class="links topbar-size white"><a href="tel:<?= get_field('telefon', 'options'); ?>"
													  class="links topbar-size underline white hover"><?= get_field('telefon', 'options'); ?></a>
					| Volejte po-pá 8-20</p>
			</div>
		</div>

		<div class="top-bar h80 white m-show__flex">
			<div class="content-position__absolut-left">
				<a href="/" title="Firemní ajťáci" class="logo">
					<img src="<?= get_template_directory_uri(); ?>/static/filles/header_logo.svg" alt="Hodinoví ajťáci">
				</a>
			</div>
			<div class="content-position__absolut-right">

				<a href="javascript:void(0)" class="btn alt nav-btn">
					<svg width="20" height="14" viewBox="0 0 20 14">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							  d="M1 7h18M1 1h18M7 13h12"></path>
					</svg>
				</a>
			</div>
		</div>

		<div class="top-bar d-show__flex h80 white">
			<div class="content-position__absolut-left">
				<a href="<?= esc_url(home_url('/')); ?>" title="<?php bloginfo('name'); ?>" class="logo">
					<img src="<?= get_template_directory_uri(); ?>/static/filles/header_logo.svg"
						 alt="<? bloginfo('name'); ?>">
				</a>
			</div>
			<div class="content-position__center">
				<nav class="main-nav" role="navigation">
					<?php wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'container' => false,
							'menu' => 'main-nav',
							'menu_class' => 'nav',
							'echo' => true
						)
					); ?>
				</nav>
			</div>
			<div class="content-position__absolut-right">
				<a href="tel:<?= get_field('telefon', 'options'); ?>" class="links no-underline ">
					<div class="button green normal-size hover"><img
								src="<?= get_template_directory_uri(); ?>/static/filles/phone-call.svg"
								alt="<? bloginfo('name'); ?>"><span class="button__text icon-left">Zavolejme si</span>
					</div>
				</a>
			</div>

		</div>
		<div class="h_2">
			<div class="main-dropdown" data-dropdown="sluzby">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<?
							$args = array(
								'taxonomy' => 'kategorie',
								'hide_empty' => false
							);
							$cats = get_terms($args);
							?>
							<div class="cat-filter cat-filter-left cats oneline">
								<? if ($cats) { ?>
									<ul>
										<? foreach ($cats as $cat) { ?>
											<li>
												<a href="<?= get_term_link($cat); ?>" class="link">
													<!-- <?= get_icon(get_field('ikona', $cat)); ?> -->
													<?= $cat->name; ?>
												</a>
											</li>
										<? } ?>
									</ul>
								<? } ?>
							</div>

							<?php
							$args = array(
								'post_type' => 'it-sluzby',
								'posts_per_page' => -1,
								'order' => 'ASC',
								'orderby' => 'menu_order'
							);
							$services = new WP_Query($args);
							if ($services->have_posts()) {
								?>
								<div class="services-inline">
									<div class="item-list row">
										<?php while ($services->have_posts()) {
											$services->the_post();
											// Kontrola, zda je služba deaktivována pro menu
											$menu_disabled = get_field('menu_disable');
											if (!$menu_disabled) {
												?>
												<div class="item col-lg-3">
													<a href="<?= get_permalink(); ?>" class="item-inner">
														<div class="img">
															<?= get_icon(get_field('ikona')); ?>
														</div>
														<div class="text">
															<div class="head">
                                                                <span class="mini">
                                                                    <span><?php the_title(); ?></span>
                                                                    <?= get_icon('arr-r-2'); ?>
                                                                </span>
															</div>
															<p><?= get_field('perex_kratky'); ?></p>
														</div>
													</a>
												</div>
												<?php
											}
										} ?>
									</div>
								</div>
							<?php } ?>
							<? wp_reset_postdata(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="h_2">
			<div class="main-dropdown" data-dropdown="produkty">
				<div class="container">
					<div class="row">
						<div class="col-12">

							<?php
							$args = array(
								'post_type' => 'produkty',
								'posts_per_page' => -1,
								'order' => 'ASC',
								'orderby' => 'menu_order'
							);
							$services = new WP_Query($args);
							if ($services->have_posts()) {
								?>
								<div class="services-inline">
									<div class="item-list row">
										<?php while ($services->have_posts()) {
											$services->the_post();
											// Kontrola, zda je služba deaktivována pro menu
											$menu_disabled = get_field('menu_disable');
											$only_view = get_field('only_view');

											if (!$menu_disabled) {
												?>
												<div class="item col-lg-3">
													<?php if ($only_view) { ?>
															<div class="item-inner">
														<div class="img none">
															<?= get_icon(get_field('ikona')); ?>
														</div>
														<div class="text">
															<div class="head">
																<span class="mini">
																	<span><?php the_title(); ?></span>
																</span>
															</div>
															<p><?= get_field('perex_kratky'); ?></p>
														</div>
															</div>

													<?php } else { ?>
														<a href="<?= get_permalink(); ?>" class="item-inner">
															<div class="img">
																<?= get_icon(get_field('ikona')); ?>
															</div>
															<div class="text">
																<div class="head">
																	<span class="mini">
																		<span><?php the_title(); ?></span>
																		<?= get_icon('arr-r-2'); ?>
																	</span>
																</div>
																<p><?= get_field('perex_kratky'); ?></p>
															</div>
														</a>
													<?php } ?>
												</div>
												<?php
											}
										} ?>
									</div>
								</div>
							<?php } ?>
							<? wp_reset_postdata(); ?>

						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mobile-nav-block">
			<nav class="mobile-nav" role="navigation">
				<?php wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'container' => false,
						'menu' => 'main-nav',
						'menu_class' => 'nav',
						'echo' => true
					)
				); ?>
			</nav>

			<div class="menu-black-box">
				<div class="black-box__content">
					<span class="head">Objevte více z Nastav.IT</span>
					<ul>
						<li>
							<a href="https://nastav.it/" class="links topbar-size upper-case white no-underline">nastav
								it</a>
						</li>
						<li>
							<a href="https://www.firemniajtaci.cz/"
							   class="links topbar-size upper-case white no-underline">firemní ajťáci</a>
						</li>
					</ul>
				</div>
				<div class="black-box-contact">
					<a href="tel:<?= get_field('telefon', 'options'); ?>" class="links no-underline  center-auto">
						<div class="button green normal-size hover"><img
									src="<?= get_template_directory_uri(); ?>/static/filles/phone-call.svg"
									alt="<? bloginfo('name'); ?>"><span
									class="button__text icon-left">Zavolejme si</span></div>
					</a>
					<p class="links topbar-size white"><a href="tel:<?= get_field('telefon', 'options'); ?>"
														  class="links topbar-size underline white hover"><?= get_field('telefon', 'options'); ?></a>
						| Volejte po-pá 8-20</p>
				</div>
			</div>
		</div>
	</header>