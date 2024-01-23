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
                                            <div class="section-head full">
                                                <? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
                                                <h1><? _e('Blog firemních ajťáků plný rad a tipů','firemniajtaci'); ?></h1>
                                                <?
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
										'orderby' => 'date',
											'tax_query' => array(
												array(
							            'taxonomy' => 'temata',
							            'field'    => 'slug',
							            'terms'    => array(get_queried_object()->slug)
								        )
											)
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
										'paged' => $paged,
										'tax_query' => array(
											array(
						            'taxonomy' => 'temata',
						            'field'    => 'slug',
						            'terms'    => array(get_queried_object()->slug)
							        )
										)
									);
									if ($paged == 1) {
										$args = array(
											'post_type' => 'blog',
											'posts_per_page' => 9,
											'offset' => 1,
											'order' => 'DESC',
											'orderby' => 'date',
											'paged' => $paged,
											'tax_query' => array(
												array(
							            'taxonomy' => 'temata',
							            'field'    => 'slug',
							            'terms'    => array(get_queried_object()->slug)
								        )
											)
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
	</div>
<? get_footer(); ?>