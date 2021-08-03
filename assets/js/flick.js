function hello() {
    let marqueeSlider = document.querySelector('.top__chart');
    let marqueeSlide = document.querySelector('.top__chart__item');
    let mainTicker = new Flickity('.top__chart', {
        accessibility: true,
        resize: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        percentPosition: true,
        setGallerySize: true 
    });


    // Set initial position to be 0
    mainTicker.x = 0;

    // Start the marquee animation
    play();

    // Main function that 'plays' the marquee.
    function play() {
    // Set the decrement of position x
    mainTicker.x -= 1.5;

    // Settle position into the slider
    mainTicker.settle(mainTicker.x);

    // Set the requestId to the local variable
    requestId = window.requestAnimationFrame(play);
    }

    // Main function to cancel the animation.
    function pause() {
    if (requestId) {
        // Cancel the animation
        window.cancelAnimationFrame(requestId);

        // Reset the requestId for the next animation.
        requestId = undefined;
    }
    }

    // Pause on hover/focus
    marqueeSlider.addEventListener('mouseenter', () => pause());

    // Unpause on mouse out / defocus
    marqueeSlider.addEventListener('mouseleave', () => play());
}

hello();

function hello2() {
    let marqueeSlider = document.querySelector('.slide_2');
    let marqueeSlide = document.querySelector('.item_2');
    let mainTicker = new Flickity('.slide_2', {
        accessibility: true,
        // resize: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        percentPosition: true,
        setGallerySize: true 
    });

    // Set initial position to be 0
    mainTicker.x = 0;

    // Start the marquee animation
    play();

    // Main function that 'plays' the marquee.
    function play() {
    // Set the decrement of position x
    mainTicker.x -= 1.5;

    // Settle position into the slider
    mainTicker.settle(mainTicker.x);

    // Set the requestId to the local variable
    requestId = window.requestAnimationFrame(play);
    }

    // Main function to cancel the animation.
    function pause() {
    if (requestId) {
        // Cancel the animation
        window.cancelAnimationFrame(requestId);

        // Reset the requestId for the next animation.
        requestId = undefined;
    }
    }

    // Pause on hover/focus
    marqueeSlider.addEventListener('mouseenter', () => pause());

    // Unpause on mouse out / defocus
    marqueeSlider.addEventListener('mouseleave', () => play());
}

let tab__button = document.querySelector('.tab__button');

tab__button.addEventListener('click', () => hello2());