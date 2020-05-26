//适配不同尺寸
(function(doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        reCalc = function() {
            let clientWidth = docEl.clientWidth || screen.width;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener('DOMContentLoaded', reCalc, false);
    reCalc();
})(document, window);