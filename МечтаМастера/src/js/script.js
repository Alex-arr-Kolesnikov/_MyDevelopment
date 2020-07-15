@@include('./slick.min.js');

let header_phone = document.querySelector('.header__actions-phone');
header_phone.addEventListener("click", function (e) {
    let header_tel = document.querySelector('.header__actions-tel');
    header_tel.classList.toggle('_active');
});

$(document).ready(function () {

    $('.feedback__box').slick({
        arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1000,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/prevArrow.svg" alt="button"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./img/nextArrow.svg" alt="button"></button>'
    });
});

/*
let popap_btn = document.querySelector('.price__box-btn');
popap_btn.addEventListener("click", function (e) {
    let popap_form = document.querySelector('.price__popap');
    popap_form.classList.toggle('_active');
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};
*/