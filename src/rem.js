// 移动端适配：以 375px 设计稿为基准
// 1rem = 100px
(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    // 限制最大宽度，防止在 iPad 或 PC 端过大
    if (clientWidth >= 750) {
        clientWidth = 750;
    }
    // 375px 宽度下，1rem = 100px
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
