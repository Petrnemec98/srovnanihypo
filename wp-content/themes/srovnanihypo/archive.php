<? get_header(); ?>
	<div class="content">
		<div class="teaser-blog">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="row">
									<div class="col-md-10 offset-md-1">
										<div class="offset-pb-post-archive">
											<?php include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
											<h1><?php _e('Blog firemních ajťáků plný rad a tipů','firemniajtaci'); ?></h1>
											<?php
												$cats = get_terms(array (
													'taxonomy' => 'temata',
													'hide_empty' => false
												));
											?>
											<div class="cats oneline">
												<p class="head"><? _e('Témata, která vás zajímají','firemniajtaci'); ?></p>
												<ul>
													<? foreach ($cats as $cat) { ?>
														<li>
															<a href="<?=get_term_link($cat);?>" style="color: <?=get_field('color',$cat);?>; background: <?=get_field('background',$cat);?>">
																<?=$cat->name;?>
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
					</div>
				</div>
			</div>
		</div>
		<div class="block alpha">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="offset-mt-post-archive">
							<section class="posts-archive">
								<? $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; ?>
								<?
									$args = array(
										'post_type' => 'blog',
										'posts_per_page' => 1,
										'order' => 'DESC',
										'orderby' => 'date'
									);
								?>
								<? $blog = new WP_Query($args); ?>
								<? if ($blog->have_posts() && $paged == 1) { ?>
									<div class="item-list row">
										<? while ($blog->have_posts()) { $blog->the_post(); ?>
											<? include(get_template_directory() . "/cms/snippets/blog-item-big.php"); ?>
										<? } ?>
									</div>
								<? } ?>
								<? wp_reset_postdata(); ?>

								<?
									$args = array(
										'post_type' => 'blog',
										'posts_per_page' => 9,
										'order' => 'DESC',
										'orderby' => 'date',
										'paged' => $paged
									);
									if ($paged == 1) {
										$args = array(
											'post_type' => 'blog',
											'posts_per_page' => 9,
											'offset' => 1,
											'order' => 'DESC',
											'orderby' => 'date',
											'paged' => $paged
										);
									}
								?>
								<? $blog = new WP_Query($args); ?>
								<? if ($blog->have_posts()) { ?>
									<section class="posts-archive">
										<div class="item-list row">
											<? while ($blog->have_posts()) { $blog->the_post(); ?>
												<? include(get_template_directory() . "/cms/snippets/blog-item.php"); ?>
											<? } ?>
										</div>
										<div class="pager">
											<? wp_pagenavi(array('query' => $blog)); ?>
										</div>
									</section>
								<? } ?>
								<? wp_reset_postdata(); ?>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?/*<div class="block bg-orange">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="services">
							<div class="section-head">
								<h2><?=get_field('nadpis_2',104); // 104: Proč my ?></h2>
							</div>
							<div class="intro">
								<?=get_field('text_2',104); // 104: Proč my ?>
							</div>

							<? include(get_template_directory() . "/cms/snippets/services.php"); ?>

							<? if (get_field('tlacitko_2',104)) { // 104: Proč my ?>
							<div class="foot">
								<a href="<?=get_field('clenstvi','options');?>" class="btn btn-arr">
									<?=get_field('tlacitko_2',104); // 104: Proč my ?>
								</a>
							</div>
							<? } ?>
						</section>
					</div>
				</div>
			</div>
		</div>*/?>
	</div>
<? get_footer(); ?>