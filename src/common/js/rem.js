/**
 * Created by Administrator on 2017/4/15.
 */
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth>1024){clientWidth=640}
      // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      docEl.style.fontSize = (clientWidth / 6.4) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
