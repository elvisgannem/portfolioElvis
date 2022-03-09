let tooltipsIcons = Array.prototype.slice.call(document.getElementsByClassName('tooltip'));

tooltipsIcons.forEach((icon) => {
    tippy('#' + icon.getAttribute('id'), {
        content: icon.getAttribute('data')
    });
})