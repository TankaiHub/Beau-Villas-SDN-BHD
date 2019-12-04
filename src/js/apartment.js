(function ($) {

    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    let root = $('.section.sub-page.apar');
    let $Qy = root.find('.row.qiye-dt');
    // let hx = sessionStorage.getItem("huxing") || [];
    // let hxData;
    // if (hx.length > 0 && obj.type == 1) {
    //     hxData = JSON.parse(hx);
    //     fillDom(hxData, 1);
    // }else {
    //     
    // }
    getData(obj.type)
    function getData(type) {
        let par = +type + 1;
        $.ajax({
            url: 'http://api.beauvillas.com/website/queryApartmentList',
            type: 'POST',
            data: JSON.stringify({ type: par }),
            datType: "JSON",
            contentType: 'application/json',
            success(res) {
                if (res.state == 200) {
                    fillDom(res.data, type);
                    sessionStorage.setItem("huxing", JSON.stringify(res.data));
                    $('.loading').css({
                        display:'none'
                    });
                }
            }
        });
    }
    function fillDom(data, type) {
        let str = ``;
        data.forEach((item, index) => {
            str += `<div class="col-xs-12 col-sm-6 col-lg-4 qy-item">
                        <a href='../blank/blank.html?index=3&id=${item.id}&type=${+type+1}'>
                            <div class="cover-img">
                                <img src="${item.villaImg.split(',')[0]}" alt="">
                                <span class='glyphicon glyphicon-plus qy-add'></span>
                            </div>
                            <div class="qy-bottom">
                                <div class="qy-time">${item.createTime.split(' ')[0]}</div>
                                <div class="qy-desc">
                                    <h5>${item.villaName}</h5>
                                </div>
                            </div>
                        </a>
                    </div>`
        });
        $($Qy[type]).html(str);
    }

    root.find('.wrap a').on('click', function () {
        let index = $(this).index();
        $Qy[index].innerHTML = '';
        $('.loading').css({
            display:'block'
        });
        getData(index);
    });

})(jQuery)