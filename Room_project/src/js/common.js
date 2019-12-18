// пользовательские скрипты
$(() => {
    $(".cards-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../assets/img/apartments/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../assets/img/apartments/arrow-right.svg" alt=""></button>',
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

let stepBlock1 = document.getElementById("stepBlock1");
let stepBorder1 = document.getElementById("stepBorder1");
let stepBlock2 = document.getElementById("stepBlock2");
let stepBorder2 = document.getElementById("stepBorder2");
let stepBlock3 = document.getElementById("stepBlock3");
let stepBorder3 = document.getElementById("stepBorder3");
stepBlock1.onmouseover = () => {
    stepBorder1.style.borderBottom = "3px solid white";
};
stepBlock1.onmouseout = () => {
    stepBorder1.style.borderBottom = "3px solid black";
};
stepBlock2.onmouseover = () => {
    stepBorder2.style.borderBottom = "3px solid white";
};
stepBlock2.onmouseout = () => {
    stepBorder2.style.borderBottom = "3px solid black";
};
stepBlock3.onmouseover = () => {
    stepBorder3.style.borderBottom = "3px solid white";
};
stepBlock3.onmouseout = () => {
    stepBorder3.style.borderBottom = "3px solid black";
};