<?php 
/* Template Name: Landing page 1 */

get_header(); 
?>

	<div class="content">
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
            <p>1</p>

		<div class="block omega">
			<div class="container">
				<section class="service-detail">
					<div class="row">
						<div class="col-12 col-md-6">
							<? if (have_rows('sluzba_obsah')) { ?>
				      	<? while (have_rows('sluzba_obsah')) { the_row(); ?>
				          <? include(get_template_directory() . "/cms/snippets/flexible-content-service.php"); ?>
				        <? } ?>
				      <? } ?>
						</div>
						<div class="col-12 col-md-6">
							<img src="<?php echo get_field( 'foto_obsah' ); ?>" />
						</div>
					</div>
				</section>
				
			</div>
		<div class="fragment-r alt"></div>	
		</div>

		<div class="block alt">
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