<!--yellow banner-->
<div class="section banner">
    <div class="cover">
        <div class="background-color bg-yellow"></div>
        <div class="background-img"></div>
    </div>
    <div class="container">
        <h3><?=get_field('nadpis-banner','option');?></h3>
        <?=get_field('popis-banner','option');?>

        <div class="buttons">
            <a href="<?=get_field('btn-url-3','option');?>" class="btn secondary">
                <?=get_field('btn-text-3','option');?>
            </a>
            <a href="<?=get_field('btn-url-4','option');?>" class="btn light">
                <?=get_field('btn-text-4','option');?>
            </a>
        </div>
    </div>
</div>