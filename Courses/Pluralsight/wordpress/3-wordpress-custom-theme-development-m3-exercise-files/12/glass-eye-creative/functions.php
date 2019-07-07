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


