
$( document ).ready(function() {
    "use strict"

    /*-----------------------------------
    Navbar
    -----------------------------------*/
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        
        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu .show').removeClass("show");
        });
        
        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        return false;
    });

    if($(window).width() < 1200) {
        $(document).on('click', function(event) {
            var clickover = $(event.target);
            var _opened = $('#navbarSupportedContent').hasClass('show');

            if(_opened === true && !(clickover.is('.navbar-nav li, .navbar-nav .dropdown *'))) {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-toggler').addClass('collapsed');
            }
        });
    }

    $('.nav__mobile__search').on('click', function(e) {
        e.preventDefault();
        $('.nav__mobile__search__box').slideDown();
    })

    $('.search__close').on('click', function(e) {
        e.preventDefault();
        $('.nav__mobile__search__box').slideUp();
    })



    /* OwlCarousel
    ..........................................*/
    $(".trending__card__carousel").owlCarousel({
        loop: true,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $(".explore__item__slider").owlCarousel({
        items: 1,
        loop:false,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
    });

    $('.js-tilt').tilt({
        glare: true,
        maxGlare: 0.1
    });

    /* Nav Settings
    ..........................................*/
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll > 0) {
            $(".bd-nav").addClass("fixed");
        } else {
            $(".bd-nav").removeClass("fixed");
        }
    });

    /* Favourite Settings
    ..........................................*/
    $('.item__card .favourite').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('isFav');
    })

    /* Page Share Settings
    ..........................................*/
    $('.page__header__button .icon, .details__more .toggler, .item__card .option__toggler').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('.dropdown__elem').fadeToggle();
    })

    /* Custom Filter Settings
    ..........................................*/
    $('.collapse__toggler').on('click', function(e) {
        e.preventDefault();
        $(this).parents().children('.filter__body').slideToggle();
    })

    /* CountDown Js
    ..........................................*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            var totalHours = event.offset.totalDays;
            $(this).html(event.strftime(totalHours + 'D &nbsp; %HH &nbsp; %MM &nbsp; %SS'));
        });
    });




    /*-------------------------------------
    Isotope
    -------------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.discover__item',
        layoutMode: 'fitRows'
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    // filter items on button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
        $grid.isotope({
            filter: filterValue
        });
    });

    /* Marquee Js
    ..........................................*/

    $('.top__chart').marquee({
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        pauseOnHover: true,
        speed: 100,
        startVisible: true,
        duplicated: true
    });


});
