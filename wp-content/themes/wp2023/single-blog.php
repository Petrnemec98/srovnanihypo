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
										<div class="offset-pb-post">
                                            <div class="section-head">
                                                <div class="subhead">
                                                    <? $cats = get_the_terms($post->ID, 'temata'); ?>
                                                    <? if (!empty($cats)) { ?>
                                                        <div class="cats">
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
                                                    <? } ?>
                                                </div>

                                                <h1><? the_title();?></h1>
                                                <div class="post-meta">
                                                    <? the_time('j. F Y'); ?>, <?=mw_get_reading_time();?>
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

		<div class="block alpha omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="offset-mt-post">
							<setion class="post">
								<div class="post-img">
									<?
										$attachment_id = get_field('foto')['ID'];
										$img_src = wp_get_attachment_image_url($attachment_id, '1194_625');
										$img_srcset = wp_get_attachment_image_srcset($attachment_id, '1194_625');
									?>
									<img src="<?=esc_url($img_src); ?>"
									     srcset="<?=esc_attr($img_srcset); ?>"
									     sizes="(min-width: 576px) 1194px, 100vw" alt="">
								</div>
								<div class="post-main">
									<div class="post-info">
										<div class="author">
											<? $author_id = $post->post_author; ?>
											<div class="img">
												<img src="<?=get_field('foto','user_' . $author_id)['url'];?>" alt="<?=get_the_author_meta('display_name', $author_id); ?>">
											</div>
											<p class="head">autor</p>
											<p class="name">
												<?=get_the_author_meta('display_name', $author_id); ?>
											</p>
											<div class="desc">
												<?=get_the_author_meta('description', $author_id); ?>
											</div>
										</div>
										<? if (!empty($cats)) { ?>
										<div class="cats alt">
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
										<? } ?>
									</div>
									<div class="post-detail">
										<? if (have_rows('clanek_obsah')) { ?>
							      	<? while (have_rows('clanek_obsah')) { the_row(); ?>
							          <? include(get_template_directory() . "/cms/snippets/flexible-content-blog.php"); ?>
							        <? } ?>
							      <? } ?>
									</div>
									<div class="post-additional">
										<? $args = array(
											'post_type' => 'blog',
											'posts_per_page' => 3,
											'order' => 'DESC',
											'orderby' => 'date'
										); ?>
										<? $blog = new WP_Query($args); ?>
										<? if ($blog->have_posts()) { ?>
											<div class="posts-related">
												<div class="item-list row">
													<? while ($blog->have_posts()) { $blog->the_post(); ?>
														<? include(get_template_directory() . "/cms/snippets/blog-item-side.php"); ?>
													<? } ?>
												</div>
											</div>
										<? } ?>
										<? wp_reset_postdata(); ?>
									</div>
								</div>
							</setion>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?/*<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="nl-box">
							<div class="section-head clean">
								<h2><? _e('Líbí se vám článek? Nepropásněte další!','firemniajtaci'); ?></h2>
							</div>
							<div class="intro">
								<p><? _e('Přihlaste se do občasníku firemních ajťáků a získejte chytré IT tipy','firemniajtaci'); ?></p>
							</div>

							<? include(get_template_directory() . "/cms/snippets/form-nl.php"); ?>

						</section>
					</div>
				</div>
			</div>
		</div>*/?>

		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="posts-related">
							<div class="section-head">
								<h2><? _e('Přečtěte si další článek','firemniajtaci'); ?></h2>
							</div>
							<? $args = array(
								'post_type' => 'blog',
								'posts_per_page' => 3,
								'order' => 'DESC',
								'orderby' => 'date',
								'post__not_in' => array(get_the_ID())
							); ?>
							<? $blog = new WP_Query($args); ?>
							<? if ($blog->have_posts()) { ?>
								<div class="item-list row">
									<? while ($blog->have_posts()) { $blog->the_post(); ?>
										<? include(get_template_directory() . "/cms/snippets/blog-item-related.php"); ?>
									<? } ?>
								</div>
							<? } ?>
							<? wp_reset_postdata(); ?>
						</section>
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