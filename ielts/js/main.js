$(function () {
    var contentId = $(".form-control option").val();
    $("#btn-submit").click(function () {
        var sucFun = function () {
            alert("您的预约已成功!");
        };
        validateLinsten('.testform', "http://zyadmin.xhd.cn", true, sucFun, 680122);
    });

    touchMoveSlide(".carousel", 50);
});


function touchMoveSlide(containerName, num) {

    // 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上轮播图容器
    var $carousels = $(containerName);
    var startX, endX;
    // 在滑动的一定范围内，才切换图片
    var offset = num;
    // 注册滑动事件
    $carousels.on('touchstart', function (e) {
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove', function (e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        e.preventDefault();
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function (e) {
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });
}
