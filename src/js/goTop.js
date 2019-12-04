(function ($) {
    $(window).on('scroll', function () {
        var $scrollTop = $(window).scrollTop();
        if ($scrollTop >= 500) {
            $('#goTop').fadeIn();
            $('.tabEn').fadeIn();
        } else if ($scrollTop < 500) {
            $('#goTop').fadeOut();
            $('.tabEn').fadeOut()
        }
    });
    $('#goTop').click(function () {
        console.log(11)
        $('html,body').animate({
            scrollTop: 0
        });
    });
})(jQuery);