(function () {
    let root = window.dom;
    let header = {
        logo: {
            img: '../../images/logo.jpg',
            link: '../../index.html'
        },
    }
    let oHeader = document.getElementsByClassName('header-container')[0];
    oHeader.innerHTML = root.TempHeader(header);
})();