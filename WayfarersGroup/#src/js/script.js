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
});