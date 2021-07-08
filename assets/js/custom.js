
$( document ).ready(function() {
    "use strict"

    $('.js-tilt').tilt({
        glare: true,
        maxGlare: 0.1
    });

    /* Favourite Settings
    ..........................................*/
    $('.item__card .favourite').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('isFav');
    })

    /* CountDown Js
    ..........................................*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            var totalHours = event.offset.totalDays;
            $(this).html(event.strftime(totalHours + 'D &nbsp; %HH &nbsp; %MM &nbsp; LEFT'));
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
