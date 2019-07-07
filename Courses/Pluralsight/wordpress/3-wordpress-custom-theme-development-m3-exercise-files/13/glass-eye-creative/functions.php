<?php 

if ( ! function_exists ( 'glasseye_setup') ) :

    function glasseye_setup() {
        // let WordPress handle the Titles tags
        add_theme_support( 'title-tag' );
    }
endif;
add_action( 'after_setup_theme', 'glasseye_setup' );

/* ---- Register Menus ---- */

function register_glasseye_menus() {
    register_nav_menus(
        array(
            'primary' => __( 'Primary Menu' ),
            'footer' => __( 'Footer Menu' )
        )
    );
}
add_action( 'init', 'register_glasseye_menus' );

/* ---- Add Stylesheets ---- */

function glasseye_scripts() {
    
    // Enqueue Main Stylesheet
    wp_enqueue_style( 'glasseye_styles', get_stylesheet_uri() );
    // Enqueue Google Fonts, Raleway
    wp_enqueue_style( 'glasseye_google_fonts', 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,700' );
}
add_action( 'wp_enqueue_scripts', 'glasseye_scripts' );

/* ---- Register Widget Areas ---- */

function glasseye_widget_init() {
    register_sidebar( array ( 
        'name' => __( 'Main Sidebar', 'glasseye' ),
        'id' => 'main-sidebar',
        'description' => __( 'Widgets added here will appear in all pages using the Two Column Template.', 'glasseye' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>'
    ));
}
add_action( 'widgets_init', 'glasseye_widget_init' );
