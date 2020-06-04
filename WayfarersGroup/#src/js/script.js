@@include('./slick.min.js')


$(document).ready(function () {
	$('.slider__box').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000
	});

	$('.slider__agents').slick({
		arrows: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev">&#8668</button>',
		nextArrow: '<button type="button" class="slick-next">&#8669</button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}] 
	});
});