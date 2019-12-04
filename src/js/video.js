(function ($, videoData) {
    let isPlay = false;
    let video = $('video')[0];
    let timer = null;

    $('.player').on('click', function () {
        if (!isPlay) {
            $(this).find('.play').css({ display: 'block' });
            $(this).find('.pause').css({ display: 'none' });
            isPlay = true;
            runTime();
            video.play();
        } else {
            $(this).find('.play').css({ display: 'none' });
            $(this).find('.pause').css({ display: 'block' });
            isPlay = false;
            clearInterval(timer);
            video.pause();
        }
    });

    let disX,
        moveX;
    $('.slider').on('mousedown', function (e) {
        disX = e.pageX - parseInt($(this).css('left'));
        $(document).on('mousemove', function (e) {
            moveX = e.pageX - disX;
            if (moveX < 0) {
                moveX = 0;
            } else if (moveX > $('.play-bar').width()) {
                moveX = $('.play-bar').width();
            }
            $('.fill-bar').css({ width: moveX });
            let targetTime = moveX / $('.play-bar').width() * video.duration;
            video.currentTime = targetTime;
            if (!isPlay) {
                isPlay = true;
                video.play();
                $(this).find('.play').css({ display: 'block' });
                $(this).find('.pause').css({ display: 'none' });
                runTime();
            }
        });
        $(document).on('mouseup', function () {
            $(document).off('mousemove');
            $(document).off('mouseup');
        });
    });
    // $('.slider').on('touchstart', function (e) {
    //     let event = e.originalEvent.changedTouches[0]
    // });
    let $Time = $('.timer');
    function runTime() {
        timer = setInterval(function () {
            let total = video.duration;
            let nowTime = video.currentTime;
            $Time.html(('0' + parseInt(nowTime / 60)).slice(-2) + ":" + ('0' + parseInt(nowTime % 60)).slice(-2) + "/" + ('0' + parseInt(total / 60)).slice(-2) + ":" + ('0' + parseInt(total % 60)).slice(-2));
            let w = nowTime / total * $('.play-bar').width();
            $('.fill-bar').css({ width: w });
        }, 1000);
    }
    $(video).on('ended', function () {
        $('.play').css({ display: 'none' });
        $('.pause').css({ display: 'block' });
    });
    $('.play-bar').on('click', function (e) {
        let cX = e.pageX - $(this).offset().left;
        let targetTime = cX / $(this).width() * video.duration
        video.currentTime = targetTime;
    });
    $('.full-screen').on('click', function () {
        let dom = document.documentElement;
        dom.requestFullscreen();
        $(video).css({
            width: $(window)[0].screen.width,
            height: $(window)[0].screen.height
        });
        $('.menu').css({
            width: $(window)[0].screen.width,
            height: '50px'
        });
    });

    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    if (obj.index == 2) {
        videoData.forEach(function (item, index) {
            if (item.id == obj.id) {
                $('.deatil-wrap .content .title h2').html(`<span data-lang='string_video${index}'>${item.title}</span>`);
                $('.deatil-wrap .content .img img').attr('src', item.cover);
                video.src = item.url;
            }
        });
    }

    $('.btn.left-btn').on('click', function () {

        if (obj.index == 2) {
            let index = videoData.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=2&id=" + videoData[index - 1 < 0 ? index = videoData.length - 1 : index - 1].id;

        }
    });
    $('.btn.right-btn').on('click', function () {

        let index = videoData.findIndex(function (item, index) {
            return item.id == obj.id;
        });
        window.location.search = "?index=2&id=" + videoData[index + 1 > videoData.length - 1 ? index = 0 : index + 1].id;


    });

    video.addEventListener('waiting', function (e) {
        $('.video-container .loading').css({display:'block'});
        $('.video-container .loading img').css({opacity:'.4'});
    });
    video.addEventListener('playing', function (e) {
        $('.video-container .loading').css({display:'none'});
    });

})(jQuery, videoData)