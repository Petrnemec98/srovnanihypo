<div class="item col-sm-6 col-md-4">
	<div class="img">
		<a href="<?=get_permalink();?>">
			<?
				$attachment_id = get_field('foto')['ID'];
				$img_src = wp_get_attachment_image_url($attachment_id, '392_265');
				$img_srcset = wp_get_attachment_image_srcset($attachment_id, '392_265');
			?>
			<img src="<?=esc_url($img_src); ?>"
			     srcset="<?=esc_attr($img_srcset); ?>"
			     sizes="(min-width: 576px) 280px, 100vw" alt="">
		</a>
	</div>
	<div class="text">
		<?
			$cats = get_the_terms($post->ID, 'temata');
		?>
		<? if (!empty($cats)) { ?>
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
		<? } ?>
		<h3 class="small">
			<a href="<?=get_permalink();?>"><? the_title(); ?></a>
		</h3>
		<div class="post-meta">
			<? the_time('j. F Y'); ?> | <?=mw_get_reading_time();?>
		</div>
	</div>
</div>