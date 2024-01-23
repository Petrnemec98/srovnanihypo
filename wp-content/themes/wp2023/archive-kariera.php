<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt narrow">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head">
									<? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
									<?/*<p class="suphead alt"><?=get_field('nadnadpis',168);?></p>*/?>
									<h1><?=get_field('nadpis',168);?></h1>
								</div>
							</div>
                            <div class="career-heading">
                                <div class="row">
                                    <div class="img col-md-5 col-xl-6">
                                        <div class="inner">
                                            <? if (get_field('video',168)) { ?>
                                                <? $id = get_youtube_video_ID(get_field('video',168)); ?>
                                                <a href="https://www.youtube.com/embed/<?=$id;?>" class="career-video" data-purpose="play">
                                                    <img src="<?=get_field('foto',168)['url'];?>" alt="">
                                                    <span class="play">
														<?=get_icon('video-play');?>
													</span>
                                                </a>
                                            <? } else { ?>
                                                <div class="career-video">
                                                    <img src="<?=get_field('foto',168)['url'];?>" alt="">
                                                </div>
                                            <? } ?>
                                        </div>
                                    </div>
                                    <div class="text col-md-7 col-xl-6">
                                        <div class="inner">
                                            <div class="desc">
                                                <?=get_field('text',168);?>
                                            </div>
                                            <div class="btn-set">
                                                <? $args = array(
                                                    'post_type' => 'kariera',
                                                    'posts_per_page' => -1,
                                                    'order' => 'DESC',
                                                    'orderby' => 'date'
                                                ); ?>
                                                <? $career = new WP_Query($args); ?>
                                                <? $count = $career->found_posts; ?>

                                                <a  href="#volne-pozice" class="links no-underline ">
                                                    <button class="button green normal-size hover gap-button"><span class="button__text"><?=get_field('tlacitko',168);?> <span class="num"><?=$count;?></span></button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="block alt-3 alpha omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="section-nav">
							<ul>
								<li>
									<a href="#kde-budes-pracovat" class="to-anchor"><? _e('Kde budeš pracovat?','firemniajtaci'); ?></a>
								</li>
								<li>
									<a href="#co-ziskas-navic" class="to-anchor"><? _e('Co získáš navíc?','firemniajtaci'); ?></a>
								</li>
								<li>
									<a href="#jaci-jsme-kolegove" class="to-anchor"><? _e('Jací jsme kolegové?','firemniajtaci'); ?></a>
								</li>
								<li>
									<a href="#volne-pozice" class="to-anchor"><? _e('Koho právě hledáme?','firemniajtaci'); ?></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="block white-bg omega">
			<div class="anchor" id="kde-budes-pracovat"></div>
			<div class="container">
				<section class="text-slider">
					<div class="row">
						<div class="col-md-7">
							<div class="section-head">
								<p class="suphead green small"><?=get_field('nadnadpis_1',168);?></p>
								<h2><?=get_field('nadpis_1',168);?></h2>
								<div class="desc">
									<?=get_field('text_1',168);?>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div class="image-slider-wrap">
								<div class="image-slider item-slider" id="image-slider" data-slides="2" data-slides-desktop="2" data-slides-tablet="2" data-slides-phablet="2" data-slides-mobile="1" data-focus="0" data-gap="40" data-animation-phablet="0" data-type="slider" data-swipe="false">
									<div class="glide__track" data-glide-el="track">
										<? $images = get_field('fotogalerie',168); ?>
										<? if ($images) { ?>
									    <ul class="glide__slides">
								        <? foreach ($images as $image) { ?>
							            <li class="glide__slide panel">
														<div class="item">
															<div class="img">
																<?
																	$image_id = $image['ID'];
																	$img_src = wp_get_attachment_image_url($image_id, '680_400');
																	$img_srcset = wp_get_attachment_image_srcset($image_id, '680_400');
																?>
																<a href="<?=$image['url'];?>">
																	<img data-src="<?=esc_url($img_src); ?>"
																	     data-srcset="<?=esc_attr($img_srcset); ?>"
																	     sizes="(min-width: 1490px) 315px, (min-width: 1200px) 243px, (min-width: 992px) 278px, (min-width: 768px) 328px, (min-width: 576px) 238px, 100vw" alt="<?=get_sub_field('jmeno');?>" class="lazyload">
																</a>
															</div>
														</div>
													</li>
								        <? } ?>
									    </ul>
										<? } ?>
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
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="block white-bg">
			<div class="anchor what-more" id="co-ziskas-navic">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                                <div class="check-list-big-v2 yellow">
                                    <div class="section-head">
                                        <p class="suphead green small"><?=get_field('nadnadpis_2',168);?></p>
                                        <h2><?=get_field('nadpis_2',168);?></h2>
                                    </div>
                                    <? if (have_rows('co_ziskas',168)) { ?>
                                        <div class="item-list row">
                                            <? while (have_rows('co_ziskas',168)) { the_row(); ?>
                                                <div class="item col-12 col-sm-6 col-lg-4 ">
                                                    <div class="item-inner yellow">
                                                        <img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/checkmark.svg" alt="">
                                                        <?=get_sub_field('text'); ?>
                                                    </div>
                                                </div>
                                            <? } ?>
                                        </div>
                                    <? } ?>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
		</div>

		<div class="block white-bg">
			<div class="anchor" id="volne-pozice"></div>
			<div class="container">
				<div class="row">

					    <div class="col-12">
                            <div class="max-width">
                            <section class="accordion accordion-career">
                                <? $args = array(
                                    'post_type' => 'kariera',
                                    'posts_per_page' => -1,
                                    'order' => 'DESC',
                                    'orderby' => 'date'
                                ); ?>
                                <? $career = new WP_Query($args); ?>
                                <? $count = $career->found_posts; ?>
                                <div class="section-head full">
                                    <p class="suphead green small">
                                        <?=get_field('nadnadpis_4',168);?><span class="free-jobs"> <?=$count;?></span>
                                    </p>
                                    <h2>
                                        <?=get_field('nadpis_4',168);?>
                                    </h2>
                                </div>
                                <? if ($career->have_posts()) { ?>
                                    <div class="item-list">
                                        <? while ($career->have_posts()) { $career->the_post(); ?>
                                            <div class="item">
                                                <a href="<?=get_permalink();?>" class="item-head">
                                                    <div class="head">
                                                        <? the_title(); ?>
                                                        <?
                                                            $cats = get_the_terms(get_the_ID(), 'stitky');
                                                        ?>
                                                        <div class="tag-list last">
                                                            <? if ($cats) { ?>
                                                                <ul>
                                                                    <? foreach ($cats as $cat) { ?>
                                                                        <li>
                                                                            <div class="link career-link"><?=$cat->name;?></div>
                                                                        </li>
                                                                    <? } ?>
                                                                </ul>
                                                            <? } ?>
                                                        </div>
                                                    </div>
                                                    <img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/faq-close.svg" alt="">
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
		</div>
	</div>
<? get_footer(); ?>