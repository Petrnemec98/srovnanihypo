<?php
/* Template Name: Pojmy - coffee digital*/
get_header();
?>


<div class="section intro-block">
    <div class="container">
        <h1><h1><?=get_field('nadpis');?></h1></h1>
    </div>
</div>

<div class="section">
    <div class="container tiny">
        <?php if (have_rows('pojmy')) { ?>
        <div class="accordion">
            <?php while (have_rows('pojmy')) { the_row(); ?>
            <div class="accordion-item">
                <div class="accordion-title" onclick="toggleAccordion(this)">
                    <h3><?=get_sub_field('nadpis',);?></h3>
                </div>
                <div class="accordion-content">
                    <p class="small"><?=get_sub_field('popis',);?></p>
                </div>
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
