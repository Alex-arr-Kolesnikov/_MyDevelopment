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


/*
$(document).mouseup(function (e){ // событие клика по веб-документу
  let div = $('.user-header'); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.hide('.user-header__menu'); // скрываем его
  }
});


 $('.reviews__box-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
});
 */