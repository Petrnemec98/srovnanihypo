<?php
/* Template Name: Landing page - coffee digital*/
get_header();
?>

<!--Demo -->
<div class="section">
    <div class="container">
        <h1><?=get_field('nadpis');?></h1>
        <h2><?=get_field('pod-nadpis');?></h2>
        <div class="intro">
            <?=get_field('perex');?>
        </div>
    </div>
</div>


<div class="section dark">
    <div class="container">
        <div class="wysiwig">
            <?=get_field('test');?>
        </div>
    </div>
</div>


<div class="section">
    <div class="container">
        <?php echo do_shortcode('[contact-form-7 id="3b9d0b0" title="Formulář"]'); ?>
    </div>
</div>



<?php
get_footer();
?>



