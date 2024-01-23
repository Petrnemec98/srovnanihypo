<? get_header(); ?>
	<div class="teaser alt">
		<div class="row">
			<div class="grid_15">
				<h1><? the_title(); ?></h1>
			</div>
		</div>
	</div>
	<div class="block">
		<div class="row">
			<div class="grid_11 suffix_1">
				<div class="entry">
					<? if ( have_posts() ) : ?>
						<? while ( have_posts() ) : the_post(); ?>
							
							<h1><? the_title(); ?></h1>
							<? the_content(); ?>

						<? endwhile; ?>
					<? else : ?>
						<p><? _e( 'Nenalezeno', ); ?></p>
						<? get_search_form(); ?>
					<? endif; ?>
				</div>
			</div>
			<div class="grid_4">
				<? get_sidebar(); ?>
			</div>
		</div>
	</div>
<? get_footer(); ?>