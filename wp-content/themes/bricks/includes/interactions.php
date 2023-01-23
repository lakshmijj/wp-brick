<?php
namespace Bricks;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Element and popup interactions
 *
 * @since 1.6
 */
class Interactions {
	public static $global_class_interactions = [];

	public function __construct() {}

	public static function register() {
		$instance = new self();

		// Add interaction attributes to root node
		add_filter( 'bricks/element/set_root_attributes', [ $instance, 'add_data_attributes' ], 10, 2 );

		// Add popup interactions (template settings) to popup root
		add_filter( 'bricks/popup/attributes', [ $instance, 'add_to_template_root' ], 10, 2 );

		self::get_global_class_interactions();

		return $instance;
	}

	/**
	 * Get global classes with interaction settings (once initially) to merge with element setting interactions in add_data_attributes()
	 *
	 * @since 1.6
	 */
	public static function get_global_class_interactions() {
		if ( ! empty( self::$global_class_interactions ) ) {
			return;
		}

		foreach ( Database::$global_data['globalClasses'] as $global_class ) {
			$class_interactions = ! empty( $global_class['settings']['_interactions'] ) ? $global_class['settings']['_interactions'] : false;

			if ( $class_interactions ) {
				self::$global_class_interactions[$global_class['id']] = $class_interactions;
			}
		}
	}

	/**
	 * Add element interactions via HTML data attributes to element root node
	 *
	 * Can originate from global class and/or element settings.
	 *
	 * @since 1.6
	 */
	public function add_data_attributes( $attributes, $element ) {
		$interactions = [];

		// STEP: Element class interactions
		$class_ids = ! empty( $element->settings['_cssGlobalClasses'] ) ? $element->settings['_cssGlobalClasses'] : false;

		if ( is_array( $class_ids ) ) {
			foreach ( $class_ids as $class_id ) {
				if ( ! empty( self::$global_class_interactions[$class_id] ) ) {
					$interactions = array_merge( self::$global_class_interactions[$class_id], $interactions );
				}
			}
		}

		// STEP: Element setting interactions
		if ( ! empty( $element->settings['_interactions'] ) ) {
			// Parse dynamic data
			$element_interactions = map_deep( $element->settings['_interactions'], [ 'Bricks\Integrations\Dynamic_Data\Providers', 'render_content' ] );

			$interactions = array_merge( $element_interactions, $interactions );
		}

		// STEP: Add interaction data attributes to element
		if ( count( $interactions ) ) {
			$attributes['data-interactions'] = htmlspecialchars( json_encode( $interactions ) );

			$attributes['data-interaction-id'] = Helpers::generate_random_id( false );

			// Interaction has animation: Enqueue animate.csss
			if ( strpos( $attributes['data-interactions'], 'startAnimation' ) !== false ) {
				wp_enqueue_style( 'bricks-animate' );
			}
		}

		return $attributes;
	}

	/**
	 * Add template (e.g. popup) interaction settings to template root node
	 *
	 * @since 1.6
	 */
	public function add_to_template_root( $attributes, $template_id ) {
		$template_settings = Helpers::get_template_settings( $template_id );

		if ( ! empty( $template_settings['template_interactions'] ) ) {
			// STEP: Parse dynamic data
			$interactions = map_deep( $template_settings['template_interactions'], [ 'Bricks\Integrations\Dynamic_Data\Providers', 'render_content' ] );

			$attributes['data-interactions'] = htmlspecialchars( json_encode( $interactions ) );

			$attributes['data-interaction-id'] = Helpers::generate_random_id( false );
		}

		return $attributes;
	}

