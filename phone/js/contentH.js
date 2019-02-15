//中间内容区域的高度
(function(doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function() {
		var	winH = docEl.clientHeight;
		 	topH = doc.getElementById("topH").offsetTop,
			centerH = doc.getElementById("centerH"),
			footerH = doc.getElementsByTagName("footer")[0].offsetHeight;
			centerH.style.minHeight = (winH - topH - footerH) + 'px';
	};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
