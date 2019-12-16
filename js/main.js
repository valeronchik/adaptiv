jq3 = jQuery.noConflict();
jq3(function ($) {
    'use strict';

    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
        smartSpeed: 2500,
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
    });
});