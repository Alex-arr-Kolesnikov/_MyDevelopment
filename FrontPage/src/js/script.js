@@include('./slick.min.js');

$(document).ready(function () {
    $('.preloader__btn').on('click', (e) => {
        $('.preloader').toggleClass('active');
    });

    $('.pageHome').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.pageHome .title').css(
            'transform',
            'translate(' + x *60 + 'px, ' + y *60 + 'px)'
        );

        $('.pageHome .subtitle').css(
            'transform',
            'translate(-' + x *30 + 'px, -' + y *30 + 'px)'
        );
    });

    $('.pageWorks__cube').click(function(){
		$('.pageWorks__show').css({
            'opacity': '100%',
            'overflow': 'visible',
            'z-index': '10'
        });      
    });
    
    $('.pageWorks__show-box .btn').click(function(){
		$('.pageWorks__show').css({
            'opacity': '0', 
            'overflow': 'hiden',
            'z-index': '-1'
        });      
	});

/************* Подключение slick slider *************/
    
    
/************* Переход между старницами *************/
    $("body").css("display", "none");

    $("body").fadeIn(2000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});

/*********************** Format change SVG *****************************/

$('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
});


/*
*
$('.pageWorks__show-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev">&#8710</button>',
        nextArrow: '<button type="button" class="slick-next">&#8711</button>'
    });

let header_phone = document.querySelector('.header__actions-phone');
header_phone.addEventListener("click", function (e) {
    let header_tel = document.querySelector('.header__actions-tel');
    header_tel.classList.toggle('_active');
});
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