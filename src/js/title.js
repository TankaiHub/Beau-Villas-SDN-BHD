(function ($) {
    
        let $Title = $('title');
        let $currentText;
        let baseTitleTextZh = 'beauvillas轻钢别墅官方网站';
        let baseTitleTextEn = 'Beauvillas light steel villa official website';
        let lang = localStorage.getItem('lang');
        if (lang == 'zh') {
            $currentText = $('.section.sub-page.qiye .wrap a.current').text();
            change(baseTitleTextZh);
        } else if (lang == 'en') {
            $currentText = $('.section.sub-page.qiye .wrap a.current').text();
            $Title.text(baseTitleTextEn + '-' + $currentText);
            change(baseTitleTextEn)
        }
        function change(lang) {
            $currentText = $('.section.sub-page.qiye .wrap a.current').text();
            $Title.text(lang + '-' + $currentText);
        }
})(jQuery)