<div class="item">
	<div class="item-inner">
		<?/*<div class="tag-list">
			<ul>
				<li><a href="/" class="link">Todo: Operační systémy</a></li>
				<li><a href="/" class="link">Licence</a></li>
			</ul>
		</div>*/?>
		<span class="large"><a href="<?=get_permalink();?>"><? the_title(); ?></a></span>
		<div class="desc">
			<?=get_field('perex');?>
		</div>
		<a href="<?=get_permalink();?>" class="more"><? _e('Detail studie','firemniajtaci'); ?></a>
	</div>
</div>