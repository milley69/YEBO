$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('nav,.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// $(document).ready(function() {
//   function slowScroll(id) {
//     $('html, body').animate({
//       scrollTop: $(id).offset().top
//     }, 500);
//   }
// });

function slowScroll(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1000);
    $('nav,.header__burger').removeClass('active');
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    // margin: 30,
    smartSpeed: 1000,
    // freeDrag: true,
    // mouseDrag: false,
    autoHeight: true,
    dots: true,
    items: 1,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
});
