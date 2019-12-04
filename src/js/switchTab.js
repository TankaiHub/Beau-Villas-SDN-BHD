(function ($) {
    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    let root = $('.page-nav');
    let $Wrap = root.find('.wrap');
    let $A = root.find('.wrap a');
    let tabcon = $('.mobanvip');
    let len = $A.length;
    if (searchStr != null || searchStr != undefined) {
        $A.removeClass('current');
        tabcon.css({ display: 'none' });
        $($A[obj.type]).addClass('current');
        $(tabcon[obj.type]).css({ display: 'block' });
    }

    let lang = localStorage.getItem('lang');
    let baseTitleTextZh = 'beauvillas轻钢别墅官方网站';
    let baseTitleTextEn = 'Beauvillas light steel villa official website';
   
    let $Title = $('title');
    $A.on('click', function () {
        $A.removeClass('current');
        $(this).addClass('current');
        tabcon.css({ display: 'none' });
        let index = $(this).index();
        $(tabcon[index]).css({
            display: 'block'
        });
            console.log()
        if (lang !== null && lang == 'en') {
            $Title.html($('.wrap a.current').text() + '-' + $('.header-container .my-item a.active').text() + '-' + baseTitleTextEn);
        } else {
            $Title.html($('.wrap a.current').text() + '-' + $('.header-container .my-item a.active').text() + '-' + baseTitleTextZh);
        }



        return false;
    });

    if (obj.index) {
        let itemA = $('.header-container .nav.navbar-nav .my-item .my-item-a');
        itemA.removeClass('active');
        $(itemA[obj.index]).addClass('active');
    }

    let look = false;
    $(window).resize(function () {
        let w = $(window).width();
        if (w < 580) {
            look = true;
        } else if (w > 580) {
            look = false;
        }

    });

})(jQuery);