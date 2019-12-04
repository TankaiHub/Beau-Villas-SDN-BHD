(function ($, MT) {
    $(window).scroll(function () {
        let top = MT.ScollPostion().top;

        $('.banner-container').css({
            transform: 'translate3d(0, ' + -top / 4 + 'px, 0)'
        });
        $('.banner-container-location').css({
            transform: 'translate3d(0, ' + -top / 4 + 'px, 0)'
        });
    });
})(jQuery, MYTOOLS);