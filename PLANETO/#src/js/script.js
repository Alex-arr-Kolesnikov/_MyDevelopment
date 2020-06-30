@@include('./slick.min.js')


$(document).ready(function () {

    $('.reviews__slider').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/reviews/prevArrow.svg" alt="Arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/reviews/nextArrow.svg" alt="Arrow"></button>',
        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});