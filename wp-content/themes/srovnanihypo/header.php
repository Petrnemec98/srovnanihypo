<!DOCTYPE html>
<html>
    <head>

        <title>
            <?php

            ?>
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180"
              href="<?= get_template_directory_uri(); ?>/static/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32"
              href="<?= get_template_directory_uri(); ?>/static/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16"
              href="<?= get_template_directory_uri(); ?>/static/favicon/favicon-16x16.png">
        <link rel="manifest" href="<?= get_template_directory_uri(); ?>/static/favicon/site.webmanifest">
        <link rel="mask-icon" href="<?= get_template_directory_uri(); ?>/static/favicon/safari-pinned-tab.svg"
              color="#5bbad5">
        <link rel="shortcut icon" href="<?= get_template_directory_uri(); ?>/static/favicon/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="<?= get_template_directory_uri(); ?>/static/favicon/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">

        <!-- CSS -->
        <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri(); ?>/static/css/styles.css">

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
                        <a href="#" class="btn primary">
                            Spočítat hypotéku
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