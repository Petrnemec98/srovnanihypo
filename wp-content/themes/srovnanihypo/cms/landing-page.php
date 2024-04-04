<?php
/* Template Name: Landing page - coffee digital*/
get_header();
?>

<!-- Hlavička -->
<div class="section homepage-header-block">
    <div class="background-cover">
        <div class="background-color"></div>
        <div class="background-img"></div>
    </div>
    <section class="container">
        <h1 class="light"><?=get_field('nadpis');?></h1>
        <div class="intro light">
            <?=get_field('perex');?>
        </div>
            <?php include(get_template_directory() . "/cms/snippets/buttons.php"); ?>
    </section>
</div>

<!--USP-->
<?php include(get_template_directory() . "/cms/snippets/usp.php"); ?>

<!--How-to-->
<?php include(get_template_directory() . "/cms/snippets/how-to.php"); ?>

<!--kalkulacka-->
<?php include(get_template_directory() . "/cms/snippets/kalkulacka.php"); ?>

<!--O-nás-->
<?php include(get_template_directory() . "/cms/snippets/about-us.php"); ?>

<!--Partneři-->
<?php include(get_template_directory() . "/cms/snippets/partneri-light.php"); ?>


<?php
get_footer();
?>



