
$(function () {

window.addEventListener('scroll', ()=> {
    if($(window).width() < 1024) {
        let scrolled = window.pageYOffset || document.scrollTop;
        if (scrolled > 150) {
            $('.header-bot-left').addClass('fixed');
            $('.restaurant').hide();
        } else {
            $('.header-bot-left').removeClass('fixed');
            $('.restaurant').show();
        }
   }
});

$('.navbar-button').click((e) => {
    $('.navbar-button').toggleClass('active');
    $('.navbar').toggleClass('down');
});


});