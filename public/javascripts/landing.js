$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $('.navbar').removeClass('navbar-dark bg-dark navbar-transparent')
            $('.navbar').addClass('navbar-light bg-light')
            // $('nav').addClass('card-1');
        } else {
            $('.navbar').addClass('navbar-dark bg-dark navbar-transparent')
            $('.navbar').removeClass('navbar-light bg-light')
        }
    })
})
