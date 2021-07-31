
$( document ).ready(function() {
    "use strict"

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


    /* Explore Settings
    ..........................................*/
    $('.explore__category .category__toggler').on('click', function(e) {
        $(this).siblings('.explore__category__menu').fadeToggle();
    })

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

    /* OwlCarousel
    ..........................................*/
    $(".trending__card__carousel").owlCarousel({
        loop:false,
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
    function tabMaruee() {
        $('.top__chart').marquee({
            gap: 50,
            delayBeforeStart: 0,
            direction: 'left',
            pauseOnHover: true,
            speed: 100,
            startVisible: true,
            duplicated: false
        });
    }
    tabMaruee();

    $('.top__chart__wrap button').on('shown.bs.tab', function (e) {
        tabMaruee();
    })

});
