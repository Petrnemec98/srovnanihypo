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

<!--btn test-->
<div class="block">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <a href="" class="btn primary">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn secondary">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn dark">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn light">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn primary large">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn secondary large">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn dark large">
                    Spočítat hypotéku
                </a>
            </div>
            <div class="col-12">
                <a href="" class="btn light large">
                    Spočítat hypotéku
                </a>
            </div>
        </div>
    </div>
</div>

<div class="wysiwig">
    <?=get_field('test');?>
</div>





<?php
get_footer();
?>



