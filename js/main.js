$(document).ready(function () {
    console.log('im ready ');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $("header").addClass("headerBg");
        } else {
            $("header").removeClass("headerBg");
        }
    });
})