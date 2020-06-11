@@include('./slick.min.js')

$(document).ready(function () {
    $('.apartments__slider').slick({
        arrows: true,
        infinite: true,
		slidesToShow: 3,
		//autoplay: true,
		speed: 1000,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/apartments/arrow-left.svg" alt="button"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/apartments/arrow-right.svg" alt="button"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});