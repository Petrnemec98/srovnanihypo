<?php 
/* Template Name: LP 2023 */

get_header(); 
?>

<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head full">
									<? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
									<p class="suphead"><?=get_field('nadnadpis');?></p>
									<h1><?=get_field('nadpis');?></h1>
								</div>
								<div class="intro">
									<?=get_field('perex');?>
								</div>
								<div class="btn-set">
									<a href="#sluzby" class="btn big to-anchor"><?=get_field('tlacitko');?></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="teaser-img">
				<img src="<?=get_template_directory_uri();?>/static/images/teaser-services.jpg" alt="">
			</div>
			<div class="teaser-symbols alt">
				<div class="s-1"></div>
				<div class="s-2"></div>
				<div class="s-3"></div>
				<div class="s-4"></div>
				<div class="s-5"></div>
			</div>
		</div>
		<div class="block">
			<div class="anchor" id="sluzby"></div>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="service-list">
							<div class="section-head">
								<p class="suphead"><?=get_field('nadnadpis_1');?></p>
								<h2><?=get_field('nadpis_1');?></h2>
							</div>
							<?
								$args = array(
									'taxonomy' => 'kategorie',
									'hide_empty' => false
								);
								$cats = get_terms($args);
							?>
							<div class="cat-filter">
								<? if ($cats) { ?>
									<ul>
										<? foreach ($cats as $cat) { ?>
											<li>
												<a href="<?=get_term_link($cat);?>" class="link"><?=get_icon(get_field('ikona',$cat));?><?=$cat->name;?></a>
											</li>
										<? } ?>
									</ul>
								<? } ?>
							</div>
							<? $args = array(
								'post_type' => 'it-sluzby',
								'posts_per_page' => -1,
								'order' => 'ASC',
								'orderby' => 'menu_order'
							); ?>
							<? $services = new WP_Query($args); ?>
							<? if ($services->have_posts()) { ?>
								<div class="item-list row">
									<? while ($services->have_posts()) { $services->the_post(); ?>
										<div class="item col-12 col-sm-6 col-md-4 col-xl-3">
											<a href="<?=get_permalink();?>" class="item-inner">
												<div class="item-head">
													<div class="img">
														<div class="frame">
															<?=get_icon(get_field('ikona'));?>
														</div>
													</div>
													<div class="text">
														<h3 class="medium"><? the_title(); ?></h3>
													</div>
												</div>
												<div class="desc">
													<?=get_field('perex');?>
												</div>
												<div class="price">
													<?=get_field('cena');?>
												</div>
											</a>
										</div>
									<? } ?>
								</div>
							<? } ?>
							<? wp_reset_postdata(); ?>
						</section>
					</div>
				</div>
			</div>
		</div>
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
								<? include(get_template_directory() . "/cms/snippets/avatar.php"); ?>
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