<?php 
/* Template Name: Landing page 1 - v2.0 */

get_header(); 
?>

	<div class="content landing-page">
				<div class="teaser-alt">
			<div class="teaser-text">
				<div class="container">
					<div class="row lp-content" style="align-items: center; justify-content: center;">
						<div class="">
							<div class="teaser-content">
								<div class="section-head full">
									<? include(get_template_directory() . "/cms/snippets/breadcrumb.php"); ?>
									<p class="suphead"><?=get_field('nadnadpis');?></p>
									<h1><?php echo get_field( 'nadpis' ); ?></h1>
                                    <div class="intro">
                                        <?=get_field('perex');?>
                                    </div>
                                    <a href="tel:<?=get_field('telefon','options');?>" class="links no-underline center-auto">
                                        <button class="button green normal-size hover"><span class="button__text ">Domluvit schůzku</span></button>
                                    </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="block omega">
			<div class="container">
				<section class="service-detail">
					<div class="row">
					
							<? if (have_rows('sluzba_obsah')) { ?>
				      	<? while (have_rows('sluzba_obsah')) { the_row(); ?>
				          <? include(get_template_directory() . "/cms/snippets/flexible-content-service.php"); ?>
				        <? } ?>
				      <? } ?>
					</div>
				</section>
				
			</div>
		<div class="fragment-r alt"></div>	
		</div>

		<? if (get_field('nadpis_ajtaci')) { ?>
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="membership last">
							<div class="container">
								<div class="row">
									<div class="img col-md-6 order-md-1">
										<div class="inner">
											
											<img src="<?=get_field('foto_ajtaci');?>"alt="">
										</div>
									</div>
									<div class="text col-md-5 order-md-0">
										<div class="inner">
											<div class="head wide">
												<h2><?=get_field('nadpis_ajtaci');?></h2>
											</div>
											<? if (have_rows('seznam_ajtaci')) { ?>
											<div class="desc last">
												<div class="shield-list narrow">
													<ul>
														<? while (have_rows('seznam_ajtaci')) { the_row(); ?>
															<li><?=get_sub_field('pole');?></li>
														<? } ?>
													</ul>
												</div>
											</div>
											<? } ?>
											<? if (get_field('tlacitko_ajtaci')) { ?>
											<a href="#kontakt" class="btn btn-arr to-anchor"><?=get_field('tlacitko_ajtaci');?></a>
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


		<? if (get_field('nasi_klienti_zobrazit')) { ?>
		<div class="block omega">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<section class="clients">
							<div class="section-head">
								<h2 class="suphead"><?=get_field('nadpis_nasi_klienti');?></h2>
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
						</section>
					</div>
				</div>
			</div>
			<div class="fragment-r"></div>
		</div>
		<? } ?>


		<div id="kontakt" class="block alt">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="contact-form">
							<div class="img-head">
								<? include(get_template_directory() . "/cms/snippets/avatar.php"); ?>
							</div>
							<div class="section-head">
								<h2><?=get_field('nadpis_kontakt');?></h2>
							</div>
							<div class="intro">
								<?=get_field('text_kontakt');?>
							</div>
							<?=do_shortcode('[contact-form-7 id="6" html_class="std form-contact"]'); ?>
						</div>
					</div>
				</div>
			</div>
			<div class="plus-contact"></div>
		</div>
	</div>
	
<? get_footer(); ?>