(function ($) {
	let $Title = $('title');
	let baseTitleTextZh = 'Beau Villas官方网站';
	let baseTitleTextEn = 'Beau Villas official website';
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
                path: './lang/', //资源文件路径
                language: tmp_lang,
                mode: 'map', //用Map的方式使用资源文件中的值
                async:true,
                callback: function () {//加载成功后设置显示内容
                    for (var i in $.i18n.map) {
                        $('[data-lang="' + i + '"]').text($.i18n.map[i]);
                    }
                }
            });
            self.now_lang = new_lang;
        }
    }
    $(document).ready(function () {
        let lang = localStorage.getItem('lang');
        if (lang !== null) {
            if (lang == 'zh') {
                $('.tabLang span').text('简体中文');
                language_pack.loadProperties(0);
                $Title.text(baseTitleTextZh);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
            } else if (lang == 'en') {
                $('.tabLang span').text('English');
                language_pack.loadProperties(1);
                $Title.text(baseTitleTextEn);
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
                $Title.text(baseTitleTextZh);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
                localStorage.setItem("lang", 'zh');
            } else if (text == 'English') {
                language_pack.loadProperties(1);
                $Title.text(baseTitleTextEn);
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
                $Title.text(baseTitleTextZh);
                $('.container .nav.navbar-nav .my-item').removeClass('isEn');
                localStorage.setItem("lang", 'zh');
            } else if (text == 'English') {
                language_pack.loadProperties(1);
                $Title.text(baseTitleTextEn);
                $('.container .nav.navbar-nav .my-item').addClass('isEn');
                localStorage.setItem("lang", 'en');
            }
        });
    });
})(jQuery)