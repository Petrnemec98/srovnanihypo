<? get_header(); ?>
	<div class="content">
		<div class="block">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<? while (have_posts()) { the_post(); ?>

							<div class="section-head">
								<h1 class="h2"><? the_title(); ?></h1>
							</div>

							<div class="generic">
								<div class="row">
									<div class="col-md-8 offset-md-2">
										<div class="entry">
											<? the_content(); ?>
										</div>
									</div>
								</div>
							</div>

							<? edit_post_link( __( 'Editovat' ), '<span class="edit-link">', '</span>' ); ?>
						<? }; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
<? get_footer(); ?>