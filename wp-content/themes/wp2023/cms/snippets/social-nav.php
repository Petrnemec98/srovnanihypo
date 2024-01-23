
		<? if (get_field('linked_in','options')) { ?>
			<a href="<?=get_field('linked_in','options');?>" target="_blank" rel="noopener">
				<?=get_icon('li');?>
			</a>
		<? } ?>
		<? if (get_field('facebook','options')) { ?>
			<a href="<?=get_field('facebook','options');?>" target="_blank" rel="noopener">
				<img src="<?=get_template_directory_uri(); ?>/static/filles/facebook-white.svg" alt="<? bloginfo('name'); ?>">
			</a>
		<? } ?>
		<? if (get_field('instagram','options')) { ?>
			<a href="<?=get_field('instagram','options');?>" target="_blank" rel="noopener">
				<img src="<?=get_template_directory_uri(); ?>/static/filles/instagram-white.svg" alt="<? bloginfo('name'); ?>">
			</a>
		<? } ?>

