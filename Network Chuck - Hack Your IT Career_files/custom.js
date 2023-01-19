jQuery(function ($) {

const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  pagination:false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
const swiperTwo = new Swiper(".conveyorSwiper", {
  slidesPerView: 4,
  spaceBetween: 100,
  centeredSlides:true,
  loop:false,
  pagination:false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
     300: {
         slidesPerView: 2,
         spaceBetween: 50,
      },
        767: {
         slidesPerView: 3,
         spaceBetween: 100,
      }, 
     1200: {
         slidesPerView: 5,
         spaceBetween: 100,
      },      
    1449: {
      slidesPerView: 5,
    },
  }
});

$(allInView);
$(window).scroll(allInView);
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $("#conveyorswiper").offset().top;
    var elemBottom = elemTop + $("#conveyorswiper").height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}   
function allInView() {
    if (
    isScrolledIntoView() &&
    swiperTwo.activeIndex === 0) {
    executed = true;
    setTimeout(() => {
       swiperTwo.slideTo(1);
    }, 100);

  }
}
    
    
$(".wpforms-submit").append('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12H22" stroke="#160E08" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 5L22 12L15 19" stroke="#160E08" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>');
    
if ($(window).width() > 767) {    
$(document).on("click mousemove",function(e){ 
  var x = e.clientX;
  var y = e.clientY;
  var newposX = x - 20;
  var newposY = y - 3400; 
  $(".crane_animate_inner").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});
}    
   
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

    
$(window).on('resize scroll', function() {
  $('#dog_screen_blink').each(function() {
    if ($(this).isInViewport()) {
          $('#dog_screen_blink').addClass('blink');
        setInterval(function () {$('#dog_screen_blink').removeClass('blink');}, 6000);

    }
  });
});

    
    
});