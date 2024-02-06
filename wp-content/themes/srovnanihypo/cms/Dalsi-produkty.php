<?php
/* Template Name: Dalši produkty - coffee digital*/
get_header();
?>


<div class="section intro-block">
    <div class="container">
        <h1><?=get_field('nadpis');?></h1>
    </div>
</div>

<div class="section">
    <div class="container tiny">
        <?=get_field('obsah');?>
    </div>
</div>

<!--yellow banner-->
<?php include(get_template_directory() . "/cms/snippets/yellow-banner.php"); ?>

<!--Partneři-->
<?php include(get_template_directory() . "/cms/snippets/partneri-light.php"); ?>


<?php
get_footer();
?>
