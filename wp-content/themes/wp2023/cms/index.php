<?
/**
 * Template Name: Úvod
 */

get_header(); ?>
	<div class="content">
		<div class="teaser-hp">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head">
									<p class="suphead"><?=get_field('nadnadpis');?></p>
									<h1><?=get_field('nadpis');?></h1>
								</div>
								<div class="intro">
									<?=get_field('perex');?>
								</div>

                                <a href="/kontakt" class="links no-underline center-auto">
                                    <button class="button green normal-size hover"><span class="button__text ">Domluvit schůzku</span></button>
                                </a>


							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="block omega">
			<div class="anchor" id="sluzby"></div>
			<div class="container">
				<div class="row">
					<div class="col-12">
                        <section class="services">
                            <div class="section-head">
                                <p class="suphead"><?= get_field('nadnadpis_2'); ?></p>
                                <h2><?= get_field('nadpis_2'); ?></h2>
                                <div class="desc">
                                    <p>Vyřešíme připojení vaší domácnosti nebo kanceláři k internetu, zasíťujeme internet a navrhneme rozmístění aktivních prvků v prostoru. “Naladíme” Wi-Fi signál k optimálnímu pokrytí internetem.</p>
                                </div>
                            </div>

                            <?php
                            $args = array(
								'post_type' => array('it-sluzby', 'produkty'), // Použití pole s názvy post_type
                                'posts_per_page' => -1,
                                'order' => 'ASC',
                                'orderby' => 'menu_order'
                            );
                            $services = new WP_Query($args);
                            $service_count = 0; // Inicializace počítadla služeb
                            if ($services->have_posts()) {
                                ?>
                                <div class="item-list row">
                                    <?php while ($services->have_posts()) {
                                        $services->the_post();
                                        $services_disabled = get_field('services_disable');
										$only_view = get_field('only_view');
                                        if (!$services_disabled) {
                                            $service_count++; // Inkrementace počtu služeb
                                            ?>
                                            <div class="item col-sm-6 col-md-4 col-xl-2">

												<?php
												//pokud nemá být odkaz
												if ($only_view) { ?>
													<span class="item-inner hover">
														<div class="img">
															<?= get_icon(get_field('ikona')); ?>
														</div>
														<div class="text">
															<h3 class="medium"><?php the_title(); ?></h3>
															<p><?= get_field('perex_kratky'); ?></p>
														</div>
													</span>
												<?php } else { ?>

													<a href="<?= get_permalink(); ?>" class="item-inner">
														<div class="img">
															<?= get_icon(get_field('ikona')); ?>
														</div>
														<div class="text">
															<h3 class="medium"><?php the_title(); ?></h3>
															<p><?= get_field('perex_kratky'); ?></p>
														</div>
													</a>
												<?php } ?>

                                            </div>
                                            <?php
                                        }
                                    } ?>
                                </div>
                            <?php }
                            wp_reset_postdata();

                            // Kontrola počtu služeb a zobrazení/skrytí sekce "foot"
                            if ($service_count > 6) { ?>
                                <div class="foot">
                                    <a href="<?= get_permalink(); ?>" class="links no-underline center-auto" data-purpose="show-items">
                                        <button class="button white normal-size hover"><span class="button__text"><?= get_field('tlacitko_2'); ?></span></button>
                                    </a>
                                </div>
                            <?php } ?>

                        </section>
					</div>
				</div>
			</div>
		</div>
        <? if (get_field('nasi_klienti_zobrazit')) { ?>
            <div class="block omega">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="clients">
                                <div class="section-head">
                                    <p class=""><?=get_field('nadpis_1');?></p>
                                </div>
                                <? $clients = get_field('nasi_klienti'); ?>
                                <? if ($clients) { ?>
                                    <div class="item-list row">
                                        <? foreach ($clients as $post) { ?>
                                            <? setup_postdata($post); ?>
                                            <? include(get_template_directory() . "/cms/snippets/client-item.php"); ?>
                                        <? } ?>
                                    </div>
                                    <? wp_reset_postdata(); ?>
                                <? } ?>
                                <div class="foot">
                                    <p><a href="javascript:void(0)" class="show-more">Zobrazit více</a></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="fragment-r"></div>
            </div>
        <? } ?>
		<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="team">
							<div class="section-head">
								<p class="suphead"><?=get_field('nadnadpis_3');?></p>
								<h2><?=get_field('nadpis_3');?></h2>
                                <div class="desc">
                                    <p>Vyřešíme připojení vaší domácnosti nebo kanceláři k internetu, zasíťujeme internet a navrhneme rozmístění aktivních prvků v prostoru. “Naladíme” Wi-Fi signál k optimálnímu pokrytí internetem.</p>
                                </div>
							</div>
							<? if (have_rows('cloud')) { ?>
								<div class="item-list row">
									<? while (have_rows('cloud')) { the_row(); ?>
										<? $nadpis = get_sub_field('nadpis'); ?>
										<div class="item">
											<div class="item-inner">
												<div class="img">
													<?=get_icon(get_sub_field('ikona'));?>
												</div>
												<div class="text">
													<?=get_sub_field('text');?>
												</div>
											</div>
										</div>
									<? } ?>
								</div>
							<? } ?>
							<div class="foot">
                                <a href="<?=get_permalink(281);?>" class="links no-underline center-auto">
                                    <button class="button green normal-size hover"><span class="button__text"><?=get_field('tlacitko_3');?></span></button>
                                </a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="technology">
							<div class="section-head">
								<h2><?=get_field('nadpis_technologie');?></h2>
							</div>
							<? if (have_rows('technologie')) { ?>
								<div class="item-list row">
									<? while (have_rows('technologie')) { the_row(); ?>
										<div class="item col-sm-6 col-sm-4 col-xl">
                                            <div class="item-inner">
                                                <div class="img">
                                                    <?
                                                    $image_id = get_sub_field('foto')['ID'];
                                                    $img_src = wp_get_attachment_image_url($image_id, '246_160');
                                                    $img_srcset = wp_get_attachment_image_srcset($image_id, '246_160');
                                                    ?>
                                                    <img data-src="<?=esc_url($img_src); ?>"
                                                         data-srcset="<?=esc_attr($img_srcset); ?>"
                                                         sizes="(min-width: 1490px) 238px, (min-width: 1200px) 182px, (min-width: 992px) 146px, (min-width: 768px) 210px, (min-width: 576px) 240px, 100vw" alt="<?=get_sub_field('nadpis');?>" class="lazyload">
                                                </div>
                                                <div class="text">
                                                    <div class="head">
                                                        <h3 class="medium"><?=get_sub_field('nadpis'); ?></h3>
                                                    </div>
                                                    <div class="desc">
                                                        <p><?=get_sub_field('podnadpis'); ?></p>
                                                    </div>
                                                </div>

                                            </div>
										</div>
									<? } ?>
								</div>
							<? } ?>
						</section>
					</div>
				</div>
			</div>
			<div class="fragment-l"></div>
		</div>
		<div class="block alt-2 narrow">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="case-studies">
							<div class="row">
								<div class="head col-md-4">
									<p class="suphead"><?=get_field('nadnadpis_4');?></p>
									<h2><?=get_field('nadpis_4');?></h2>
									<div class="glide-nav desktop">
										<div class="glide__arrows" data-glide-el="controls">
						                    <div class="prev glide__arrow glide__arrow--left cursor-hover" data-glide-dir="<">
						                        <?=get_icon('arr-l');?>
                                            </div>
                                            <div class="next glide__arrow glide__arrow--right cursor-hover" data-glide-dir=">">
						                        <?=get_icon('arr-r');?>
                                            </div>
						                </div>
									</div>
								</div>
								<div class="list col-md-8">
									<div class="case-slider-wrap">
										<?
											$args = array(
												'post_type' => 'pripadove-studie',
												'posts_per_page' => -1,
												'order' => 'ASC',
												'orderby' => 'menu_order'
											);
										?>
										<? $cases = new WP_Query($args); ?>
										<? if ($cases->have_posts()) { ?>
											<div class="case-slider" id="case-slider" data-slides="2" data-slides-desktop="2" data-slides-tablet="2" data-slides-phablet="2" data-slides-mobile="1" data-focus="0" data-gap="40" data-animation-phablet="0" data-type="slider" data-swipe="false">
												<div class="glide__track" data-glide-el="track">
													<ul class="glide__slides">
														<? while ($cases->have_posts()) { $cases->the_post(); ?>
															<li class="glide__slide panel">
																<? include(get_template_directory() . "/cms/snippets/case-item.php"); ?>
															</li>
														<? } ?>
													</ul>
												</div>
											</div>
										<? } ?>
										<? wp_reset_postdata(); ?>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<div class="block">
			<div class="anchor" id="pokryti"></div>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="areas">
							<div class="section-head">
								<h2><?=get_field('nadpis_5');?></h2>
                                <div class="desc">
                                    <?=get_field('text_5');?>
                                </div>
							</div>


							<div class="row">
								<div class="col-12">
									<img src="<?=get_template_directory_uri(); ?>/static/img/svg2023/mapa.svg">
								
								</div>
								<div class="col-md-4">


									<div class="area-address">
										<p class="head"><? _e('Centrála','firemniajtaci'); ?> Brno</p>
										<ul>
                                            <li><img src="<?=get_template_directory_uri(); ?>/static/img/svg2023/map-point.svg"></li>
                                            <div class="adress-detail">
                                                <li><?=get_field('ulice','options');?>,</li>
                                                <li><?=get_field('mesto','options');?></li>
                                            </div>

										</ul>
									</div>
								</div>
								<div class="col-md-4">


									<div class="area-address">
										<p class="head"><?_e('Pobočka','firemniajtaci');?> Praha</p>
										<ul>
                                            <li><img src="<?=get_template_directory_uri(); ?>/static/img/svg2023/map-point.svg"></li>
                                            <div class="adress-detail">
											    <li><?=get_field('ulice_praha','options');?></li>
											    <li><?=get_field('mesto_praha','options');?></li>
                                            </div>
										</ul>
									</div>
								</div>
								<div class="col-md-4">

									<div class="area-address">
										<p class="head"><?_e('Pobočka','firemniajtaci');?> Ostrava</p>
										<ul>
                                            <li><img src="<?=get_template_directory_uri(); ?>/static/img/svg2023/map-point.svg"></li>
                                            <div class="adress-detail">
                                                <li>Zámecká 41/2</li>
                                                <li>702 00 Ostrava</li>
                                            </div>
										</ul>
									</div>
								</div>
							</div>

						</section>
					</div>
				</div>
			</div>
		</div>
		<div class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="contact-form">
							<div class="section-head">
								<h2><?=get_field('nadpis_6');?></h2>
							</div>
							<?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
						</section>
					</div>
				</div>
			</div>
			<div class="plus-contact"></div>
		</div>
	</div>
<? get_footer(); ?>