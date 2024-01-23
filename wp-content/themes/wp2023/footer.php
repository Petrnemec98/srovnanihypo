<footer class="footer">
	<div class="f_1">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="foot-item">
						<div class="logo-foot">
							<a href="/" title="Firemní ajťáci" class="logo">
								<img src="<?= get_template_directory_uri(); ?>/static/filles/footer_logo.svg"
									 alt="Hodinoví ajťáci">
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-xl-4">
					<div class="foot-item">
						<div class="foot-address">
							<p class="head"><? _e('Centrála', 'firemniajtaci'); ?> Brno</p>
							<ul>
								<li><?= get_field('ulice', 'options'); ?></li>
								<li><?= get_field('mesto', 'options'); ?></li>
							</ul>
						</div>
					</div>
					<div class="foot-item">
						<div class="foot-address">
							<p class="head"><? _e('Pobočka', 'firemniajtaci'); ?> Praha</p>
							<ul>
								<li><?= get_field('ulice_praha', 'options'); ?></li>
								<li><?= get_field('mesto_praha', 'options'); ?></li>
							</ul>
						</div>
					</div>
					<div class="foot-item">
						<div class="foot-address">
							<p class="head"><? _e('Pobočka', 'firemniajtaci'); ?> Ostrava</p>
							<ul>
								<li><?= get_field('ulice_ostrava', 'options'); ?></li>
								<li><?= get_field('mesto_ostrava', 'options'); ?></li>
							</ul>
						</div>
					</div>
					<? if (have_rows('pravni_dokumenty', 'options')) { ?>
						<div class="foot-item">
							<ul class="unstyled">
								<? while (have_rows('pravni_dokumenty', 'options')) {
									the_row(); ?>
									<li>
										<?
										$link = '';
										if (get_sub_field('soubor')) {
											$link = get_sub_field('soubor')['url'];
										}

										$odkaz = get_sub_field('odkaz');
										if ($odkaz) {
											$odkaz_url = $odkaz['url'];
											$odkaz_title = $odkaz['title'];
											$odkaz_target = $odkaz['target'] ? $odkaz['target'] : '_self';

											$link = $odkaz_url;
										}
										?>
										<a href="<?= $link; ?>" target="_blank" rel="noopener">
											<?= get_sub_field('nazev'); ?>
										</a>
									</li>
								<? } ?>
							</ul>
						</div>
					<? } ?>
				</div>
				<div class="col-12 col-md-9 col-lg-6 col-xl-6">
					<div class="foot-item rollable">
						<p class="head"><? _e('IT služby', 'firemniajtaci'); ?></p>
						<div class="roll">
							<div class="row">
								<div class="col-6 col-md-5">
									<?php
									$args = array(
										'post_type' => 'it-sluzby',
										'order' => 'ASC'
									);

										$services = new WP_Query($args);
										if ($services->have_posts()) {
											?>
										<div class="foot-service-nav">
											<ul>
												<?php while ($services->have_posts()) {
													$services->the_post();
													// Kontrola, zda je služba deaktivována pro menu
													$menu_disabled = get_field('menu_disable');
													if (!$menu_disabled) {
														?>

														<li>
															<a href="<?php the_permalink(); ?>">
																<?php the_title(); ?>
															</a>
														</li>
														<?php
													}
												} ?>
											</ul>
										</div>
									<?php } ?>
									<? wp_reset_postdata(); ?>
								</div>
								<div class="col-6 col-md-5">
									<?php
									$args = array(
										'post_type' => 'produkty',
										'order' => 'ASC'
									);

									$services = new WP_Query($args);
									if ($services->have_posts()) {
										?>
										<div class="foot-service-nav">
											<ul>
												<?php while ($services->have_posts()) {
													$services->the_post();
													// Kontrola, zda je služba deaktivována pro menu
													$menu_disabled = get_field('menu_disable');
													$only_view = get_field('only_view');
													if (!$menu_disabled) {
														?>

														<li>
														<?php if ($only_view) { ?>
															<span>
																<?php the_title(); ?>
															</span>
														<?php } else { ?>
															<a href="<?php the_permalink(); ?>">
																<?php the_title(); ?>
															</a>

														<?php } ?>
														</li>
														<?php
													}
												} ?>
											</ul>
										</div>
									<?php } ?>
									<? wp_reset_postdata(); ?>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-lg-3 col-xl-2">
					<div class="foot-item rollable">
						<p class="head"><? _e('Společnost', 'firemniajtaci'); ?></p>
						<div class="roll">
							<ul class="unstyled">
								<? /*
										<li>
											<a href="<?=get_permalink(166);?>">
												<? _e('O nás','firemniajtaci'); ?>
											</a>
										</li>
										*/ ?>
								<li>
									<a href="<?= get_post_type_archive_link('kariera'); ?>">
										<? _e('Kariéra', 'firemniajtaci'); ?>
									</a>
								</li>
								<li>
									<a href="<?= get_permalink(155); ?>">
										<? _e('Kontakty', 'firemniajtaci'); ?>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="foot-item">
						<div class="social-nav">
							<ul>
								<? if (get_field('twitter', 'options')) { ?>
									<li class="tw">
										<a href="<?= get_field('twitter', 'options'); ?>" target="_blank"
										   rel="noopener">
											<?= get_icon('tw'); ?>
										</a>
									</li>
								<? } ?>
								<? if (get_field('linked_in', 'options')) { ?>
									<li class="li">
										<a href="<?= get_field('linked_in', 'options'); ?>" target="_blank"
										   rel="noopener">
											<?= get_icon('li'); ?>
										</a>
									</li>
								<? } ?>
								<? if (get_field('facebook', 'options')) { ?>
									<li class="fb">
										<a href="<?= get_field('facebook', 'options'); ?>" target="_blank"
										   rel="noopener">
											<?= get_icon('fb'); ?>
										</a>
									</li>
								<? } ?>
								<? if (get_field('youtube', 'options')) { ?>
									<li class="yt">
										<a href="<?= get_field('youtube', 'options'); ?>" target="_blank"
										   rel="noopener">
											<?= get_icon('yt'); ?>
										</a>
									</li>
								<? } ?>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="f_2">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="inner">
						<p class="copy">Copyright © 2013-<?= date('Y'); ?> Firemniajtaci
							- <? _e('Všechna práva vyhrazena', 'firemniajtaci'); ?>.</p>
						<? /* if (get_page(695)->post_status == 'publish') { ?>
								<div class="foot-info">
									<ul>
										<li><a href="<?=get_permalink(695);?>"><? _e('Informace o zpracovávání osobních údajů','firemniajtaci'); ?></a></li>
									</ul>
								</div>
								<? }*/ ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
</div>

<? include(get_template_directory() . "/cms/snippets/modal-exit.php"); ?>


<div class="fix-banner">
	<div class="inner">
		<p class="head">
			60 minut konzultace zdarma
		</p>
		<div class="desc">
			<p>Hledáte parťáka pro konzultaci IT projektu?</p>
		</div>
	</div>
	<div class="btn-set">
		<div class="img">
			<img src="<?= get_template_directory_uri(); ?>/static/images/konzultace.png" alt="" width="150"
				 height="178">
		</div>
		<a href="/it-radce-b" class="btn">Pojďme na to</a>
	</div>
	<a href="javascript:void(0)" class="close">
	</a>
</div>

<!-- JS -->
<script type="text/javascript" src="<?= get_template_directory_uri(); ?>/static/js/scripts.js?v=1.1"></script>

<!-- Cookie consent CSS -->
<link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri(); ?>/static/css/ext/cc.css">

<!-- Cookie consent JS -->
<script type="text/javascript" src="<?= get_template_directory_uri(); ?>/static/js/ext/cc.js"></script>

<!-- WP -->
<? wp_footer(); ?>
</body>
</html>