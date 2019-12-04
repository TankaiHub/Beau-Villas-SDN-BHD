(function ($) {
    let mouseMove = {
        init: function (dom) {
            this.dom = dom;
            this.mouse();
        },
        lock: true,
        dX: 0,
        mouse: function () {
            let self = this;
            this.dom.on('mousedown', function (e) {
                e.preventDefault();
                if (self.lock) {
                    self.dX = e.pageX - parseInt($(this).css('left'));
                    self.lock = false;
                }
                $(document).on('mousemove', function (e) {
                    e.preventDefault();
                    let mX = e.pageX - self.dX;
                    if (mX < - $(self.dom.children()[0]).width()) {
                        mX = -$(self.dom.children()[0]).width();
                    } else if (mX > $(self.dom.children()[0]).width()) {
                        mX = $(self.dom.children()[0]).width();
                    }
                    self.dom.css({
                        left: mX / 3 + 'px',
                        transition: 'all .3s'
                    });
                });
                $(document).on('mouseup', function () {
                    $(document).off('mousemove');
                    $(document).off('mouseup');
                });
            });
        }
    }
    let touchMove = {
        init: function (dom) {
            this.dom = dom;
            this.touchstart();
            this.touchmove();
            this.touchend();
        },
        sX: 0,
        mX: 0,
        lock: true,
        touchstart: function () {
            let self = this;
            this.dom.on('touchstart', function (e) {
                self.sX = e.originalEvent.changedTouches[0].pageX;
            });
        },
        touchmove: function () {
            let self = this;
            this.dom.on('touchmove', function (e) {
                self.mX = e.originalEvent.changedTouches[0].pageX - self.sX;
                if (self.mX < - $(self.dom.children()[0]).width()) {
                    self.mX = -$(self.dom.children()[0]).width();
                } else if (self.mX > $(self.dom.children()[0]).width()) {
                    self.mX = $(self.dom.children()[0]).width();
                }
                self.dom.css({
                    left: self.mX + 'px',
                    transition: 'all .3s'
                });
            });
        },
        touchend: function () {
            this.dom.on('touchend', function (e) {

            });
        }
    }

    if ($(window).width() < 400) {
        mouseMove.init($('.page-nav .wrap'));
        touchMove.init($('.page-nav .wrap'));
    }
    $(window).resize(function () {
        if ($(window).width() < 400) {
            mouseMove.init($('.page-nav .wrap'));
            touchMove.init($('.page-nav .wrap'));
        }
    });
})(jQuery)