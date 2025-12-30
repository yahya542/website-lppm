(function ($) {
    "use strict";

    /*==================================================================
    [ Load page ] - Disabled animsition for basic display */
    function initAnimsition() {
        // Disabled to avoid animation conflicts with React
        // Only initialize if needed for non-React pages
        if (!$('.animsition').length) return;
        
        try {
            // Skip animsition initialization for basic display
            $('.animsition').removeClass('animsition').addClass('animsition-in');
        } catch(er) {
            console.log('Animsition skipped:', er);
        }
    }

    /*==================================================================
    [ Back to top ]*/
    function initBackToTop() {
        if (!$('#myBtn').length) return;

        try {
            var windowH = $(window).height()/2;

            $(window).on('scroll',function(){
                if ($(this).scrollTop() > windowH) {
                    $("#myBtn").addClass('show-btn-back-to-top');
                } else {
                    $("#myBtn").removeClass('show-btn-back-to-top');
                }
            });

            $('#myBtn').on("click", function(){
                $('html, body').animate({scrollTop: 0}, 300);
            });
        } catch(er) {
            console.log('Back to top error:', er);
        }
    }

    /*==================================================================
    [ Fixed menu ]*/
    function initFixedMenu() {
        if (!$('.wrap-main-nav').length) return;

        try {
            var posNav = $('.wrap-main-nav').offset().top;
            var menuDesktop = $('.container-menu-desktop');
            var mainNav = $('.main-nav');
            var lastScrollTop = 0;
            var st = 0;
            
            $(window).on('scroll',function(){
                fixedHeader();     
            });
            
            $(window).on('resize',function(){ 
                fixedHeader();
            });

            $(window).on('load',function(){ 
                fixedHeader();
            });

            var fixedHeader = function() {
                st = $(window).scrollTop();

                if(st > posNav + mainNav.outerHeight()) {
                    $(menuDesktop).addClass('fix-menu-desktop');
                } 
                else if(st <= posNav) {
                    $(menuDesktop).removeClass('fix-menu-desktop');
                }   

                if (st > lastScrollTop){
                    $(mainNav).removeClass('show-main-nav');
                } 
                else {
                    $(mainNav).addClass('show-main-nav');
                }

                lastScrollTop = st;
            };
                
        } catch(er) {
            console.log('Fixed menu error:', er);
        }
    }

    /*==================================================================
    [ Menu mobile ]*/
    function initMenuMobile() {
        if (!$('.btn-show-menu-mobile').length) return;

        try {
            $('.btn-show-menu-mobile').on('click', function(){
                $(this).toggleClass('is-active');
                $('.menu-mobile').slideToggle();
            });

            var arrowMainMenu = $('.arrow-main-menu-m');

            for(var i=0; i<arrowMainMenu.length; i++){
                $(arrowMainMenu[i]).on('click', function(){
                    $(this).parent().find('.sub-menu-m').slideToggle();
                    $(this).toggleClass('turn-arrow-main-menu-m');
                })
            }

            $(window).on('resize',function(){
                if($(window).width() >= 992){
                    if($('.menu-mobile').css('display') === 'block') {
                        $('.menu-mobile').css('display','none');
                        $('.btn-show-menu-mobile').toggleClass('is-active');
                    }

                    $('.sub-menu-m').each(function(){
                        if($(this).css('display') === 'block') { 
                            $(this).css('display','none');
                            $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                        }
                    });
                    
                }
            });
        } catch(er) {
            console.log('Menu mobile error:', er);
        }
    }

    /*==================================================================
    [ Respon tab01 ] - Disabled for basic display */
    function initResponTab01() {
        // Skip tab functionality for basic display
        console.log('Tab functionality disabled for basic display');
    }
    
    /*==================================================================
    [ Play video 01 ] - Disabled for basic display */
    function initPlayVideo01() {
        // Skip video functionality for basic display
        console.log('Video functionality disabled for basic display');
    }   

    /*==================================================================
    [ Tab mega menu ] - Disabled for basic display */
    function initTabMegaMenu() {
        // Skip mega menu functionality for basic display
        console.log('Mega menu functionality disabled for basic display');
    }

    /*==================================================================
    [ Slide100 txt ] - Disabled for basic display */
    function initSlide100Txt() {
        // Skip slide functionality for basic display
        console.log('Slide functionality disabled for basic display');
    }
            
    $(function () {
        initAnimsition();
        initBackToTop();
        initFixedMenu();
        initMenuMobile();
        // Skip animation-heavy features for basic display
        // initResponTab01();
        // initPlayVideo01();
        // initTabMegaMenu();
        // initSlide100Txt();
    });

})(jQuery);