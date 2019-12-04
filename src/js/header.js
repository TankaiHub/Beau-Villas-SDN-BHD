(function ($) {
    $(document).scroll(function (e) {
        if ($(document).width() < 768) return;
        var scroH = $(document).scrollTop();
        if (scroH > $('.header-container').height()) {
            $('.header-container').css({
                top: '-80px'
            });
        } else {
            $('.header-container').css({
                top: 0
            });
        }
    })
    $('.navbar-toggle').on('click', function () {
        if ($(this).hasClass('collapsed')) {
            $(this).find('p.ico-list').css({ display: 'none' });
            $(this).find('p.ico-close').css({ display: 'block' });
        } else {
            $(this).find('p.ico-list').css({ display: 'block' });
            $(this).find('p.ico-close').css({ display: 'none' });
        }
    });
    $('.my-item').on('click', function () {
        $('.my-item').find('.my-item-a').removeClass('active');
        $(this).find('.my-item-a').addClass('active');
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.ico-down').css({ display: 'block' });
            $(this).find('.ico-up').css({ display: 'none' });
        } else {
            $(this).addClass('open');
            $(this).find('.ico-down').css({ display: 'none' });
            $(this).find('.ico-up').css({ display: 'block' });
        }
    });
    $('.navbar-toggle').on('click', function () {
        if ($(this).hasClass('collapsed')) {
            $(this).find('p.ico-list').css({ display: 'none' });
            $(this).find('p.ico-close').css({ display: 'block' });
        } else {
            $(this).find('p.ico-list').css({ display: 'block' });
            $(this).find('p.ico-close').css({ display: 'none' });

        }
    });
    $(document).ready(function () {
        $(document).off('click.bs.dropdown.data-api');
    });
    if ($(document).width() > 1024) {
        $(".dropdown").hover(function () {
            $(this).addClass("open");
            $(this).find('.ico-down').css({ display: 'none' });
            $(this).find('.ico-up').css({ display: 'block' });
        }, function () {
            $(this).removeClass("open");

            $(this).find('.ico-down').css({ display: 'block' });
            $(this).find('.ico-up').css({ display: 'none' });
        });
    }
})(jQuery);