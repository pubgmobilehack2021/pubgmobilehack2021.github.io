    $(function () {
        // mobile menu
        $('.mobile_nav').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('mobile_nav-active');
            $('.nav_menu').toggleClass('nav_menu-active');
        });
    });
    $('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});
    