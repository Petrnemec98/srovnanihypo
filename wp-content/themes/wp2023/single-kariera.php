<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt narrow">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-md-10 offset-md-1">
							<div class="teaser-content">
								<div class="section-head">
									<? /*include(get_template_directory() . "/cms/snippets/breadcrumb.php"); */?>
									<?/*<p class="suphead alt"><? _e('Kariéra','firemniajtaci'); ?></p>*/?>
									<h1><? the_title(); ?></h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block">
			<div class="container">
				<section class="career-detail">
					<div class="row">
						<div class="col-lg-8">
							<? if (get_field('perex')) { ?>
							<div class="post-excerpt">
								<?=get_field('perex');?>
							</div>
							<? } ?>
							<div class="post-text">
								<div class="entry">
									<?=get_field('text');?>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="sidebox">
                                <section class="contact-form">
                                    <div class="section-head">
                                        <h2> <? _e('Napiš nám hned','firemniajtaci'); ?> </h2>
                                    </div>
                                    <div class="box-content">
                                        <?=do_shortcode('[contact-form-7 id="218" html_class="std form-career-detail"]'); ?>
                                    </div>
                                </section>

							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="fragment-r alt"></div>
		</div>
		<div class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
                        <div class="max-width">
						<section class="career">
							<div class="accordion accordion-career">
								<div class="section-head">
									<h2>
										<? _e('Není to úplně ono? Zkus hledat dál!','firemniajtaci'); ?>
									</h2>
								</div>
								<? $args = array(
									'post_type' => 'kariera',
									'posts_per_page' => -1,
									'order' => 'DESC',
									'orderby' => 'date'
								); ?>
								<? $career = new WP_Query($args); ?>
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
							</div>
						</section>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
<? get_footer(); ?>