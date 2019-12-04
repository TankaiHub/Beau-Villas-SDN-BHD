(function ($) {

    $('.banner-container-location').on('click', function (e) {
        $(this).css({zIndex:99});
        $(this).find('img').css({transform:'rotate(0deg)'});
    });


})(jQuery);