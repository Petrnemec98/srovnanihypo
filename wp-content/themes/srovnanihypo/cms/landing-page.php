<?php
/* Template Name: Landing page - coffee digital*/
get_header();
?>


<div class="section homepage-header-block">
    <div class="background-cover">
        <div class="background-color"></div>
        <div class="background-img"></div>
    </div>
    <div class="container">
        <h1 class="light"><?=get_field('nadpis');?></h1>
        <div class="intro light">
            <?=get_field('perex');?>
        </div>
        <div class="buttons">
            <a href="#kalkulacka" class="btn primary">
                Chci novou hypotéku
            </a>
            <a href="#kalkulacka" class="btn primary">
                Chci refinancovat
            </a>
        </div>
    </div>
</div>
<div class="section">
    <div class="container">
        <div class="wysiwig">
            <?=get_field('test');?>
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
    <div id="kalkulacka" class="container">
        <?php echo do_shortcode('[contact-form-7 id="3b9d0b0" title="Formulář"]'); ?>
    </div>
</div>



<?php
get_footer();
?>



