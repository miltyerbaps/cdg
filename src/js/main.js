/**
 * JS Functions for frontend.
 *
 * Contains handlers to display on the Front End.
 */

(function ($) {

    /**
     * Sticky Main Nav
     */

    // grab the initial top offset of the navigation
    var sticky_navigation_offset_top = $('.main-nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative

        if ($('.sticky-nav').length) {
            if (scroll_top > sticky_navigation_offset_top) {
                $('.sticky-nav').css({'position': 'fixed', 'top': 0, 'left': 0});
            } else {
                $('.sticky-nav').removeAttr('style');
            }
        }


    };

    var sticky_class = function () {
        var window_size = $(window).width();

        if (window_size > 750) {
            $('.main-nav').addClass('sticky-nav');
        } else {
            $('.main-nav').removeClass('sticky-nav');
        }

    };

    /**
     * Mobile Nav
     */

    var mobile_nav = function () {

        var nav_size = $('.main-nav').width(),
            main_body = $('.main-body'),
            icon_div = $('.icon-nav'),
            icon_nav = $('.icon-nav a');

        icon_nav.unbind().click(function() {

            main_body.toggleClass('aside');
            icon_div.toggleClass('active');

            return false;

        });

        if (nav_size > 750){
            main_body.removeClass('aside');
            icon_div.removeClass('active');
        }

    };


    // run our functions on load
    sticky_navigation();
    sticky_class();
    mobile_nav();

    // run our functions on scroll
    $(window).scroll(function () {
        sticky_navigation();
    });


    // run our functions on resize
    $(window).resize(function () {
        sticky_class();
        mobile_nav();
    });


})(jQuery);