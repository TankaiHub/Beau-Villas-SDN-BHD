(function () {
    let root = window.dom;
    let footer = {
        name: 'Beau Villas',
        company: {
            name: "",
            link: ''
        },
        recordation: {
            num: 12344,
            link: ''
        }
    }
    let oFooter = document.getElementsByClassName('footer-container')[0];
    oFooter.innerHTML = root.tempFooter(footer);
})();