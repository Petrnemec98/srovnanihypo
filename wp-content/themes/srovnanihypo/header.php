<!DOCTYPE html>
<html>
    <head>

        <title>
            <?php

            ?>
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS -->
        <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri(); ?>/static/css/styles.css">

        <!-- CSS pro Splide -->
        <link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/static/css/splide.min.css">

        <!-- Include jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <!-- WP -->
        <? wp_enqueue_script('jquery'); ?>
        <? wp_head(); ?>

        <!-- Google Tag Manager -->
        <!--TODO-->
        <!-- End Google Tag Manager -->
    </head>

    <body>
        <!-- Google Tag Manager (noscript) -->
        <!--TODO-->
        <!-- End Google Tag Manager (noscript) -->
        <div class="main-wrap">
        <header class="<?php echo is_front_page() ? 'header' : 'header secondary'; ?>">
                <!--hlavička-->
            <div class="nav-block">
                    <!--logo-->
                    <div class="">
                        <!--TODO-->
                        <a href="/" title="" class="logo">
                            <img src="<?=get_field('logo','option');?>"
                        </a>
                    </div>
                    <!--Navigace-->
                    <div class="navigation">
                        <nav class="main-nav" role="navigation">
                            <?php wp_nav_menu(
                                array(
                                    'theme_location' => 'primary',
                                    'container' => false,
                                    'menu' => 'main-nav',
                                    'menu_class' => 'nav',
                                    'echo' => true
                                )
                            ); ?>
                        </nav>
                        <a href="<?=get_field('btn-url-1','option');?>" class="btn primary">
                            Spočítat hypotéku
                        </a>
                        <a href="tel:<?=get_field('telefon','option');?>" class="btn primary">
                            <?=get_field('telefon','option');?>
                        </a>
                        <button class="navigation__toggle" type="button">
                            <div class="open">
                                <img src="<?= get_template_directory_uri(); ?>/static/img/svg/open.svg">
                            </div>
                            <div class="close">
                                <img src="<?= get_template_directory_uri(); ?>/static/img/svg/close.svg">
                            </div>
                        </button>
                    </div>

                </div>
        </header>
    </div>