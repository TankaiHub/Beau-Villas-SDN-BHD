(function ($, noticeData) {
    function fillDom(data, dom) {
        let str = ``;
        noticeData.forEach(function (item, index) {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item">
                        <a href='../blank/blank.html?index=6&id=${item.id}'>
                            <div class="cover-img">
                                <img src="${item.image}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime}</div>
                                <div class="qy-desc">
                                    <h5 data-lang='string_notice_title${index}'>${item.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        dom.html(str);
    }
    fillDom(noticeData, $('.section.sub-page.notice').find('.row.noticeR'));
})(jQuery, noticeData)