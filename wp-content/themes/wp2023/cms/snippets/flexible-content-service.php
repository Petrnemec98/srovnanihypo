<? if (get_row_layout() == 'perex') { ?>
<div class="post-excerpt">
	<?=get_sub_field('perex');?>
</div>
<? } ?>

<? if (get_row_layout() == 'text') { ?>
<div class="post-text">
	<div class="entry">
		<?=get_sub_field('text'); ?>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'odrazky') { ?>
<div class="post-text">
	<div class="entry">
		<div class="check-list">
			<? if (have_rows('odrazky')) { ?>
				<ul>
					<? while (have_rows('odrazky')) { the_row(); ?>
						<li><?=get_sub_field('text'); ?></li>
					<? } ?>
				</ul>
			<? } ?>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'video') { ?>
	<div class="post-video">
	<? if (get_sub_field('video')) { ?>
		<? $id = get_youtube_video_ID(get_sub_field('video')); ?>
		<a href="https://www.youtube.com/embed/<?=$id;?>" class="img" data-purpose="play">
			<img src="<?=get_sub_field('video_cover')['url']; ?>" alt="">
			<span class="play">
				<?=get_icon('play');?>
			</span>
		</a>
	<? } else { ?>
		<div class="img">
			<img src="<?=get_sub_field('video_cover')['url']; ?>" alt="">
		</div>
	<? } ?>
	</div>
<? } ?>



<? if (get_row_layout() == 'text-v2') { ?>
<div class="col-12 col-md-6">
	<div class="post-text">
		<div class="entry">
			<?=get_sub_field('text-v2'); ?>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'foto-v2') { ?>
<div class="col-12 col-md-6">
	<div class="post-section">
		<div class="row">
			<div class="col-12">
				<?
					$attachment_id = get_sub_field('foto-v2')['ID'];
					$img_src = wp_get_attachment_image_url($attachment_id, '576_9999');
					$img_srcset = wp_get_attachment_image_srcset($attachment_id, '576_9999');
				?>
				<img src="<?=esc_url($img_src); ?>"
				     srcset="<?=esc_attr($img_srcset); ?>"
				     sizes="(min-width: 576px) 1194px, 100vw" alt="">
			</div>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'odrazky-v2') { ?>
<div class="col-12 col-md-6">
	<div class="post-text">
		<div class="entry">
			<div class="check-list">
				<? if (have_rows('odrazky-v2')) { ?>
					<ul>
						<? while (have_rows('odrazky-v2')) { the_row(); ?>
							<li><?=get_sub_field('text-v2'); ?></li>
						<? } ?>
					</ul>
				<? } ?>
			</div>
		</div>
	</div>
</div>
<? } ?>


<? if (get_row_layout() == 'video-v2') { ?>
<div class="col-12 col-md-6">
	<div class="post-video">
	<? if (get_sub_field('url_video')) { ?>
		<? $id = get_youtube_video_ID(get_sub_field('url_video')); ?>
		<a href="https://www.youtube.com/embed/<?=$id;?>" class="img" data-purpose="play">
			<img src="<?=get_sub_field('cover_video-v2')['url']; ?>" alt="">
			<span class="play">
				<?=get_icon('play');?>
			</span>
		</a>
	<? } else { ?>
		<div class="img">
			<img src="<?=get_sub_field('cover_video-v2')['url']; ?>" alt="">
		</div>
	<? } ?>
	</div>
</div>
<? } ?>