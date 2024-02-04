<footer class="footer">
    <div class="section footer">
        <div class="footer-w">
            <div class="company-details">
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
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>
<!-- JS -->
<script type="text/javascript" src="<?= get_template_directory_uri(); ?>/static/js/scripts.js"></script>

<!-- Cookie consent CSS -->
<!--TODO-->

<!-- WP -->
<? wp_footer(); ?>
</body>

</html>