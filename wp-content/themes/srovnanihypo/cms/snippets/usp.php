<div class="section">
    <div class="container usp">
        <h2><?=get_field('nadpis_why-us');?></h2>
        <?php if (have_rows('usp')) { ?>
            <div class="row">
                <?php while (have_rows('usp')) { the_row(); ?>
                    <div class="item col-12 col-md-6">
                        <div class="img">
                            <img src="<?=get_sub_field('img');?>">
                        </div>
                        <div class="content">
                            <h3><?=get_sub_field('nadpis');?></h3>
                            <p><?=get_sub_field('popis');?></p>
                        </div>
                    </div>
                <?php } ?>
            </div>
        <?php } ?>
        <?php include(get_template_directory() . "/cms/snippets/buttons.php"); ?>
    </div>
</div>