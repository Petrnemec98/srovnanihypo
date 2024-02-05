<div class="section">
    <div class="container partneri">
        <?php if (have_rows('partneri','option')) { ?>
            <div class="row">
                <?php while (have_rows('partneri','option')) { the_row(); ?>
                    <div class="item">
                        <a href="<?=get_sub_field('url');?>">
                            <img src="<?=get_sub_field('img');?>">
                        </a>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</div>