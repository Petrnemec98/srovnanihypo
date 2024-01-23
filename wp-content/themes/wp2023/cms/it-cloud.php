<?
/**
 * Template Name: IT Cloud
 */
get_header(); ?>
	<div class="content">
		<div class="teaser-alt narrow offset-video">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head wide">
									<? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
									<h1><?=get_field('nadpis');?></h1>
								</div>
								<div class="intro">
									<?=get_field('text');?>
								</div>

                                <a href="#kontakt" class="links no-underline center-auto">
                                    <button class="button green normal-size hover"><span class="button__text"><?=get_field('tlacitko');?></span></button>
                                </a>
								<? if (have_rows('ikony')) { ?>
									<div class="icon-list">
										<div class="item-list row">
											<? while (have_rows('ikony')) { the_row(); ?>
												<div class="item">
													<div class="item-inner">
														<?=get_icon(get_sub_field('ikona'));?>
														<div class="text">
															<?=get_sub_field('text');?>
														</div>
													</div>
												</div>
											<? } ?>
										</div>
									</div>
								<? } ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block alpha omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="video-service offset-video">
							<p class="head">
								<?=get_field('nadpis_video');?>
							</p>
							<? if (get_field('video')) { ?>
								<? $id = get_youtube_video_ID(get_field('video')); ?>
								<a href="https://www.youtube.com/embed/<?=$id;?>" class="img" data-purpose="play">
									<img src="<?=get_field('video_cover')['url']; ?>" alt="">
									<span class="play">
										<?=get_icon('video-play');?>
									</span>
								</a>
							<? } else { ?>
								<div class="img">
									<img src="<?=get_field('video_cover')['url']; ?>" alt="">
								</div>
							<? } ?>
						</section>
					</div>
				</div>
			</div>
		</div>
		<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="purpose">
							<div class="section-head">
								<h2><?=get_field('nadpis_dostupnost');?></h2>
							</div>
							<? if (have_rows('dostupnost')) { ?>
								<div class="item-list row">
									<? while (have_rows('dostupnost')) { the_row(); ?>
										<div class="item col-6 col-lg-3">
											<div class="item-inner">
												<div class="img">
													<?=get_icon(get_sub_field('ikona'));?>
													<h3 class="large"><?=get_sub_field('text'); ?></h3>
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
		</div>
		<div class="block omega">
			<div class="container">
				<section class="section options">
					<div class="row align-items-center">
						<div class="img col-md-5 offset-md-1 faq-illustration">
							<div class="frame">
								<img src="<?=get_template_directory_uri(); ?>/static/images/cloud.svg" alt="">
							</div>
						</div>
						<div class="text col-md-5 offset-md-1">
							<div class="inner">
								<div class="section-head section-head--left">
									<p class="suphead small"><?=get_field('nadnadpis_moznosti');?></p>
									<h2><?=get_field('nadpis_moznosti');?></h2>
								</div>
								<section class="accordion small faq">
									<?php if (have_rows('moznosti')) { ?>
										<div class="item-list">
											<?php while (have_rows('moznosti')) { the_row(); ?>
												<div class="item">
													<div class="item-head">
														<?=get_sub_field('nazev');?>
														<span class="plus"></span>
														<img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/faq-close.svg" alt="">
														<img class="faq-active" src="<?=get_template_directory_uri(); ?>/static/filles/faq-active.svg" alt="">
													</div>
													<div class="item-content">
														<?=get_sub_field('text');?>
													</div>
												</div>
											<?php } ?>
										</div>
									<?php } ?>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div class="fragment-l alt"></div>
		</div>
		<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="check-list-big">
							<div class="section-head">
								<h2><?=get_field('nadpis_prednosti');?></h2>
							</div>
							<? if (have_rows('prednosti')) { ?>
								<div class="item-list row">
									<? while (have_rows('prednosti')) { the_row(); ?>
										<div class="item">
											<div class="item-inner">
                                                <img src="<?=get_template_directory_uri(); ?>/static/img/svg2023/check-list.svg">
												<?=get_sub_field('text'); ?>
											</div>
										</div>
									<? } ?>
								</div>
							<? } ?>
							<div class="foot">
                                <a href="#kontakt" class="links no-underline center-auto">
                                    <button class="button green normal-size hover"><span class="button__text"><?=get_field('tlacitko_prednosti');?></span></button>
                                </a>
							</div>
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
								<h2><?=get_field('nadpis_klienti');?></h2>
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
							<?/*<div class="foot">
								<p>a více než 100 dalších firem</p>
							</div>*/?>
						</section>
					</div>
				</div>
			</div>
		</div>
		<? } ?>
<!--
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="team-list">
							<div class="section-head">
								<h2><?=get_field('nadpis_tym');?></h2>
							</div>
							<? if (have_rows('tym','options')) { ?>
								<div class="item-list row">
									<? while (have_rows('tym','options')) { the_row(); ?>
										<? include(get_template_directory() . "/cms/snippets/team-item.php"); ?>
									<? } ?>
								</div>
							<? } ?>
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
									<p class="suphead small"><?=get_field('nadnadpis_pripadove_studie');?></p>
									<h2><?=get_field('nadpis_pripadove_studie');?></h2>
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

		<? if (get_field('faq_zobrazit')) { ?>
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="accordion">
							<div class="section-head">
								<h2><?=get_field('nadpis_faq');?></h2>
							</div>
							<? if (have_rows('faq')) { ?>
								<div class="item-list">
								<? while (have_rows('faq')) { the_row(); ?>
									<div class="item">
										<div class="item-head">
											<?=get_sub_field('dotaz'); ?>
											<?=get_icon('accordion');?>
										</div>
										<div class="item-content">
											<?=get_sub_field('odpoved'); ?>
										</div>
									</div>
								<? } ?>
								</div>
							<? } ?>
						</section>
					</div>
				</div>
			</div>
		</div>
		<? } ?>

		<div class="block alt">
			<div class="anchor" id="kontakt"></div>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="contact-form">
							<div class="img-head">
                                <? include(get_template_directory() . "/static/filles/top-contact-art.svg"); ?>
							</div>
							<div class="section-head">
								<h2><?=get_field('nadpis_kontakt');?></h2>
							</div>
							<div class="intro">
								<?=get_field('nadpis_text');?>
							</div>
							<?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
						</section>

					</div>
				</div>
			</div>
		</div>
	</div>
<? get_footer(); ?>