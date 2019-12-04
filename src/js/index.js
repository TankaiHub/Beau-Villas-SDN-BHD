
(function ($, noticeData) {

	let showItem = 3;
	let w = $(document).width();
	let hx = sessionStorage.getItem("huxing") || [];

	let hxData;
	if (hx.length > 0) {
		hxData = JSON.parse(hx);
		fillDom(hxData);
	} else {
		getData();
	}

	if (w < 1125 && w > 768) {
		showItem = 2;
	} else if (w < 768) {
		showItem = 1;
	}
	if (w < 768) {
		$('.slick-arrow').hide();
	}
	$(window).resize(function () {
		if (w < 1125 && w > 768) {
			showItem = 2;
		} else if (w < 768) {
			showItem = 1;
		}
	});
	let itemA = $('.nav.navbar-nav .my-item .my-item-a');
	itemA.removeClass('active');
	$(itemA[0]).addClass('active');


	function getData() {
		$.ajax({
			url: 'http://api.beauvillas.com/website/queryApartmentList',
			type: 'POST',
			data: JSON.stringify({ type: 2 }),
			datType: "JSON",
			contentType: 'application/json',
			success(res) {
				if (res.state == 200) {
					fillDom(res.data);
					sessionStorage.setItem("huxing", JSON.stringify(res.data));
				}
			}
		});
	}
	function fillDom(data) {
		let str = ``;
		let $PicList = $('.pic-list');
		data.forEach(function (item, index) {
			str += `<div class='pic-box'>
						<div class='img'>
							<img src="${item.villaImg.split(',')[0]}" alt="">
						</div>
						<h5>轻奢型案例</h5>
						<span class='read-more'>
							<span class='glyphicon glyphicon-remove my-add-read'></span>
							READ MORE</span>
						<a href="./page/blank/blank.html?index=3&id=${item.id}&type=2" class='full'></a>
					</div>`;
		});
		$PicList.html(str);

		$PicList.slick({
			centerMode: true,
			centerPadding: '60px',
			autoplay: true,
			autoplaySpeed: 2500,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						infinite: true,
					}
				},
				{
					breakpoint: 600, //屏幕分辨率<600时执行下列属性,且不会继承上面设定的属性。
					settings: {
						slidesToShow: 1,
						infinite: true,
					}
				}

			]
		});
	}

	function fillNot(data, dom) {
		let str = ``;
		data.slice(0, 6).forEach(function (item, index) {
			str += `<div class="home-news-box">
						<span class='glyphicon glyphicon-arrow-right ico-right'></span>
						<div class="text">
							<h3 data-lang='string_title3_p${index + 1}'>${item.title}</h3>
							<p data-lang='sting_title3_reply${index + 1}'>${item.text}</p>
						</div>
						<a href="./page/blank/blank.html?index=6&id=${item.id}"></a>
					</div>`;
		});
		dom.html(str);
	}

	fillNot(noticeData, $('.section.home-news .home-news-list'));


})(jQuery, noticeData);