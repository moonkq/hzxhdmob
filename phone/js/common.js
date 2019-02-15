
mui.ready(function() {
	mui.init();
    //首页
	mui('#offCanvasSideScroll').scroll();
	mui('#offCanvasContentScroll').scroll();
	//内页滚动
	mui('#scrollContainer').scroll();
	// 监听tap事件，解决 a标签 不能跳转页面问题
	mui('body').on('tap','a',function(){document.location.href=this.href});
	
	//选择性别
	var sex = document.getElementById("sex");
	var dataSex = document.getElementById("dataSex");
	mui('body').on('tap', '.mui-popover-action p', function() {
		mui('#sexBox').popover('toggle');
		sex.value = this.innerHTML;
		dataSex.value = this.getAttribute('data-sex');
	});
	
	//订单页面
	mui('body').on('tap', '.stu-list a', function() {
		var stuActiveElem = document.querySelector('.stu-list a.stu-list-active');
		stuActiveElem && stuActiveElem.classList.remove('stu-list-active');
		this.classList.add('stu-list-active');
		if(this.getAttribute("data-stuId") == 0){
			chooseMe();
		}
		else {
			stuInfo(this.getAttribute("data-stuId"));
		}
	});
	mui('body').on('tap', '.payment-item', function() {
		var stuActiveElem = document.querySelector('.payment-item.pay-active');
		stuActiveElem && stuActiveElem.classList.remove('pay-active');
		this.classList.add('pay-active');
	});
});
