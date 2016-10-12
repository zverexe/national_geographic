$(document).ready(function() {
    $('#iconified').on('keyup', function() {
        var input = $(this);
        if (input.val().length === 0) {
            input.addClass('empty');
        } else {
            input.removeClass('empty');
        }
    });

    $('#carousel').carousel({
        interval: 8000
    });


    var slider = $("#lightSlider").lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear',
        speed: 1000, //ms'
        pause: 4000,
        auto: true,
        loop: true,
        pauseOnHover: true,
        controls: false,
        pager: false,
        enableDrag: false

    });

    
    $('#goToPrevSlide').on('click', function() {
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').on('click', function() {
        slider.goToNextSlide();
    });

   
});
