
<div class="item col-sm-6 col-md-4">
	<div class="item-inner">
		<div class="img">
			<?
				$attachment_id = get_sub_field('foto')['ID'];
				$img_src = wp_get_attachment_image_url($attachment_id, '440_490');
				$img_srcset = wp_get_attachment_image_srcset($attachment_id, '440_490');
			?>
			<img data-src="<?=esc_url($img_src); ?>"
			     data-srcset="<?=esc_attr($img_srcset); ?>"
			     sizes="(min-width: 1490px) 436px, (min-width: 1200px) 340px, (min-width: 992px) 280px, (min-width: 768px) 210px, (min-width: 576px) 240px, 100vw" alt="<?=get_sub_field('jmeno');?>" class="lazyload">
		</div>
		<div class="text">
			<p class="h3 large"><?=get_sub_field('jmeno'); ?></p>
			<p class="job"><?=get_sub_field('pozice'); ?></p>
			<?/* if (!is_singular('it-sluzby')) { ?>
			<p class="exp"><?=get_sub_field('info'); ?></p>
			<? }*/ ?>
		</div>
	</div>
</div>
