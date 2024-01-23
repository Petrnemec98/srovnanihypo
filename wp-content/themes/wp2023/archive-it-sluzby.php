<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head full">
									<p class="suphead"><?=get_field('nadnadpis',252);?></p>
									<h1><?=get_field('nadpis',252);?></h1>
								</div>
								<div class="intro">
									<?=get_field('perex',252);?>
								</div>
								<div class="btn-set">
									<a href="#sluzby" class="links no-underline center-auto">
										<button class="button green normal-size hover"><span class="button__text"><?=get_field('tlacitko',252);?></span></button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block bg-white section" id="sluzby">
			<div class="container">
				<div class="row">
					<div class="col-10 offset-1">
						<section class="service-list">
							<div class="section-head">
								<p class="suphead"><?=get_field('nadnadpis_1',252);?></p>
								<h2><?=get_field('nadpis_1',252);?></h2>
							</div>
							<?
								$args = array(
									'taxonomy' => 'kategorie',
									'hide_empty' => false
								);
								$cats = get_terms($args);
							?>
							<div class="cat-filter cats oneline">
								<? if ($cats) { ?>
									<ul>
										<? foreach ($cats as $cat) { ?>
											<li>
												<a href="<?=get_term_link($cat);?>" class="link">
													<?=$cat->name;?>
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
                                <div class="item-list row">
                                    <?php while ($services->have_posts()) { $services->the_post();
                                        // Kontrola, zda je služba deaktivována pro seznam služeb
                                        $services_list_disabled = get_field('services-list_disable');
                                        if (!$services_list_disabled) {
                                            ?>
                                            <div class="item col-12 col-sm-6 col-md-4">
                                                <a href="<?= get_permalink(); ?>" class="item-inner">
                                                    <div class="item-head">
                                                        <div class="img">
                                                            <?= get_icon(get_field('ikona')); ?>
                                                        </div>
                                                        <div class="text">
                                                            <h3 class="medium"><?php the_title(); ?></h3>
                                                        </div>
                                                    </div>
                                                    <div class="desc">
                                                        <?= get_field('perex'); ?>
                                                    </div>
                                                    <div class="price">
                                                        <?= get_field('cena'); ?>
                                                    </div>
                                                </a>
                                            </div>
                                            <?php
                                        }
                                    } ?>
                                </div>
                            <?php }
                            wp_reset_postdata();
                            ?>

                        </section>
					</div>
				</div>
			</div>
		</div>
        <!--
		<div class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="offer">
							<div class="section-head-l">
								<div class="head">
									<p class="suphead"><?=get_field('nadnadpis_2',252);?> </p>
									<h2><?=get_field('nadpis_2',252);?></h2>
								</div>
								<div class="glide-nav">
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
							<? if (have_rows('sluzby_na_miru',252)) { ?>
								<div class="offer-slider-wrap">
									<div class="offer-slider" id="offer-slider" data-type="slider" data-swipe="false">
										<div class="glide__track" data-glide-el="track">
											<ul class="glide__slides">
												<? while (have_rows('sluzby_na_miru',252)) { the_row(); ?>
													<li class="glide__slide panel">
														<div class="item">
															<div class="item-head">
																<h3><?=get_sub_field('nazev');?></h3>
																<p class="price"><?=get_sub_field('cena');?> <span class="note"><?=get_sub_field('obdobi');?></span></p>
															</div>
															<div class="item-content">
																<div class="desc">
																	<p><?=get_sub_field('perex');?></p>
																</div>
																<? if (have_rows('check_list')) { ?>
																	<div class="check-list">
																		<ul>
																			<? while (have_rows('check_list')) { the_row(); ?>
																				<li><?=get_sub_field('text');?></li>
																			<? } ?>
																		</ul>
																	</div>
																<? } ?>
															</div>
														</div>
													</li>
												<? } ?>
											</ul>
										</div>
									</div>
								</div>
							<? } ?>
							<div class="foot">
								<a href="<?=get_permalink(155);?>" class="btn"><?=get_field('tlacitko_2',252);?></a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		-->
		<div class="block alt-2">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="case-studies">
							<div class="row">
								<div class="head col-md-4">
									<p class="suphead"><?=get_field('nadnadpis_pripadove_studie',252);?></p>
									<h2><?=get_field('nadpis_pripadove_studie',252);?></h2>
									<div class="glide-nav">
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
										<? $args = array(
											'post_type' => 'pripadove-studie',
											'posts_per_page' => -1,
											'order' => 'ASC',
											'orderby' => 'menu_order'
										); ?>
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
		<div class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="contact-form">
							<div class="img-head">
								<? include(get_template_directory() . "/static/filles/top-contact-art.svg"); ?>
							</div>
							<div class="section-head">
								<h2><?=get_field('nadpis_kontakt',252);?></h2>
							</div>
							<div class="intro">
								<?=get_field('text_kontakt',252);?>
							</div>
							<?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
						</div>
					</div>
				</div>
			</div>
			<div class="plus-contact"></div>
		</div>
	</div>
<? get_footer(); ?>