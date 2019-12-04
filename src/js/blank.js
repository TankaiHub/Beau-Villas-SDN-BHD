(function ($, sceneCase, qydt, mt, cl) {
    let searchStr = window.location.search.slice('1');
    let obj = {};
    let arr = searchStr.split('&');
    let searchLen = arr.length;
    for (let i = 0; i < searchLen; i++) {
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    let $Con = $('.deatil-wrap .content');
    let $p = $Con.find('.title p');
    let h = $Con.find('.title h2');
    let img = $Con.find('.img');
    let form = $('.form');
    let hx = ['标准户型', '轻奢户型'];
    let lang = localStorage.getItem('lang');
    let baseTitleTextZh = 'beauvillas轻钢别墅官方网站';
    let baseTitleTextEn = 'Beauvillas light steel villa official website';
    let $Title = $('title');
    if (obj.index == 2) {
      
        form.css({ display: 'none' });
        let data = JSON.parse(sessionStorage.getItem("qiyedongtai"));

        $p.html('<span data-lang="string_nav3_1">企业动态<span>');
        data.forEach(function (item, index) {
            if (item.id == obj.id) {
                h.text(item.title);
                img.html(item.content);
            }

        });
        if (!obj.state) {
            $(document).ready(function () {
                if (lang !== null && lang == 'en') {
                    $Title.text(h.text() + '-' +  $p.text() + '-' + '热点资讯' + '-'  + baseTitleTextEn);
                }else {
                    $Title.text(h.text() + '-' +  $p.text() + '-' + '热点资讯' + '-'  + baseTitleTextZh);
                }
            })
        }



        if (obj.state == 'hy') {
            $p.text('');
            $p.html('<span data-lang="string_nav3_2">行业动态<span>');
            qydt.forEach(function (item, index) {
                if (item.id == obj.id) {
                    h.html(`<span data-lang='string_qydt_title${index}'>${item.title}<span>`);
                    img.html(item.desc);
                }
            });
        }
        if (obj.state == 'mt') {
            $p.html('<span data-lang="string_nav3_3">媒体报道<span>');
            mt.forEach(function (item, index) {
                if (item.id == obj.id) {
                    h.html(`<span data-lang='string_mtbd_title0'>${item.title}<span>`);
                    img.html(item.desc);
                }
            });
        }
    }
    if (obj.index == 3) {
        form.css({ display: 'block' });
        let data = JSON.parse(sessionStorage.getItem("huxing"));
        $p.html(`<span data-lang="string_nav4_${obj.type}">${hx[obj.type - 1]}<span>`);
        data.forEach(function (item, index) {
            if (item.id == obj.id) {
                h.text(item.villaName);
                img.html(item.villaInfo);

            }
        });
        if (obj.type) {
            $(document).ready(function () {
                if (lang !== null && lang == 'en') {
                    $Title.text(h.text() + '-' +  hx[obj.type - 1] + '-' + '户型展示' + '-'  + baseTitleTextEn)
                }else {
                    $Title.text(h.text() + '-' +  hx[obj.type - 1] + '-' + '户型展示' + '-'  + baseTitleTextZh)
                }
            })
        }
    }
    if (obj.index == 6) {
        $p.html(`<span data-lang="string_nav7_1">材料知识<span>`);
        console.log(cl)
        cl.forEach(function (item, index) {
            if (item.id == obj.id) {
                h.html(`<span data-lang='string_notice_title${index}'>${item.title}</span>`);
                img.html(item.desc);

            }
        });
    }
    if (obj.index == 5) {
        $p.html(`<span data-lang="string_nav6_3">实景案例<span>`);
        form.css({ display: 'none' });
        sceneCase.forEach(function (item, index) {
            if (item.id == obj.id) {
                h.html(`<span data-lang='string_sj_text${index}'>${item.title}</span>`);
                let imgBox = $('<img src="' + item.image + '" alt="">');
                img.append(imgBox);
            }
        });
    }


    // 点击next prev
    $('.btn.left-btn').on('click', function () {

        if (obj.index == 2) {
            if (obj.state == 'hy') {
                let index = qydt.findIndex(function (item, index) {
                    return item.id == obj.id;
                });
                window.location.search = "?index=2&id=" + qydt[index - 1 < 0 ? index = qydt.length - 1 : index - 1].id + '&state=hy';
                return;
            }
            if (obj.state == 'mt') {
                let index = mt.findIndex(function (item, index) {
                    return item.id == obj.id;
                });
                window.location.search = "?index=2&id=" + mt[index - 1 < 0 ? index = mt.length - 1 : index - 1].id + '&state=mt';
                return;
            }
            let data = JSON.parse(sessionStorage.getItem("qiyedongtai"));
            let index = data.findIndex(function (item, index) {
                return item.id == obj.id;
            });

            window.location.search = "?index=2&id=" + data[index - 1 < 0 ? index = data.length - 1 : index - 1].id;

        }
        if (obj.index == 3) {
            let data = JSON.parse(sessionStorage.getItem("huxing"));
            let index = data.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=3&id=" + data[index - 1 < 0 ? index = data.length - 1 : index - 1].id + '&type=' + obj.type;
        }
        if (obj.index == 5) {
            let index = sceneCase.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=5&id=" + sceneCase[index - 1 < 0 ? index = sceneCase.length - 1 : index - 1].id;
        }
        if (obj.index == 6) {
            let index = cl.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=6&id=" + cl[index - 1 < 0 ? index = cl.length - 1 : index - 1].id;
        }
    });
    $('.btn.right-btn').on('click', function () {
        if (obj.index == 2) {
            if (obj.state == 'hy') {
                let index = qydt.findIndex(function (item, index) {
                    return item.id == obj.id;
                });
                window.location.search = "?index=2&id=" + qydt[index + 1 > qydt.length - 1 ? index = 0 : index + 1].id + '&state=hy';
                return;
            }
            if (obj.state == 'mt') {
                let index = mt.findIndex(function (item, index) {
                    return item.id == obj.id;
                });
                window.location.search = "?index=2&id=" + mt[index + 1 > mt.length - 1 ? index = 0 : index + 1].id + '&state=mt';
                return;
            }
            let data = JSON.parse(sessionStorage.getItem("qiyedongtai"));
            let index = data.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=2&id=" + data[index + 1 > data.length - 1 ? index = 0 : index + 1].id ;
        }
        if (obj.index == 3) {
            let data = JSON.parse(sessionStorage.getItem("huxing"));
            let index = data.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=3&id=" + data[index + 1 > data.length - 1 ? index = 0 : index + 1].id + '&type=' + obj.type;
        }
        if (obj.index == 5) {
            let index = sceneCase.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=5&id=" + sceneCase[index + 1 > sceneCase.length - 1 ? index = 0 : index + 1].id;
        }
        if (obj.index == 6) {
            let index = cl.findIndex(function (item, index) {
                return item.id == obj.id;
            });
            window.location.search = "?index=6&id=" + cl[index + 1 > cl.length - 1 ? index = 0 : index + 1].id;
        }
    });


    // form 表单
    $('.form .btn').on('click', function () {
        let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let userPhone = form.find('.phone').val();
        let email = form.find('.email').val();
        let phone = form.find('.phone').val();
        let userName = form.find('.name').val().trim();
        let area = form.find('.area').val().trim();
        let address = form.find('.address').val().trim();
        let lang = localStorage.getItem("lang")
        if (userName == '') {
            window.location.href = '../error/error.html?index=0&lang=' + lang
            return;
        }
        if (!phoneReg.test(phone)) {
            window.location.href = '../error/error.html?index=1&lang=' + lang
            return;
        }
        if (area == '') {
            window.location.href = '../error/error.html?index=2&lang=' + lang
            return;
        }
        if (!emailReg.test(email)) {
            window.location.href = '../error/error.html?index=3&lang=' + lang
            return;
        }
        if (address == '') {
            window.location.href = '../error/error.html?index=4&lang=' + lang
            return;
        }
        let obj = {
            userName,
            userPhone,
            area,
            email,
            address,
            use: form.find('.use').val().trim()
        }
        $.ajax({
            url: 'http://api.beauvillas.com/website/addLeaveMsg',
            type: 'POST',
            data: JSON.stringify(obj),
            datType: "JSON",
            contentType: 'application/json',
            success(res) {
                if (res.state == 200) {
                    window.location.href = '../page/success.html';
                }
            }
        });
    })
})(jQuery, sceneCase, qydt, meitibaodao, noticeData);