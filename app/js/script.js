"use strict";

$(function () {
  window.addEventListener('scroll', function () {
    if ($(window).width() < 1024) {
      var scrolled = window.pageYOffset || document.scrollTop;

      if (scrolled > 150) {
        $('.header-bot-left').addClass('fixed');
        $('.restaurant').hide();
      } else {
        $('.header-bot-left').removeClass('fixed');
        $('.restaurant').show();
      }
    }
  });
  $('.navbar-button').click(function (e) {
    $('.navbar-button').toggleClass('active');
    $('.navbar').toggleClass('down');
  });
});