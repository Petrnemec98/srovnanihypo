<footer class="footer">
    <div class="section footer">
        <div class="row footer-w">
            <div class="col-12 col-lg-5 company-details">
                <div class="logo">
                    <img src="<?=get_field('logo','option');?>">
                </div>
                <div class="detail">
                    <div class="logo-2">
                        <img src="<?=get_field('logo_insia','option');?>">
                    </div>
                    <div class="content">
                        <p><?=get_field('nazev','option');?></p>
                        <p>IČO: <?=get_field('ico','option');?></p>
                        <p class="white-url"><a target="_blank" href="<?=get_field('cnb-url','option');?>"><?=get_field('cnb-text','option');?></a></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 footer-second">
                <div class="contact">
                    <a href="tel:<?=get_field('telefon','option');?>" class="">
                        <img src="<?= get_template_directory_uri(); ?>/static/img/svg/red_phone.svg">
                        <?=get_field('telefon','option');?>
                    </a>
                    <a href="mailto:<?=get_field('email','option');?>" class="">
                        <img src="<?= get_template_directory_uri(); ?>/static/img/svg/red_mail.svg">
                        <?=get_field('email','option');?>
                    </a>
                </div>
                <div class="footer-menu">
                    <?php wp_nav_menu(
                        array(
                            'theme_location' => 'primary',
                            'container' => false,
                            'menu' => 'main-nav',
                            'menu_class' => 'nav',
                            'echo' => true
                        )
                    ); ?>
                    <?php include(get_template_directory() . "/cms/snippets/button.php"); ?>
                </div>
            </div>
        </div>
    </div>

</footer>
<!-- JavaScript pro Splide -->
<script type="text/javascript" src="<?= get_template_directory_uri(); ?>/static/js/splide.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var splide = new Splide('.splide', {
            perPage: 4, // Výchozí počet položek na stránku
            rewind: true,
            type    : 'loop',
            autoplay: 'play',
            breakpoints: {
                768: { // Při šířce obrazovky 768px nebo méně
                    perPage: 2, // Změňte na 2 položky na stránku
                },
            },
        });

        splide.mount();
    });
</script>

<!-- JS -->
<script type="text/javascript" src="<?= get_template_directory_uri(); ?>/static/js/scripts.js"></script>
<!-- Cookie consent CSS -->
<!--TODO-->

<!-- WP -->
<? wp_footer(); ?>
</body>

</html>