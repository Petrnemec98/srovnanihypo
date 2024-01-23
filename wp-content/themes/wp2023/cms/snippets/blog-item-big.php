<div class="item big col-12">
    <div class="inner">
        <div class="img">
            <a href="<?=get_permalink();?>">
                <?
                $attachment_id = get_field('foto')['ID'];
                $img_src = wp_get_attachment_image_url($attachment_id, '612_429');
                $img_srcset = wp_get_attachment_image_srcset($attachment_id, '612_429');
                ?>
                <img src="<?=esc_url($img_src); ?>"
                     srcset="<?=esc_attr($img_srcset); ?>"
                     sizes="(min-width: 576px) 280px, 100vw" alt="">
            </a>
        </div>
        <div class="text">
            <div class="head">
                <?
                $cats = get_the_terms($post->ID, 'temata');
                ?>
                <div class="cats">
                    <ul>
                        <? foreach ($cats as $cat) { ?>
                            <li>
                                <a href="<?=get_term_link($cat);?>" style="color: <?=get_field('color',$cat);?>; background: <?=get_field('background',$cat);?>">
                                    <?=$cat->name;?>
                                </a>
                            </li>
                        <? } ?>
                    </ul>
                </div>
                <h3>
                    <a href="<?=get_permalink();?>"><? the_title(); ?></a>
                </h3>
            </div>
            <div class="post-meta">
                <? the_time('j. n. Y'); ?> | <?=mw_get_reading_time();?>
            </div>
        </div>
    </div>
</div>