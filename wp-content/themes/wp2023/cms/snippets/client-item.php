<div class="item col-12 col-sm-6 col-lg-3">
	<div class="item-inner">
		<div class="img">
			<div class="frame">
				<img src="<?=get_field('logo')['url'];?>" alt="<? the_title(); ?>" width="<?=get_field('sirka');?>">
			</div>
		</div>
		<? if (is_page(2)) { ?>
		<?/*<div class="text">
			<?=get_field('text');?>
		</div>*/?>
		<? } ?>
	</div>
</div>