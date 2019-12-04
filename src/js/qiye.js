(function ($, qydt, meitibaodao, videoData) {
    let $qiyeDt = $('.section.sub-page.qiye').find('.mobanvip .qiye-dt');
    var optionList = window.location.search.slice('1').split(';')[0].split('=')[1];
    let qd = sessionStorage.getItem('qiyedongtai') || [];
    let qdData;
    if (qd.length > 0) {
        qdData = JSON.parse(qd);
        fillDom(qdData, $qiyeDt);
        $('.loading').css({
            display: 'none'
        });
    } else {
        getData().then(function (res) {
            fillDom(res, $qiyeDt);
        });
    }


    function getData() {
        return new Promise(function (rej, reo) {
            $.ajax({
                url: 'http://api.beauvillas.com/website/queryEnterpriseDynamicList',
                type: 'GET',
                success(res) {
                    if (res.state == 200) {
                        rej(res.data);
                        sessionStorage.setItem("qiyedongtai", JSON.stringify(res.data));
                        $('.loading').css({
                            display: 'none'
                        });
                    }
                }
            });
        });
    }
    function fillDom(data, dom) {
        let str = ``;
        data.forEach((item, index) => {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item" data-index='${index}'>
                        <a href='../blank/blank.html?index=2&id=${item.id}'>
                            <div class="cover-img">
                                <img src="${item.image.split(',')[0]}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime.split(' ')[0]}</div>
                                <div class="qy-desc">
                                    <h5 data-lang=''>${item.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        dom.html(str);
    }
    function fillHY(data, dom) {
        let str = ``;
        data.forEach((item, index) => {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item" data-index='${index}'>
                        <a href='../blank/blank.html?index=2&id=${item.id}&state=hy'>
                            <div class="cover-img">
                                <img src="${item.image.split(',')[0]}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime.split(' ')[0]}</div>
                                <div class="qy-desc">
                                    <h5 data-lang='string_qydt_title${index}'>${item.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        dom.html(str);
    }

    fillHY(qydt, $('.section.sub-page.qiye').find('.row.hye-dt'));
    function fillMT(data, dom) {
        let str = ``;
        data.forEach((item, index) => {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item" data-index='${index}'>
                        <a href='../blank/blank.html?index=2&id=${item.id}&state=mt'>
                            <div class="cover-img">
                                <img src="${item.image.split(',')[0]}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime.split(' ')[0]}</div>
                                <div class="qy-desc">
                                    <h5 data-lang='string_mtbd_title0'>${item.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        dom.html(str);
    }
    fillMT(meitibaodao, $('.section.sub-page.qiye').find('.row.mt'));
    function fillVideo(data, dom) {
        let str = ``;
        data.forEach((item, index) => {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item">
                        <a href='../blank/video.html?index=2&id=${item.id}'>
                            <div class="cover-img">
                                <img src="${item.cover}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime}</div>
                                <div class="qy-desc">
                                    <h5 data-lang='string_video${index}'>${item.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        dom.html(str);
    }
    fillVideo(videoData, $('.section.sub-page.qiye').find('.row.video'));

})(jQuery, qydt, meitibaodao, videoData);