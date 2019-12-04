// Main js file
$(document).ready(function () {

    $('.popup-btn').click(function () {
        $('.popup').show();
    });
    $('.popup-content_close').click(function () {
        $('.popup').hide();
    });

    $('.features-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 4
            }
        }
    });

    $('.feedback-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });
});