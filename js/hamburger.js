$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        $('body').toggleClass('fixed');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    $('.ham_bt').click(function () {
        $('.hamburger').toggleClass('active');
        $('body').removeClass('fixed');

        if ($('.hamburger').hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});