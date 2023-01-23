<?php
namespace Bricks;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Element_Icon extends Element {
	public $category = 'basic';
	public $name     = 'icon';
	public $icon     = 'ti-star';

	public function get_label() {
		return esc_html__( 'Icon', 'bricks' );
	}

	public function set_controls() {
		$this->controls['icon'] = [
			'tab'     => 'content',
			'label'   => esc_html__( 'Icon', 'bricks' ),
			'type'    => 'icon',
			'default' => [
				'library' => 'themify',
				'icon'    => 'ti-star',
			],
			'root'    => true, // To target 'svg' root
		];

		$this->controls['iconColor'] = [
			'tab'      => 'content',
			'label'    => esc_html__( 'Color', 'bricks' ),
			'type'     => 'color',
			'css'      => [
				[
					'property' => 'color',
				],
				[
					'property' => 'fill',
				],
			],
			'required' => [ 'icon.icon', '!=', '' ],
		];

		$this->controls['iconSize'] = [
			'tab'      => 'content',
			'label'    => esc_html__( 'Size', 'bricks' ),
			'type'     => 'number',
			'units'    => true,
			'css'      => [
				[
					'property' => 'font-size',
				],
			],
			'required' => [ 'icon.icon', '!=', '' ],
		];

		$this->controls['link'] = [
			'tab'   => 'content',
			'label' => esc_html__( 'Link', 'bricks' ),
			'type'  => 'link',
		];
	}

	public function render() {
		$settings = $this->settings;
		$icon     = ! empty( $settings['icon'] ) ? $settings['icon'] : false;
		$link     = ! empty( $settings['link'] ) ? $settings['link'] : false;

		if ( ! $icon ) {
			return $this->render_element_placeholder(
				[
					'title' => esc_html__( 'No icon selected.', 'bricks' ),
				]
			);
		}

		$is_svg = ! empty( $icon['svg'] );
		$icon   = self::render_icon( $icon, $this->attributes['_root'] );

		if ( $link ) {
			$this->set_link_attributes( 'link', $link );
			echo "<a {$this->render_attributes( 'link' )}>{$icon}</a>";
		} else {
			echo $icon;
		}
	}
}
