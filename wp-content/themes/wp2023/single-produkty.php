

<!-- Template 1-->

<? get_header(); ?>
    <?php $selected_template = get_field('lp-selector'); // Získání hodnoty pole lp-selector ?>

    <?php if ($selected_template === 'template_1') : ?>
        <div class="content">
            <div class="teaser-alt">
                <div class="teaser-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="teaser-content">
                                    <div class="section-head full">
                                        <?/*<a href="<?=get_post_type_archive_link('it-sluzby');?>" class="btn-back"><?=get_icon('arr-l');?><?_e('IT služby','firemniajtaci'); ?></a>*/?>
                                        <p class="suphead"><?=get_field('nadnadpis');?></p>
                                        <h1><? the_title(); ?></h1>

                                        <section class="service-price">
                                            <?=get_field('cena');?>
                                        </section>

                                        <div class="intro">
                                            <?=get_field('text');?>
                                        </div>

                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block omega white-bg">
                <div class="container">
                    <section class="service-detail">
                        <div class="row">
                            <?/*<div class="col-12">
                                <div class="tag-list">
                                    <ul>
                                        <li><a href="/" class="link">Todo: Operační systémy</a></li>
                                        <li><a href="/" class="link">Licence</a></li>
                                    </ul>
                                </div>
                            </div>*/?>
                            <div class="col-md-7">
                                <? if (have_rows('sluzba_obsah')) { ?>
                            <? while (have_rows('sluzba_obsah')) { the_row(); ?>
                              <? include(get_template_directory() . "/cms/snippets/flexible-content-service.php"); ?>
                            <? } ?>
                          <? } ?>
                            </div>
                            <div class="col-md-4 offset-md-1">


                                <section class="service-nav">
                                    <h3 class="medium">
                                        <? _e('Naši klienti také potřebují','firemniajtaci'); ?>
                                    </h3>
                                    <? $sluzby = get_field('sluzby'); ?>
                                    <? if ($sluzby) { ?>
                                    <ul>
                                        <? foreach ($sluzby as $post) { ?>
                                          <? setup_postdata($post); ?>
                                          <div class="item">
                                                    <a href="<? the_permalink(); ?>" class="item-inner">
                                                        <div class="img">
                                                            <?=get_icon(get_field('ikona'));?>
                                                        </div>
                                                        <div class="text">
                                                            <? the_title(); ?>
                                                        </div>
                                                    </a>
                                                </div>
                                        <? } ?>
                                    </ul>
                                    <? wp_reset_postdata(); ?>
                                    <? } ?>
                                </section>

                            </div>
                        </div>
                    </section>
                </div>
                <div class="fragment-r alt"></div>
            </div>

            <? if (get_field('nasi_klienti_zobrazit')) { ?>
            <div class="block omega">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="clients">
                                <div class="section-head">
                                    <h2><?=get_field('nadpis_1',2);?></h2>
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
                                    <h2><?=get_field('nadpis_tym',281);?></h2>
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
                                        <p class="suphead"><? _e('Případové studie','firemniajtaci'); ?></p>
                                        <h2><? _e('Výsledky našich klientů vám otevřou oči','firemniajtaci'); ?></h2>
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
                            <section class="accordion small faq">
                                <div class="section-head">
                                    <h2><? _e('Hledáte odpověď? Zeptejte se nás!','firemniajtaci'); ?></h2>
                                </div>
                                <?php if (have_rows('faq')) { ?>
                                    <div class="item-list">
                                        <?php while (have_rows('faq')) { the_row(); ?>
                                            <div class="item">
                                                <div class="item-head">
                                                    <?=get_sub_field('dotaz'); ?>
                                                    <span class="plus"></span>
                                                    <img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/faq-close.svg" alt="">
                                                    <img class="faq-active" src="<?=get_template_directory_uri(); ?>/static/filles/faq-active.svg" alt="">
                                                </div>
                                                <div class="item-content">
                                                    <?=get_sub_field('odpoved');?>
                                                </div>
                                            </div>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <? } ?>
            <div class="block alt">
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
                                    <?=get_field('text_kontakt');?>
                                </div>
                                <?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="plus-contact"></div>
            </div>
        </div>
    <?php elseif ($selected_template === 'template_2') : ?>
        <div class="content">
            <div class="teaser-alt">
                <div class="teaser-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="teaser-content">
                                    <div class="section-head wide">
                                        <p class="suphead"><?=get_field('nadnadpis');?></p>
                                        <h1><? the_title(); ?></h1>
                                    </div>
                                    <div class="intro">
                                        <?=get_field('text');?>
                                    </div>

                                    <a href="#kontakt" class="links no-underline center-auto">
                                        <button class="button green normal-size hover"><span class="button__text">Domluvit schůzku</span></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service detail-->
            <div class="block omega">
                <div class="container">
                    <section class="service-detail v2">
                        <div class="row gap-2 <?php echo (get_field('left-right') === 'Vpravo') ? 'img-right' : ''; ?>">
                            <div class="col-md-5 v2">
                                <img src="<?= get_field('service_img'); ?>" alt="<?= get_field('header'); ?>">
                            </div>
                            <div class="col-md-7">
                                <div class="post-text">
                                    <p><?= get_field('perex'); ?></p>
                                </div>
                                <div class="post-text">
                                    <div class="entry">
                                        <div class="check-list">
                                            <?php if (have_rows('service_list')) { ?>
                                                <ul>
                                                    <?php while (have_rows('service_list')) {
                                                        the_row(); ?>
                                                        <li><?= get_sub_field('row_service_list'); ?></li>
                                                    <?php } ?>
                                                </ul>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

						<!--Other services-->
						<?php if (have_rows('next_services')) { ?>
							<?php while (have_rows('next_services')) {
								the_row(); ?>
								<div class="row gap-2 <?php echo (get_sub_field('left-right-other') === 'Vpravo') ? 'img-right' : ''; ?>">
									<div class="col-md-5 v2">
										<img src="<?= get_sub_field('service_img-other'); ?>" alt="<?= get_field('header'); ?>">
									</div>
									<div class="col-md-7">
										<div class="post-text">
											<p><?= get_sub_field('description_service-other'); ?></p>
										</div>
										<div class="post-text">
											<div class="entry">
												<div class="check-list">
													<?php if (have_rows('service_benefits-other')) { ?>
														<ul>
															<?php while (have_rows('service_benefits-other')) {
																the_row(); ?>
																<li><?= get_sub_field('row_service_list-other'); ?></li>
															<?php } ?>
														</ul>
													<?php } ?>
												</div>
											</div>
										</div>
									</div>
								</div>
							<?php } ?>
						<?php } ?>


                        <div class="anchor v2">
                                <div class="container">
                                    <div class="row">
                                        <div>
                                            <div class="check-list-big white v2">
                                                <? if (have_rows('service_benefits')) { ?>
                                                    <div class="item-list row left">
                                                        <? while (have_rows('service_benefits')) { the_row(); ?>
                                                            <div class="item col-12 col-sm-6 col-lg-4 ">
                                                                <div class="item-inner white">
                                                                    <div class="img">
                                                                        <?=get_icon(get_sub_field('icon_benefits'));?>
                                                                    </div>
                                                                    <?=get_sub_field('desc_benefits'); ?>
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
                    </section>
                </div>
            </div>

            <!-- Other service-->
            <div class="block omega">
                <div class="anchor" id="sluzby"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="services">
                                <div class="section-head">
                                    <h2><?=get_field('other-service_header');?></h2>
                                </div>
                                <? $sluzby = get_field('sluzby'); ?>
                                <? if ($sluzby) { ?>
                                    <div class="item-list row">
                                        <? foreach ($sluzby as $post) { ?>
                                            <? setup_postdata($post); ?>
                                                <div class="item col-sm-6 col-md-4 col-xl-2">
                                                    <a href="<?= get_permalink(); ?>" class="item-inner">
                                                        <div class="img">
                                                            <?= get_icon(get_field('ikona')); ?>
                                                        </div>
                                                        <div class="text">
                                                            <h3 class="medium"><?php the_title(); ?></h3>
                                                            <p><?= get_field('perex_kratky'); ?></p>
                                                        </div>
                                                    </a>
                                                </div>
                                         <? } ?>
                                    </div>
                                <?php }
                                wp_reset_postdata();
                                ?>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <!-- USPs-->
            <? if (have_rows('usp_list')) { ?>
            <div class="block omega">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="usp">
                                <div class="section-head">
                                    <h2><?=get_field('usp_header');?></h2>
                                </div>
                                    <div class="item-list row">
                                        <? while (have_rows('usp_list')) { the_row(); ?>
                                            <div class="item col-sm-6 col-md-4">
                                                <div class="item-inner">
                                                    <div class="img">
                                                        <?
                                                        $image_id = get_sub_field('usp_img')['ID'];
                                                        $img_src = wp_get_attachment_image_url($image_id, '246_160');
                                                        $img_srcset = wp_get_attachment_image_srcset($image_id, '246_160');
                                                        ?>
                                                        <img data-src="<?=esc_url($img_src); ?>"
                                                             data-srcset="<?=esc_attr($img_srcset); ?>"
                                                             sizes="(min-width: 1490px) 238px, (min-width: 1200px) 182px, (min-width: 992px) 146px, (min-width: 768px) 210px, (min-width: 576px) 240px, 100vw" alt="<?=get_sub_field('nadpis');?>" class="lazyload">
                                                    </div>
                                                    <div class="text">
                                                        <div class="head">
                                                            <h3 class="medium"><?=get_sub_field('usp_subhead'); ?></h3>
                                                        </div>
                                                        <div class="desc">
                                                            <p><?=get_sub_field('usp_desc'); ?></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        <? } ?>
                                    </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <? } ?>
            <!-- Price -->
            <? while (have_rows('price_list')) { the_row(); ?>
            <div class="block section">
                <div class="container">
                    <div class="row">
                        <div class="col-10 offset-1">
                            <section class="service-list v2">
                                <div class="section-head">
                                    <h2><?=get_field('price_header');?></h2>
                                </div>
                                     <div class="item-list row">
                                         <div class="item col-12 col-md-6 col-lg-4">
                                                 <div class="item-inner">
                                                     <div class="item-head">
                                                         <div class="img">
                                                             <?=get_icon(get_sub_field('price_icon'));?>
                                                         </div>
                                                         <h3><?=get_sub_field('price_subhead'); ?></h3>
                                                     </div>
                                                     <div class="item-price">
                                                         <p><span>Od <?=get_sub_field('price_mon'); ?> Kč</span> měsíčně</p>
                                                     </div>

                                                     <div class="item-desc">
                                                         <div class="desc">
                                                             <p><?=get_sub_field('price_desc'); ?></p>
                                                         </div>
                                                         <? if (have_rows('price_list-usp')) { ?>
                                                             <ul>
                                                                 <? while (have_rows('price_list-usp')) { the_row(); ?>
                                                                     <li><img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/price-shop-icon.svg" alt=""><?=get_sub_field('price-usp'); ?></li>
                                                                 <? } ?>
                                                             </ul>
                                                         <? } ?>
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
            <!-- Proces -->
            <? if (have_rows('proces_list')) { ?>
            <div class="block omega white-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="proces">

                                    <div class="section-head">
                                        <p class="suphead yellow">Proces</p>
                                        <h2><?=get_field('proces_header');?></h2>
                                    </div>
                                    <div class="item-list row">
                                        <? while (have_rows('proces_list')) { the_row(); ?>
                                            <div class="item col-12 col-md-6 col-lg-4">
                                                <div class="item-inner">
                                                    <div class="img">
                                                        <?
                                                        $image_id = get_sub_field('proces_item-img')['ID'];
                                                        $img_src = wp_get_attachment_image_url($image_id );
                                                        $img_srcset = wp_get_attachment_image_srcset($image_id );
                                                        ?>
                                                        <img data-src="<?=esc_url($img_src); ?>"
                                                             data-srcset="<?=esc_attr($img_srcset); ?>" alt="<?=get_sub_field('nadpis');?>" class="lazyload">
                                                    </div>

                                                        <div class="head">
                                                            <h3 class="medium"><?=get_sub_field('proces_item-header'); ?></h3>
                                                        </div>
                                                        <div class="desc">
                                                            <p><?=get_sub_field('proces_item-desc'); ?></p>
                                                        </div>


                                                </div>
                                            </div>
                                        <? } ?>
                                    </div>

                                <a href="#kontakt" class="links no-underline center-auto">
                                    <button class="button green normal-size hover"><span class="button__text">Domluvit schůzku</span></button>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <? } ?>
            <!-- S-data -->
            <? if (have_rows('s-data_list')) { ?>
            <div class="block omega">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="s-data">
                                    <div class="item-list row">
                                        <? while (have_rows('s-data_list')) { the_row(); ?>
                                            <div class="item col-12 col-md-6 col-lg-4">
                                                <div class="item-inner">
                                                    <div class="img">
                                                        <?=get_icon(get_sub_field('s-data-icon'));?>
                                                    </div>
                                                    <div class="prex">
                                                        <h3 class="large"><?=get_sub_field('s-data-value'); ?></h3>
                                                        <p class="unit"><?=get_sub_field('s-data-unit'); ?></p>
                                                    </div>

                                                    <? if (have_rows('s-data-list-2')) { ?>
                                                        <ul>
                                                            <? while (have_rows('s-data-list-2')) { the_row(); ?>
                                                                <li><img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/price-shop-icon.svg" alt=""><?=get_sub_field('s-data-list-row'); ?></li>
                                                            <? } ?>
                                                        </ul>
                                                    <? } ?>
                                                </div>
                                            </div>
                                        <? } ?>
                                    </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <? } ?>
            <!-- Realizace -->
            <? if (get_field('realizace_header')) { ?>
            <div class="block alt-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="realizace">
                                <div class="row">
                                    <div class="head">
                                        <div>
                                            <p class="suphead">Realizace</p>
                                            <h2><?=get_field('realizace_header');?></h2>
                                        </div>

                                        <p class="desc"><?=get_field('realizace_desc');?></p>
                                    </div>

                                    <? $images = get_field('realizace_imgs'); ?>
                                    <? if ($images) { ?>
                                        <div class="post-gallery">
                                            <div class="item-list row">
                                                <? foreach ($images as $image) { ?>
                                                    <div class="item col-4 col-md-3">
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
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <? }?>
            <div class="block alt-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="case-studies">
                                <div class="row">
                                    <div class="head col-md-4">
                                        <p class="suphead"><? _e('Případové studie','firemniajtaci'); ?></p>
                                        <h2><? _e('Výsledky našich klientů vám otevřou oči','firemniajtaci'); ?></h2>
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
                                <section class="accordion small faq">
                                    <div class="section-head">
                                        <h2><? _e('Hledáte odpověď? Zeptejte se nás!','firemniajtaci'); ?></h2>
                                    </div>
                                    <?php if (have_rows('faq')) { ?>
                                        <div class="item-list">
                                            <?php while (have_rows('faq')) { the_row(); ?>
                                                <div class="item">
                                                    <div class="item-head">
                                                        <?=get_sub_field('dotaz'); ?>
                                                        <span class="plus"></span>
                                                        <img class="faq-close" src="<?=get_template_directory_uri(); ?>/static/filles/faq-close.svg" alt="">
                                                        <img class="faq-active" src="<?=get_template_directory_uri(); ?>/static/filles/faq-active.svg" alt="">
                                                    </div>
                                                    <div class="item-content">
                                                        <?=get_sub_field('odpoved');?>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                    <?php } ?>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            <? } ?>
            <div class="block alt">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <section class="contact-form" id="kontakt">
                                <div class="img-head">
                                    <? include(get_template_directory() . "/static/filles/top-contact-art.svg"); ?>
                                </div>
                                <div class="section-head">
                                    <h2><?=get_field('nadpis_kontakt');?></h2>
                                </div>
                                <div class="intro">
                                    <?=get_field('text_kontakt');?>
                                </div>
                                <?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="plus-contact"></div>
            </div>
        </div>
    <?php endif; ?>
<? get_footer(); ?>

