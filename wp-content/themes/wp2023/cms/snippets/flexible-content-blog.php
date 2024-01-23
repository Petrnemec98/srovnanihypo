<? if (get_row_layout() == 'text') { ?>
<div class="post-section">
	<div class="anchor" id="<?=sanitize_title(get_sub_field('kapitola')); ?>"></div>
	<div class="row">
		<div class="col-12">
			<div class="entry last">
				<?=get_sub_field('text'); ?>
			</div>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'perex') { ?>
<div class="post-section excerpt">
	<div class="row">
		<div class="col-12">
			<div class="entry last">
				<?=get_sub_field('perex'); ?>
			</div>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'foto') { ?>
<div class="post-section">
	<div class="row">
		<div class="col-12">
			<?
				$attachment_id = get_sub_field('foto')['ID'];
				$img_src = wp_get_attachment_image_url($attachment_id, '576_9999');
				$img_srcset = wp_get_attachment_image_srcset($attachment_id, '576_9999');
			?>
			<img src="<?=esc_url($img_src); ?>"
			     srcset="<?=esc_attr($img_srcset); ?>"
			     sizes="(min-width: 576px) 1194px, 100vw" alt="">
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'kapitoly') { ?>
<div class="post-section chapters">
	<div class="row">
		<div class="col-12">
			<h2><?=get_sub_field('kapitoly');?></h2>
			<?
        $repeater = 'clanek_obsah';
        $count = count(get_post_meta(get_the_ID(), $repeater, true));
      ?>
      <ol>
      	<? for ($i = 0; $i < $count; $i++) { ?>
          <?
            $kapitola = get_post_meta(get_the_ID(), $repeater.'_'.$i.'_'.'kapitola', true);
            $component_type = get_post_meta(get_the_ID(), $repeater, true)[$i]
          ?>
          <? if ($component_type == 'text' && $kapitola) { ?>
	          <li>
	          	<a class="to-anchor" href="#<?=sanitize_title($kapitola); ?>"><?=$kapitola; ?></a>
	          </li>
        	<? } ?>
        <? } ?>
      </ol>
		</div>
	</div>
</div>
<? } ?>

<? if (get_row_layout() == 'fotogalerie') { ?>
<div class="post-section">
	<div class="row">
		<div class="col-12">
			<section class="photogallery">
				<? if (get_sub_field('nadpis')) { ?>
				<div class="section-head">
					<h2><?=get_sub_field('nadpis');?></h2>
				</div>
				<? } ?>
				<? $fotogalerie = get_sub_field('fotogalerie'); ?>
				<div class="item-list row">
					<? foreach ($fotogalerie as $image) { ?>
						<div class="item col-6 col-md-4 col-lg-4">
							<div class="item-inner">
								<div class="img">
									<a href="<?=$image['sizes']['large'];?>">
										<?
											$attachment_id = $image['ID'];
											$img_src = wp_get_attachment_image_url($attachment_id, '175_196');
											$img_srcset = wp_get_attachment_image_srcset($attachment_id, '175_196');
										?>
										<img
											src="<?=esc_url($img_src); ?>"
											srcset="<?=esc_attr($img_srcset); ?>"
											alt="<?=$image['alt'];?>"
											sizes="(min-width: 576px) 175px, 100vw"
										>
									</a>
								</div>
							</div>
						</div>
					<? } ?>
				</div>
			</section>
		</div>
	</div>
</div>
<? } ?>