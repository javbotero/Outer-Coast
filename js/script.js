$(document).ready(function () {
  $('.parallax').parallax();

  // init slider
  $('.slider').slider({
    interval: 2100,
    transition: 800,
  });

  // Make nav appear on scrolldown
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('nav').fadeIn(500);
    } else {
      $('nav').fadeOut(500);
    }
  });
});
