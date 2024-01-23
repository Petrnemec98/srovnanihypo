<? get_header(); ?>
	<div class="content">
		<div class="teaser-alt narrow">
			<div class="teaser-text">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="teaser-content">
								<div class="section-head">
									<h1><?=get_field('nadpis_404','options'); ?></h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="teaser-img">
				<img src="<?=get_template_directory_uri();?>/static/images/teaser-kariera-archive.jpg" alt="">
			</div>
		</div>
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="intro narrow last">
							<?=get_field('text_404','options'); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<? get_footer(); ?>