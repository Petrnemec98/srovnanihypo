<div class="section dark">
    <div class="container how-to">
        <h2 class="light"><?=get_field('jak_probiha_spoluprace-nadpis','option')?></h2>
        <?php if (have_rows('jak_probiha_spoluprace','option')) { ?>
            <div class="row">
                <?php while (have_rows('jak_probiha_spoluprace','option')) { the_row(); ?>
                    <div class="item col-12 col-md-4">
                        <div class="special-number">
                            <span><?=get_sub_field('cislo',);?></span>
                        </div>
                        <div class="content">
                            <h3 class="light"><?=get_sub_field('nadpis',);?></h3>
                            <p class="small"><?=get_sub_field('popis',);?></p>
                        </div>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>
</div>