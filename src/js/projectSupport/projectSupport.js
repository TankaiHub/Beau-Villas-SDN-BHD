(function ($, MT, data) {
    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }

    let root = $('.section.sub-page.proSup');

    if (obj.type == 2) {
        root.addClass('isShowPro');
    }
    root.find('.wrap a').on('click', function () {
        let index = $(this).index();
        if (index === 2) {
            root.addClass('isShowPro');
        } else {
            root.removeClass('isShowPro');
        }
    });
    let str = ``;
    let $Row = $('.row.showpro');
    data.forEach(function (item, index) {
        str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item">
                    <a href="../blank/blank.html?index=5&id=${item.id}">
                        <div class="cover-img">
                            <img src="${item.image}"
                                alt="">
                            <span class='glyphicon glyphicon-plus qy-add'></span>
                        </div>
                        <div class="qy-bottom">
                            <div class="qy-time">${item.createTime}</div>
                            <div class="qy-desc">
                                <h5 data-lang='string_sj_text${index}'>${item.title}</h5>
                            </div>
                        </div>
                    </a>
                </div>`;
        $Row.html(str);
    });
})(jQuery, MYTOOLS, sceneCase);