<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head full">
									<?/*<a href="<?=get_post_type_archive_link('pripadove-studie');?>" class="btn-back"><?=get_icon('arr-l');?><? _e('Případové studie','firemniajtaci'); ?></a>*/?>
									<?/* include(get_template_directory() . "/cms/snippets/breadcrumb.php");*/ ?>
									<h1><? the_title(); ?></h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block omega">
			<div class="container">
				<section class="case-detail">
					<div class="row">
						<div class="col-lg-7">
							<div class="post-text">
								<div class="entry">
									<?=get_field('obsah');?>
								</div>
							</div>
							<? $images = get_field('fotogalerie'); ?>
							<? if ($images) { ?>
						    <div class="post-gallery">
							    <div class="item-list row">
						        <? foreach ($images as $image) { ?>
											<div class="item col-6 col-md-4">
												<div class="img">
													<?
														$image_id = $image['ID'];
														$img_src = wp_get_attachment_image_url($image_id, '244_228');
														$img_srcset = wp_get_attachment_image_srcset($image_id, '244_228');
													?>
													<a href="<?=$image['url'];?>">
														<img data-src="<?=esc_url($img_src); ?>"
														     data-srcset="<?=esc_attr($img_srcset); ?>"
														     sizes="(min-width: 1490px) 238px, (min-width: 1200px) 182px, (min-width: 992px) 146px, (min-width: 768px) 210px, (min-width: 576px) 240px, 100vw" alt="<?=get_sub_field('jmeno');?>" class="lazyload">
													</a>
												</div>
											</div>
						        <? } ?>
							    </div>
						    </div>
							<? } ?>
						</div>
						<div class="col-lg-4 offset-lg-1">
							<section class="case-side-info">
								<h3 class="medium"><? _e('Podrobnosti','firemniajtaci'); ?></h3>
								<? if (have_rows('podrobnosti')) { ?>
									<ul>
									<? while (have_rows('podrobnosti')) { the_row(); ?>
										<li>
											<span class="label"><?=get_sub_field('label'); ?></span>
											<span class="value"><?=get_sub_field('hodnota'); ?></span>
										</li>
									<? } ?>
									</ul>
								<? } ?>

                                <section class="service-nav">
                                    <h3 class="medium"><? _e('Poskytnuté služby','firemniajtaci'); ?></h3>
                                    <? $sluzby = get_field('sluzby'); ?>
                                    <? if ($sluzby) { ?>
                                        <ul>
                                            <? foreach ($sluzby as $post) { ?>
                                                <? setup_postdata($post); ?>
                                                <div class="item">
													<?php
													$only_view = get_field('only_view');
													if ($only_view) {
														?>
														<span class="nav-white" class="item-inner hover">
															<div class="img">
																<?=get_icon(get_field('ikona'));?>
															</div>
															<div class="text">
																<? the_title(); ?>
															</div>
														</span>

													<?php } else { ?>
														<a class="nav-white" href="<? the_permalink(); ?>" class="item-inner">
															<div class="img">
																<?=get_icon(get_field('ikona'));?>
															</div>
															<div class="text">
																<? the_title(); ?>
															</div>
														</a>
													<?php } ?>
                                                </div>
                                            <? } ?>
                                        </ul>
                                        <? wp_reset_postdata(); ?>
                                    <? } ?>


                                </section>


                                <section class="case-side-technology">
                                    <h3 class="medium"><? _e('Technologie, na které jsme se spoléhali','firemniajtaci'); ?></h3>
                                    <? $terms = get_terms('technologie'); ?>
                                    <? if (!empty($terms) && !is_wp_error($terms)) { ?>
                                        <div class="item-list row">
                                            <? foreach ($terms as $term) { ?>
                                                <div class="item col-6 col-md-4 col-lg-4">
                                                    <div class="item-inner">
                                                        <div class="img">
                                                            <div class="frame">
                                                                <img data-src="<?=get_field('logo',$term)['url'];?>" alt="<?=$term->name;?>" width="" height="" class="lazyload">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <? } ?>
                                        </div>
                                    <? } ?>
                                </section>
							</section>



						</div>
					</div>
				</section>
			</div>
			<div class="fragment-r alt"></div>
		</div>
		<? $args = array(
			'post_type' => 'pripadove-studie',
			'posts_per_page' => -1,
			'order' => 'ASC',
			'orderby' => 'menu_order',
			'post__not_in' => array(get_the_ID())
		); ?>
		<? $cases = new WP_Query($args); ?>
		<? if ($cases->have_posts()) { ?>
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="case-studies">
							<div class="row">
								<div class="head col-md-4">
									<p class="suphead"><?=get_field('nadnadpis_pripadove_studie_pripadove_studie','options');?></p>
									<h2><?=get_field('nadpis_pripadove_studie_pripadove_studie','options');?></h2>
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
										<div class="case-slider" id="case-slider" data-gap="40" data-type="slider" data-swipe="false">
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
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<? } ?>
		<? wp_reset_postdata(); ?>
		<div class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="contact-form">
							<div class="img-head">
                                <? include(get_template_directory() . "/static/filles/top-contact-art.svg"); ?>
							</div>
							<div class="section-head">
								<h2><?=get_field('nadpis_kontakt_pripadove_studie','options');?></h2>
							</div>
							<div class="intro">
								<?=get_field('text_kontakt_pripadove_studie','options');?>
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