	/**
	 * Get interaction controls (= repeater)
	 *
	 * @return array
	 *
	 * @since 1.6
	 */
	public static function get_controls_data() {
		return [
			'type'          => 'repeater',
			'titleProperty' => 'trigger',
			'titleEditable' => true, // @since 1.6
			'placeholder'   => esc_html__( 'Interaction', 'bricks' ),
			'fields'        => [
				'trigger'  => [
					'label'    => esc_html__( 'Trigger', 'bricks' ),
					'type'     => 'select',
					'options'  => [
						'elementGroupTitle' => esc_html__( 'Element', 'bricks' ),
						'click'             => esc_html__( 'Click', 'bricks' ),
						'mouseover'         => esc_html__( 'Hover', 'bricks' ),
						'focus'             => esc_html__( 'Focus', 'bricks' ),
						'blur'              => esc_html__( 'Blur', 'bricks' ),
						'mouseenter'        => esc_html__( 'Mouse enter', 'bricks' ),
						'mouseleave'        => esc_html__( 'Mouse leave', 'bricks' ),
						'enterView'         => esc_html__( 'Enter viewport', 'bricks' ),
						'leaveView'         => esc_html__( 'Leave viewport', 'bricks' ),
						'browserGroupTitle' => esc_html__( 'Browser', 'bricks' ) . ' / ' . esc_html__( 'Window', 'bricks' ),
						'scroll'            => esc_html__( 'Scroll', 'bricks' ),
						'contentLoaded'     => esc_html__( 'Content loaded', 'bricks' ),
						'mouseleaveWindow'  => esc_html__( 'Mouse leave window', 'bricks' ),
						// 'userIdle'        => esc_html__( 'User idle', 'bricks' ), // TODO
					],
					'placeholder' => esc_html__( 'Select', 'bricks' ),
				],

				'delay' => [
					'label'       => esc_html__( 'Delay'),
					'type'        => 'text',
					'placeholder' => '0s',
					'required'    => [ 'trigger', '=', [ 'contentLoaded' ] ],
				],

				'scrollOffset' => [
					'label'    => esc_html__( 'Scroll offset', 'bricks' ),
					'type'     => 'text',
					'required' => [ 'trigger', '=', 'scroll' ],
				],

				'action' => [
					'label'   => esc_html__( 'Action', 'bricks' ),
					'type'    => 'select',
					'options' => [
						'show'            => esc_html__( 'Show element', 'bricks' ),
						'hide'            => esc_html__( 'Hide element', 'bricks' ),
						'setAttribute'    => esc_html__( 'Set attribute', 'bricks' ),
						'removeAttribute' => esc_html__( 'Remove attribute', 'bricks' ),
						'toggleAttribute' => esc_html__( 'Toggle attribute', 'bricks' ),
						'loadMore'        => esc_html__( 'Load more', 'bricks' ) . ' (' . esc_html__( 'Query loop', 'bricks' ) . ')',
						'startAnimation'  => esc_html__( 'Start animation', 'bricks' ),
						'storageAdd'			=> esc_html__( 'Browser storage', 'bricks' ) . ': ' . esc_html__( 'Add', 'bricks' ),
						'storageRemove'		=> esc_html__( 'Browser storage', 'bricks' ). ': ' . esc_html__( 'Remove', 'bricks' ),
						'storageCount'		=> esc_html__( 'Browser storage', 'bricks' ). ': ' . esc_html__( 'Count', 'bricks' ),
						// 'stopAnimation'   => esc_html__( 'Stop animation', 'bricks' ),
					],
					'placeholder' => esc_html__( 'Select', 'bricks' ),
				],

				'storageType' => [
					'label'   => esc_html__( 'Type', 'bricks' ),
					'type'    => 'select',
					'options' => [
						'storageGroupTitle' => esc_html__( 'Browser storage', 'bricks' ),
						'windowStorage'     => esc_html__( 'Window storage', 'bricks' ),
						'sessionStorage'    => esc_html__( 'Session storage', 'bricks' ),
						'localStorage'      => esc_html__( 'Local storage', 'bricks' ),
					],
					'placeholder' => esc_html__( 'Select', 'bricks' ),
					'required' => [ 'action', '=', [ 'storageAdd', 'storageRemove', 'storageCount' ] ],
				],

				'actionAttributeKey' => [
					'label'    => esc_html__( 'Key', 'bricks' ),
					'type'     => 'text',
					'required' => [ 'action', '=', [ 'setAttribute', 'removeAttribute', 'toggleAttribute', 'storageAdd', 'storageRemove', 'storageCount' ] ],
				],

				'actionAttributeValue' => [
					'label'    => esc_html__( 'Value', 'bricks' ),
					'type'     => 'text',
					'required' => [ 'action', '=', [ 'setAttribute', 'removeAttribute', 'toggleAttribute', 'storageAdd' ] ],
				],

				'loadMoreQuery' => [
					'label'    => esc_html__( 'Query', 'bricks' ),
					'type'     => 'query-list',
					'required' => [ 'action', '=', 'loadMore' ],
				],

				'animationType' => [
					'label'       => esc_html__( 'Animation', 'bricks' ),
					'type'        => 'select',
					'options'     => Setup::$control_options['animationTypes'],
					'searchable'  => true,
					'inline'      => true,
					'placeholder' => esc_html__( 'None', 'bricks' ),
					'required'    => [ 'action', '=', 'startAnimation' ],
				],

				'animationDuration' => [
					'label'          => esc_html__( 'Animation duration', 'bricks' ),
					'type'           => 'text',
					'inline'         => true,
					'hasDynamicData' => false,
					'placeholder'    => '1s',
					'required'    => [ 'action', '=', 'startAnimation' ],
				],

				'animationDelay' => [
					'label'          => esc_html__( 'Animation delay', 'bricks' ),
					'type'           => 'text',
					'inline'         => true,
					'hasDynamicData' => false,
					'placeholder'    => '0s',
					'required'    => [ 'action', '=', 'startAnimation' ],
				],

				'target' => [
					'label'       => esc_html__( 'Target', 'bricks' ),
					'type'        => 'select',
					'options'     => [
						'self'   => esc_html__( 'Self', 'bricks' ),
						'custom' => esc_html__( 'CSS selector', 'bricks' ),
						'popup'  => esc_html__( 'Popup', 'bricks' ),
					],
					'placeholder' => esc_html__( 'Self', 'bricks' ),
					'required'    => [ 'action', '!=', [ 'loadMore', 'storageAdd', 'storageRemove', 'storageCount' ] ],
				],

				'targetSelector' => [
					'label'    => esc_html__( 'CSS selector', 'bricks' ),
					'type'     => 'text',
					'required' => [ 'target', '=', 'custom' ],
				],

				'templateId' => [
					'label'       => esc_html__( 'Popup', 'bricks' ),
					'type'        => 'select',
					'options'     => bricks_is_builder() ? Templates::get_templates_list( [ 'popup' ] ) : [],
					'searchable'  => true,
					'placeholder' => esc_html__( 'Select template', 'bricks' ),
					'required'    => [ 'target', '=', 'popup' ],
				],

				'runOnce' => [
					'label' => esc_html__( 'Run only once', 'bricks' ),
					'type'  => 'checkbox',
					'required'       => [ 'trigger', '!=', [ 'contentLoaded' ] ],
				],

				'conditionsSep' => [
					'label'       => esc_html__( 'Interaction conditions', 'bricks' ),
					'description' => esc_html__( 'Run this interaction if the following conditions are met.', 'bricks' ),
					'type'        => 'separator',
				],

				'interactionConditions' => [
					'type'          => 'repeater',
					'placeholder'   => esc_html__( 'Condition', 'bricks' ),
					'titleProperty'	=> 'conditionType',
					'fields' 			  => [
						'conditionType' => [
							'label'    	=> esc_html__( 'Type', 'bricks' ),
							'type'     	=> 'select',
							'options'	 	=> [
								'storageGroupTitle' => esc_html__( 'Browser storage', 'bricks' ),
								'windowStorage'     => esc_html__( 'Window storage', 'bricks' ),
								'sessionStorage'    => esc_html__( 'Session storage', 'bricks' ),
								'localStorage'      => esc_html__( 'Local storage', 'bricks' ),
							]
						],

						'storageKey' => [
							'label'	   => esc_html__( 'Browser storage', 'bricks' ) . ': ' . esc_html__( 'Key', 'bricks' ),
							'type'     => 'text',
							'required' => [ 'conditionType', '=', [ 'windowStorage', 'sessionStorage', 'localStorage' ] ],
						],

						'storageCompare' => [
							'label'    => esc_html__( 'Browser storage', 'bricks' ) . ': ' . esc_html__( 'Compare', 'bricks' ),
							'type'     => 'select',
							'options'  => [
								'exists'   	=> esc_html__( 'Exists', 'bricks' ),
								'notExists' => esc_html__( 'Not exists', 'bricks' ),
								'==' 				=> '==',
								'!=' 				=> '!=',
								'>=' 				=> '>=',
								'<=' 				=> '<=',
								'>'  				=> '>',
								'<'  				=> '<',
							],
							'placeholder' => esc_html__( 'Exists', 'bricks' ),
							'required' => [ 'conditionType', '=', [ 'windowStorage', 'sessionStorage', 'localStorage' ] ],
						],

						'storageCompareValue' => [
							'label'    => esc_html__( 'Browser storage', 'bricks' ) . ': ' . esc_html__( 'Value', 'bricks' ),
							'type'     => 'text',
							'required' => [ 'storageCompare', '!=', [ '', 'exists', 'notExists' ] ],
						],
					]
				],

				'interactionConditionsRelation' => [
					'label'       => esc_html__( 'Relation', 'bricks' ),
					'type'        => 'select',
					'inline'      => true,
					'options'     => [
						'or'  => esc_html__( 'Or', 'bricks' ),
						'and' => esc_html__( 'And', 'bricks' ),
					],
					'placeholder' => esc_html__( 'And', 'bricks' )
				]

			],
		];
	}
}
