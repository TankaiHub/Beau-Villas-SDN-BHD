(function ($) {
    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    var language_pack = {
        now_lang: 0, // 0:ch,1:en
        loadProperties: function (new_lang) {
            var self = this;
            var tmp_lang = '';
            if (new_lang == 0) {
                tmp_lang = 'zh';
                $('body').removeClass('en').addClass('zh');
            } else {
                tmp_lang = 'en';
                $('body').removeClass('zh').addClass('en');
            }
            jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
                name: 'strings', //资源文件名称
                path: '../../lang/', //资源文件路径
                language: tmp_lang,
                mode: 'map', //用Map的方式使用资源文件中的值
                async: true,
                callback: function () {//加载成功后设置显示内容
                    for (var i in $.i18n.map) {
                        $('[data-lang="' + i + '"]').text($.i18n.map[i]);
                    }
                    change();
                }
            });
            self.now_lang = new_lang;
        }
    }

    function change() {
        let lang = localStorage.getItem('lang');
        let baseTitleTextZh = 'Beau Villas官方网站';
        let baseTitleTextEn = 'Beau Villas official website';
        let $CurText = $('.section.sub-page .wrap a.current').text();
        let $CurNavText = $('.header-container .nav.navbar-nav .my-item .my-item-a.active').text();
        let $Title = $('title');
        if (window.location.pathname.indexOf('error.html') != -1 || window.location.pathname.indexOf('success.html') != -1) {
            if (lang != null && lang == 'en') {
                $Title.text('Prompt message');
            }
            return;
        }
        if (obj.index == 2 && obj.state == undefined && window.location.pathname.indexOf('blank.html') != -1)  return;
        if (obj.index == 3 && window.location.pathname.indexOf('blank.html') != -1) return;
        if (obj.index == 2 && window.location.pathname.indexOf('video.html') != -1) {
            if (lang != null && lang == 'en') {
                changeBlank($Title, $CurNavText, baseTitleTextEn);
            }else {
                changeBlank($Title, $CurNavText, baseTitleTextZh);
            }

            return;
        } 
        if (lang !== null) {
            if (lang == 'zh') {
                if (window.location.pathname.indexOf('blank.html') != -1) {
                    changeBlank($Title, $CurNavText, baseTitleTextZh);
                    return;
                }
                if (window.location.pathname.indexOf('contact.html') != -1) {
                    $Title.text($CurNavText + '-' + baseTitleTextZh);
                    return;
                }
                $Title.text( $CurText + '-' + $CurNavText + '-' + baseTitleTextZh);

            } else if (lang == 'en') {
                if (window.location.pathname.indexOf('blank.html') != -1) {
                    changeBlank($Title, $CurNavText, baseTitleTextEn);
                    return;
                }
                if (window.location.pathname.indexOf('contact.html') != -1) {
                    $Title.text($CurNavText + '-' + baseTitleTextEn);
                    return;
                }
                $Title.text($CurNavText + '-' + $CurText + '-' + baseTitleTextEn);
            }
        } else {
            if (window.location.pathname.indexOf('contact.html') != -1) {
                $Title.text($CurNavText + '-' + baseTitleTextZh);
                return;
            }
            if (window.location.pathname.indexOf('blank.html') != -1) {
                changeBlank($Title, $CurNavText, baseTitleTextZh);
                return;
            }
            $Title.text( $CurText + '-' + $CurNavText + '-' + baseTitleTextZh);
        }

    }

    function changeBlank(root, curNav, base) {
        let $BlankText = $('.deatil-wrap .content .title p').text();
        let $BlankHText = $('.deatil-wrap .content .title h2').text();
        root.text($BlankHText + '-'  + $BlankText + '-'  + curNav + '-' + base);
    }

    $(document).ready(function () {
        let lang = localStorage.getItem('lang');
        if (lang !== null) {
            if (lang == 'zh') {
                $('.tabLang span').text('简体中文');
                language_pack.loadProperties(0);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
            } else if (lang == 'en') {
                $('.tabLang span').text('English');
                language_pack.loadProperties(1);
                $('.container .nav.navbar-nav .my-item').addClass('isEn');
            }
        } else {
            language_pack.loadProperties(0);
        }
        $('.top-img-box  .tabLang span').on('click', function () {
            $('.top-img-box .tabLang .dropdown-menu-lang').css({ display: 'block' });
        });
        $('.tabEn  .tabLang span').on('click', function () {
            $('.tabEn .tabLang .dropdown-menu-lang').css({ display: 'block' });
        });
        $('.top-img-box .tabLang .dropdown-menu-lang').on('click', function (e) {
            e.preventDefault();
            let target = $(e.target);
            let text = target.text();
            $('.top-img-box .tabLang span').text(text);
            $('.tabEn .tabLang span').text(text);
            $(this).css({ display: "none" });
            if (text == '简体中文') {
                language_pack.loadProperties(0);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
                localStorage.setItem("lang", 'zh');
            } else if (text == 'English') {
                language_pack.loadProperties(1);
                $('.container .nav.navbar-nav .my-item').addClass('isEn');
                localStorage.setItem("lang", 'en');
            }
        });
        $('.tabEn .tabLang .dropdown-menu-lang').on('click', function (e) {
            e.preventDefault();
            let target = $(e.target);
            let text = target.text();
            $('.tabEn .tabLang span').text(text);
            $('.top-img-box .tabLang span').text(text);
            $(this).css({ display: "none" });
            if (text == '简体中文') {
                language_pack.loadProperties(0);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
                localStorage.setItem("lang", 'zh');
            } else if (text == 'English') {
                language_pack.loadProperties(1);
                $('.container .nav.navbar-nav .my-item').addClass('isEn');
                localStorage.setItem("lang", 'en');
            }
        });
    });
})(jQuery)