// PARALLAX
// PARAGRAF ABOUT
$(window).on('load', function () {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': `translate(0px, ${wScroll / 4}%)`
    });

    $('.jumbotron h1').css({
        'transform': `translate(0px, ${wScroll / 2}%)`
    });

    $('.jumbotron p').css({
        'transform': `translate(0px, ${wScroll / 1.2}%)`
    });


    // PORTOFOLIO
    if (wScroll > $('.portofolio').offset().top - 250) {
        $('.portofolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });

    }


});



// ABOUT
$(window).on('load', function () {
    $('.pkiri').addClass('pmuncul');
});