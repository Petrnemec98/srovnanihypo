<?php
/* Template Name: Hypotéky - coffee digital*/
get_header();
?>

<div class="section">
    <div class="container intro-block">
        <h1><?=get_field('nadpis_hypoteky');?></h1>
        <?=get_field('popis_hypoteky');?>
    </div>
</div>

<!-- Typy hypoték-->
<div class="section">
    <div class="container hypoteky">
        <?php if (have_rows('typ_hypoteky')) { ?>
        <div class="row">
            <?php while (have_rows('typ_hypoteky')) { the_row(); ?>
            <div class="item border-primary">
                <h2><?=get_sub_field('nadpis');?></h2>
                <?=get_sub_field('popis');?>
                <?php include(get_template_directory() . "/cms/snippets/button.php"); ?>
            </div>
            <?php } ?>
        </div>
        <?php } ?>
    </div>
</div>

<!--yellow banner-->
<?php include(get_template_directory() . "/cms/snippets/yellow-banner.php"); ?>

<!--Partneři-->
<?php include(get_template_directory() . "/cms/snippets/partneri-light.php"); ?>

<?php
get_footer();
?>
