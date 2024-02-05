<?php
/* Template Name: Hypotéky - coffee digital*/
get_header();
?>

<div class="section">
    <div class="container">
        <h1><?=get_field('nadpis_hypoteky');?></h1>
        <p class="prex"><?=get_field('popis_hypoteky');?></p>
    </div>
</div>

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
