@@include('./slick.min.js');

$(document).ready(function () {

  $('.burger').click(function(){ // открывает и закрывает блок при нажатии на бургер
    $('.menu').toggleClass('_active');      
  });

  $('.user-header__icon').click(function(){ // открывает и закрывает блок при нажатии на иконку
    $('.user-header__menu').toggleClass('_active');   
    $('.menu').removeClass('_active');   
  });

});

$(document).click( function(e){
  if ( $(e.target).closest('.user-header__icon').length ) { // клик внутри элемента
    return;
  }
  $('.user-header__menu').removeClass('_active'); // клик снаружи элемента закрывает блок
});

/********************** Burger Menu **************************/
var Menu = {
  
  el: {
    ham: $('.burger__menu'),
    menuTop: $('.line-top'),
    menuMiddle: $('.line-middle'),
    menuBottom: $('.line-bottom')
  },
  
  init: function() { Menu.bindUIactions(); },
  
  bindUIactions: function() {
    Menu.el.ham.on('click', function(event) {
      Menu.activateMenu(event);
      event.preventDefault();
    });
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('line-top-click');
    Menu.el.menuMiddle.toggleClass('line-middle-click');
    Menu.el.menuBottom.toggleClass('line-bottom-click'); 
  }
};
Menu.init();
/********************** end Burger Menu **************************/

/********************** Slick Slider **************************/
$('.box__slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  appendArrows: $('.main__slider-control'),
  prevArrow: '<button type="button" class="slick-prev">&#10094</button>',
	nextArrow: '<button type="button" class="slick-next">&#10095</button>'
});

$('.slider__products-body').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  speed: 1000,
  autoplaySpeed: 5000,
  appendArrows: $('.slider__products-control'),
  prevArrow: '<button type="button" class="slick-prev">&#8606</button>',
  nextArrow: '<button type="button" class="slick-next">&#8608</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-quotes__body').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  speed: 1000,
  autoplaySpeed: 5000,
  appendArrows: $('.control-quotes__link'),
  nextArrow: '<button type="button" class="slick-next circle-link">&#8635</button>'
});

/********************** end Slick Slider **************************/

/************************** lazyload **************************/
if ("loading" in HTMLImageElement.prototype) {
  let images = document.querySelectorAll('img[loading="lazy"]');
  let sources = document.querySelectorAll("source[data-srcset]");

  sources.forEach(function (source) {
    source.srcset = source.dataset.srcset;
  });
  images.forEach(function (img) {
      img.src = img.dataset.src;
  });

} else {
  let script = document.createElement("script");
  script.src = "/link/to/lazyload.js";
  document.body.appendChild(script);
}
/************************** end lazyload **************************/


/*
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let div = $('.user-header'); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide('.user-header__menu'); // скрываем его
    }
  });
*/