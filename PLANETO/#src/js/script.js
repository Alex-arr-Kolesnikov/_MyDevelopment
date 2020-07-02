@@include('./slick.min.js')


$(document).ready(function () {

    $('.partners__slider').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/prevArrow.svg" alt="Arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/nextArrow.svg" alt="Arrow"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }]
    });
});