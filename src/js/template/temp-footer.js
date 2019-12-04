(function (root) {

    function tempFooter(obj) {
        let strFooter = `<div class="footer">
                            <div class="wrap">
                                <div class="bottom">
                                    <div class="copy" >Copyright ©&nbsp; Beau Villas<span data-lang='string_footer1'></span>：
                                        <a href="" target="_blank">--</a>
                                        <span data-lang='string_footer2'></span>：<a href="" target="_blank">---</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        return strFooter;
    }

    root.tempFooter = tempFooter;

})(window.dom || (window.dom = {}));