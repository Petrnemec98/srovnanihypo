<div class="section">
    <div class="container partneri">
        <?php if (have_rows('partneri','option')) { ?>
            <div class="row splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        <?php while (have_rows('partneri','option')) { the_row(); ?>

                            <li class="splide__slide" data-splide-interval="2000">
                                <a href="<?=get_sub_field('url');?>">
                                    <img src="<?=get_sub_field('img');?>">
                                </a>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        <?php } ?>
    </div>

</div>
