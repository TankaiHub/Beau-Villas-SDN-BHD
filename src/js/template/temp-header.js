
(function (root) {
    function TempHeader(header) {

        let strHearer = `<div class="logo-box">
                    <div class="top-img-box">
                        <a href="${header.logo.link}"><img src="${header.logo.img}" alt=""></a>
                        <div class="lang-dropdown tabLang">
                        <span>简体中文</span>
                        <ul class="dropdown-menu-lang">
                          <li>简体中文</li>
                          <li>English</li>
                        </ul>
                      </div>
                      </div>
                </div>
                <div class="nav-wrapper">
                    <nav class="navbar navbar-default my-nav">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed my-btn" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <p class='ico-list'>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </p>
                                    <p class='ico-close'>
                                        <span class='glyphicon glyphicon-remove'></span>
                                    </p>
                                </button>
                                <a class="navbar-brand my-logo-img" href="${header.logo.link}">
                                    <img src="${header.logo.img}" alt="">
                                </a>
                            </div>
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div class="container">
                                    <ul class="nav navbar-nav">
                                        <li class='my-item'><a class='my-item-a' href="../../index.html" data-lang="string_nav1_0"></a></li>
                                        <li class="dropdown my-item">
                                            <a href="../qiye/qiyeCulture.html?type=0&index=1" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang="string_nav2_0">
                                               
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../qiye/qiyeCulture.html?type=0&index=1" data-lang="string_nav2_1">企业简介</a></li>
                                                <li><a href="../qiye/qiyeCulture.html?type=1&index=1" data-lang="string_nav2_2">企业文化</a></li>
                                                <li><a href="../qiye/qiyeCulture.html?type=2&index=1" data-lang="string_nav2_3">人才招聘</a></li>
                                                <li><a href="../qiye/qiyeCulture.html?type=3&index=1" data-lang="string_nav2_4">企业故事</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown my-item">
                                            <a href="../qiyeDynamic/qiyeDynamic.html?type=0&index=2" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang="string_nav3_0">
                                               
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../qiyeDynamic/qiyeDynamic.html?type=0&index=2" data-lang='string_nav3_1'>企业动态</a></li>
                                                <li><a href="../qiyeDynamic/qiyeDynamic.html?type=1&index=2" data-lang='string_nav3_2'>行业动态</a></li>
                                                <li><a href="../qiyeDynamic/qiyeDynamic.html?type=2&index=2" data-lang='string_nav3_3'>媒体报道</a></li>
                                                <li><a href="../qiyeDynamic/qiyeDynamic.html?type=3&index=2" data-lang='string_nav3_4'>视频专区</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown my-item">
                                            <a href="../apartment/apartment.html?type=0&index=3" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang='string_nav4_0'>
                                                
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../apartment/apartment.html?type=0&index=3" data-lang='string_nav4_1'>标准户型</a></li>
                                                <li><a href="../apartment/apartment.html?type=1&index=3" data-lang='string_nav4_2'>轻奢户型</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown my-item">
                                            <a href="../join/joiningConditions.html?type=0&index=4" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang='string_nav5_0'>
                                                
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../join/joiningConditions.html?type=0&index=4" data-lang='string_nav5_1'>加盟条件</a></li>
                                                <li><a href="../join/joiningConditions.html?type=1&index=4" data-lang='string_nav5_2'>加盟流程</a></li>
                                                <li><a href="../join/joiningConditions.html?type=2&index=4" data-lang='string_nav5_3'>政策支持</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown my-item">
                                            <a href="../projectSupport/clientAbutment.html?type=0&index=5" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang='string_nav6_0'>
                                               
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../projectSupport/clientAbutment.html?type=0&index=5" data-lang='string_nav6_1'>客户对接流程</a></li>
                                                <li><a href="../projectSupport/clientAbutment.html?type=1&index=5" data-lang='string_nav6_2'>施工现场</a></li>
                                                <li><a href="../projectSupport/clientAbutment.html?type=2&index=5" data-lang='string_nav6_3'>实景案例</a></li>
                                                <li><a href="../projectSupport/clientAbutment.html?type=3&index=5" data-lang='string_nav6_4'>质量管理机制</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown my-item">
                                            <a href="../notice/notice.html?type=0&index=6" class="dropdown-toggle my-item-a" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false" data-lang='string_nav7_0'>
                                               
                                            </a>
                                            <span class="ico-box">
                                                <span class='glyphicon glyphicon-menu-down ico-down ico'></span>
                                                <span class='glyphicon glyphicon-menu-up ico-up ico'></span>
                                            </span>
                                            <ul class="dropdown-menu sub">
                                                <li><a href="../notice/notice.html?type=0&index=6" data-lang='string_nav7_1'>材料知识</a></li>
                                                <li><a href="../notice/notice.html?type=1&index=6" data-lang='string_nav7_2'>注意事项</a></li>
                                            </ul>
                                        </li>
                                        <li class="my-item">
                                            <a href="../contact/contact.html?index=7" class="my-item-a" data-lang='string_nav8_0'>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>`
        return strHearer;
    }
    root.TempHeader = TempHeader;
})(window.dom || (window.dom = {}));
