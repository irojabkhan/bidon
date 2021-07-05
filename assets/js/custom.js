
$( document ).ready(function() {
    "use strict"

    $('.js-tilt').tilt({
        // scale: 1.1,
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
        loop:true,
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

    /* Marquee Js
    ..........................................*/
    function hello() {
        $('.top__chart').marquee({
            duration: 5000,
            gap: 50,
            delayBeforeStart: 0,
            direction: 'left',
            pauseOnHover: true,
            speed: 100,
            duplicated: false
        });
    }
    hello();

    $('.top__chart__wrap .nav-link').on('show.bs.tab', function () {
        // e.preventDefault();
        hello();
    });

});
