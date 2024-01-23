<?
/**
 * Template Name: Kontakt
 */

get_header(); ?>
	<div class="content">
		<div class="teaser-alt narrow">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="max-width">
								<div class="section-head">
									<? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
									<?/*<p class="suphead alt"><?=get_field('nadnadpis');?></p>*/?>
									<h1><?=get_field('nadpis');?></h1>
								</div>


                                <div class="contact-primary">
                                    <section class="contact">
                                        <div class="row gap-contact">
                                            <div class="col-lg-6">
                                                <div class="contact-header">
                                                    <?=get_field('perex');?>
                                                </div>
                                                <div class="contact-item contact-item-first last">
                                                    <p class="head">
                                                        <?=get_field('nadpis_1');?>
                                                    </p>
                                                    <div class="desc">
                                                        <?=get_field('text_1');?>
                                                    </div>
                                                    <div class="item-inner">
                                                        <div class="img">
                                                            <div class="circle">
                                                                <?=get_icon('phone-call');?>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            <div class="inner">
                                                                <a href="tel:+420 <?=get_field('telefon','options');?>" class="big" target="_blank" rel="noopener"><?=get_field('telefon','options');?></a>
                                                                <br>
                                                                <span class="small"><?=get_field('telefon_poznamka','options');?></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="item-inner">
                                                        <div class="img">
                                                            <div class="circle">
                                                                <?=get_icon('mail-delivery');?>
                                                            </div>
                                                        </div>
                                                        <div class="text">
                                                            <div class="inner">
                                                                <a href="mailto:<?=get_field('e-mail','options');?>" class="big" target="_blank" rel="noopener"><?=get_field('e-mail','options');?></a>
                                                                <br>
                                                                <span class="small">Pište kdykoliv :)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <? if (get_field('text_2')) { ?>
                                                    <div class="contact-item">
                                                        <p class="head">
                                                            <?=get_field('nadpis_2');?>
                                                        </p>
                                                        <div class="item-inner">
                                                            <div class="img">
                                                                <div class="circle">
                                                                    <?=get_icon('customer');?>
                                                                </div>
                                                            </div>
                                                            <div class="text">
                                                                <div class="inner">
                                                                    <?=get_field('text_2');?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <? } ?>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="box-contact">
                                                    <div class="box-content">
                                                        <div class="tabs tabs-contact">
                                                            <div class="tab-content">
                                                                <div class="tab" id="obchodni-oddeleni">
                                                                    <section class="contact-form">
                                                                        <?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div class="contact-illustration">
                                        <img src="<?=get_template_directory_uri(); ?>/static/filles/contact-art.svg" alt="<? bloginfo('name'); ?>">
                                    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="block omega">
            <div class="contact-secondary">
                <section class="contact max-width">
                    <div class="row gap-contact">
                        <div class="col-lg-4">
                            <div class="contact-item">
                                <p class="head">
                                    <? _e('Brno, Česká republika','firemniajtaci'); ?>
                                </p>
                                <div class="item-inner">
                                    <div class="img">
                                        <div class="circle">
                                            <?=get_icon('map-pointer');?>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <div class="inner">
                                            <a href="https://mapy.cz/s/hojupesaku" target="_blank" rel="noopener" class="big">
                                                <?=get_field('ulice','options');?>
                                                <br>
                                                <?=get_field('mesto','options');?>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="desc">
                                    Můžete k nám zaběhnout v pracovní dny od 8 do 16 hod.
                                </div>
                            </div>
                            <div class="contact-item">
                                <p class="head">
                                    <? _e('Nastav.it s.r.o.','firemniajtaci'); ?>
                                </p>
                                <div class="item-inner">
                                    <div class="img">
                                        <div class="circle">
                                            <?=get_icon('company-id');?>
                                        </div>
                                    </div>
                                    <div class="text">
                                        <div class="inner">
														<span class="medium">
															IČ: <?=get_field('ic','options');?>
															<br>
															DIČ: <?=get_field('dic','options');?>
														</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="desc">
                                    Zapsáno v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl C, vložka 91570.
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="smap-wrap">
                                <iframe class="smap" style="border:none" src="https://frame.mapy.cz/s/jamujucelo" frameborder="0"></iframe>

                                <script type="text/javascript" src="https://api.mapy.cz/loader.js"></script>
                                <script type="text/javascript">Loader.load();</script>
                                <script type="text/javascript" src="<?=get_template_directory_uri();?>/static/js/ext/maps.js"></script>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
	</div>
<? get_footer(); ?>