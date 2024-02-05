<?php
/* Template Name: O nás - coffee digital*/
get_header();
?>

<div class="section">
    <div class="container intro-block">
        <h1><?=get_field('nazev','option');?></h1>
        <div class="detail">
            <p>IČO: <?=get_field('adresa','option');?></p>
            <p>IČO: <?=get_field('ico','option');?></p>
            <p>IČO: <?=get_field('spisova_znacka','option');?></p>
        </div>
        <div class="buttons">
            <a href="tel:<?=get_field('telefon','option');?>" class="btn secondary">
                <?=get_field('telefon','option');?>
            </a>
            <a href="mailto:<?=get_field('email','option');?>" class="btn secondary">
                <?=get_field('email','option');?>
            </a>
        </div>

    </div>
</div>


    <!--yellow banner-->
    <?php include(get_template_directory() . "/cms/snippets/yellow-banner.php"); ?>

    <!--Partneři-->
    <?php include(get_template_directory() . "/cms/snippets/partneri-light.php"); ?>


<?php
get_footer();
?>