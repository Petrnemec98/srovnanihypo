<?php
/* Template Name: Landing page - coffee digital*/
get_header();
?>

<!--Demo -->
<h1><?=get_field('nadpis');?></h1>
<h2><?=get_field('pod-nadpis');?></h2>
<div class="intro">
    <?=get_field('perex');?>
</div>

<p>test</p>

<div class="wysiwig">
    <?=get_field('test');?>
</div>



<?php echo do_shortcode('[contact-form-7 id="3b9d0b0" title="Formulář"]'); ?>

<?php
get_footer();
?>



