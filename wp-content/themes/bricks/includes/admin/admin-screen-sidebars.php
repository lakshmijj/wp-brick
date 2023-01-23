<?php
namespace Bricks;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$admin_notice    = null;
$bricks_sidebars = get_option( BRICKS_DB_SIDEBARS, [] );

// Form submit: Save sidebar
if ( isset( $_POST['bricks-sidebar-name'] ) ) {
	if ( ! empty( $_POST['bricks-sidebar-name'] ) ) {
		// Add new sidebar to db
		array_push(
			$bricks_sidebars,
			[
				'id'          => strtolower( str_replace( ' ', '_', $_POST['bricks-sidebar-name'] ) ),
				'name'        => $_POST['bricks-sidebar-name'],
				'description' => $_POST['bricks-sidebar-description'],
			]
		);

		update_option( BRICKS_DB_SIDEBARS, $bricks_sidebars, false );

		$admin_notice = '<div class="notice notice-success"><p>' . esc_html__( 'New sidebar created.', 'bricks' ) . '</p></div>';
	} else {
		$admin_notice = '<div class="notice notice-error"><p>' . esc_html__( 'Missing sidebar name.', 'bricks' ) . '</p></div>';
	}
}

// Form submit: Delete sidebar
if ( isset( $_POST['bricks-sidebar-index'] ) ) {
	// 1/2: Remove sidebar from options table 'sidebars_widgets'
	$sidebars_widgets = get_option( 'sidebars_widgets' );
	$sidebar_id       = $bricks_sidebars[ $_POST['bricks-sidebar-index'] ]['id'];

	if ( $sidebar_id ) {
		unset( $sidebars_widgets[ $sidebar_id ] );
		update_option( 'sidebars_widgets', $sidebars_widgets );
	}

	// 2/2: Remove sidebar from options table 'bricks_sidebars'
	array_splice( $bricks_sidebars, $_POST['bricks-sidebar-index'], 1 );

	if ( count( $bricks_sidebars ) ) {
		update_option( BRICKS_DB_SIDEBARS, $bricks_sidebars, false );
	} else {
		delete_option( BRICKS_DB_SIDEBARS );
	}

	$admin_notice = '<div class="notice notice-success"><p>' . esc_html__( 'Sidebar deleted.', 'bricks' ) . '</p></div>';
}
?>

<div class="wrap bricks-admin-wrapper sidebars">
	<h1 class="admin-notices-placeholder"></h1>

	<?php echo wp_kses_post( $admin_notice ); ?>

	<h1 class="title"><?php esc_html_e( 'Sidebars', 'bricks' ); ?></h1>

	<p class="bricks-admin-lead">
		<?php esc_html_e( 'Create and manage an unlimited number of custom sidebars. Add sidebars in the builder using the "Sidebar" element.', 'bricks' ); ?>
	</p>

	<div class="bricks-admin-inner">
		<div class="new-sidebar-wrapper">
			<h3><?php esc_html_e( 'Create new sidebar', 'bricks' ); ?></h3>

			<form id="bricks-save-sidebar" method="post">
				<table class="table-create-sidebar">
					<tbody>
						<tr>
							<!-- <td><label for="bricks-sidebar-name"><?php esc_html_e( 'Name', 'bricks' ); ?></label></td> -->
							<td><input type="text" name="bricks-sidebar-name" id="bricks-sidebar-name" placeholder="<?php esc_attr_e( 'Sidebar name *', 'bricks' ); ?>"></td>
						</tr>

						<tr>
							<!-- <td><label for="bricks-sidebar-description"><?php esc_html_e( 'Description', 'bricks' ); ?></label></td> -->
							<td><input type="text" name="bricks-sidebar-description" id="bricks-sidebar-description" placeholder="<?php esc_attr_e( 'Description (optional)', 'bricks' ); ?>"></td>
						</tr>

						<tr>
							<!-- <td></td> -->
							<td><input type="submit" value="<?php esc_html_e( 'Create new sidebar', 'bricks' ); ?>" class="button button-primary button-large"></td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>

		<div class="registered-sidebars-wrapper">
			<h3><?php esc_html_e( 'Registered sidebars', 'bricks' ); ?></h3>

			<?php if ( $bricks_sidebars ) { ?>

			<form id="bricks-delete-sidebar" method="post">
				<table id="bricks-sidebars" class="widefat table-sidebars table-alter-rows" cellspacing="0">
					<thead>
						<tr>
							<th><?php esc_html_e( 'Name', 'bricks' ); ?></th>
							<th><?php esc_html_e( 'ID', 'bricks' ); ?></th>
							<th><?php esc_html_e( 'Description', 'bricks' ); ?></th>
							<th><?php esc_html_e( 'Delete', 'bricks' ); ?></th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ( $bricks_sidebars as $index => $sidebar ) { ?>
						<tr>
							<td><?php echo esc_html( $sidebar['name'] ); ?></td>
							<td><?php echo esc_html( $sidebar['id'] ); ?></td>
							<td><?php echo $sidebar['description'] ? esc_html__( $sidebar['description'] ) : '-'; ?></td>
							<td>
								<button
									type="submit"
									name="bricks-sidebar-index"
									title="<?php esc_attr_e( 'Delete this sidebar', 'bricks' ); ?>"
									onclick="confirm('<?php esc_attr_e( 'Do you really want to delete this sidebar?', 'bricks' ); ?>')"
									value="<?php echo esc_attr( $index ); ?>">
									<i class="dashicons dashicons-trash"></i>
								</button>
							</td>
						</tr>
						<?php } ?>
					</tbody>
				</table>
			</form>

			<?php } else { ?>
			<p>
				<?php esc_html_e( 'You haven\'t registered any custom sidebars, yet.', 'bricks' ); ?>
			</p>
			<?php } ?>
		</div>
	</div>

</div>
