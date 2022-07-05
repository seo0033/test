$(function () {
  $('.main_slider').slick({
    arrows: false,
    dots: true,
    // autoplay:true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.slider_best_menu_top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider_best_menu_bottom'
  });
  $('.slider_best_menu_bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_best_menu_top',
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
  });

  $('.bottom .slider_bottom_arrows i:nth-child(1)').on('click', function (e) {
    e.preventDefault();
    $('.slider_best_menu_bottom').slick('slickPrev')
  })
  $('.bottom .slider_bottom_arrows i:nth-child(2)').on('click', function (e) {
    e.preventDefault();
    $('.slider_best_menu_bottom').slick('slickNext')
  });




})//the end
