<?
/**
 * Template Name: Děkovná stránka
 */

get_header(); ?>
    <div class="content">
        <section class="thank-you">
            <div class="teaser-hp">
                <div class="teaser-img">
                    <img src="<?=get_template_directory_uri();?>/static/filles/thank-you.svg" alt="">
                </div>
                <div class="teaser-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="teaser-content">
                                    <h1 class="big"><?=get_field('nadpis');?></h1>
                                    <div class="desc">
                                        <?=get_field('text');?>

                                        <a  href="/" target="<?=esc_attr($odkaz_target); ?>" class="links no-underline center-auto">
                                            <button class="button green normal-size hover gap-button"><span class="button__text icon-left"><?_e('Vrátit se na úvod','hodinoviajtaci'); ?></span><img src="<?=get_template_directory_uri(); ?>/static/filles/home-05.svg" alt="<? bloginfo('name'); ?>"></button>
                                        </a>
                                    </div>
                                    <div class="social-nav alt">
                                        <ul>
                                            <? if (get_field('linked_in','options')) { ?>
                                                <li>
                                                    <a href="<?=get_field('linked_in','options');?>" target="_blank" rel="noopener">
                                                        <?=get_icon('li');?>
                                                    </a>
                                                </li>
                                            <? } ?>
                                            <? if (get_field('facebook','options')) { ?>
                                                <li>
                                                    <a href="<?=get_field('facebook','options');?>" target="_blank" rel="noopener">
                                                        <?=get_icon('fb');?>
                                                    </a>
                                                </li>
                                            <? } ?>
                                            <? if (get_field('instagram','options')) { ?>
                                                <li>
                                                    <a href="<?=get_field('instagram','options');?>" target="_blank" rel="noopener">
                                                        <?=get_icon('ig');?>
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
        </section>
    </div>
<? get_footer(); ?>