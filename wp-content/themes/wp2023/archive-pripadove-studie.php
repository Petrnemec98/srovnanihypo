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
									<h1><? post_type_archive_title(); ?></h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="teaser-img">
				<img src="<?=get_template_directory_uri();?>/static/images/teaser-services.jpg" alt="">
			</div>
		</div>

		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="case-studies">
							<div class="row">
								<div class="head col-md-4">
									<p class="suphead"><?=get_field('nadnadpis_4');?></p>
									<h2><?=get_field('nadpis_4');?></h2>
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
	</div>
<? get_footer(); ?>