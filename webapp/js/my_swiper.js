// swiper自定义
window.onload = function () {
    /*首页头部搜索*/
    $('.searchbox').bind('input propertychange',function(){
        if($(this).val().length > 0){
            $(this).next('.clear').addClass('show');
        } else{
            $(this).next('.clear').removeClass('show');
        }
    });
    $('.searchbar .clear').click(function(){
        $('.searchbox').val('').focus();
        $(this).removeClass('show');
    });

    /*首页头部焦点图*/
    new Swiper('#homeSlide', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.home-pagination',
            // dynamicBullets: true
        }
    });

    /*首页头条资讯*/
    new Swiper('#headlineNews', {
        direction : 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });

    /*首页考试备考专区*/
    var infoList = new Swiper('#infoList',{
        on:{
            slideChangeTransitionStart: function(){
                $(".tabs-nav .current").removeClass('current');
                $(".tabs-nav .tab-item").eq(this.activeIndex).addClass('current');
            }
        }
    });
    $(".tabs-nav .tab-item").on('click',function(e){
        e.preventDefault();
        $(".tabs-nav .current").removeClass('current');
        $(this).addClass('current');
        infoList.slideTo($(this).index());
    });

    /*频道页焦点图*/
    new Swiper('#channelSlide', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.channel-pagination',
        }
    });

    /*频道页课程*/
    new Swiper('#channelCourse', {
        loop: true,
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: -18,
            depth: 120,
            slideShadows : false
        }
    });

    /*频道页教师*/
    new Swiper('#channelTeacher', {
        loop: true
    });

    /*频道页学员*/
    new Swiper('#channelStudent', {
        loop: true
    });

    /*考试月历*/
    new Swiper('#hotCourse', {
        freeMode: true,
        slidesPerView: 2.4,
        spaceBetween: 8
    });

    /*活动中心*/
    var tabActivityCenter = new Swiper('#activityCenter',{
        on:{
            slideChangeTransitionStart: function(){
                $(".tabs-activity-center .current").removeClass('current');
                $(".tabs-activity-center .tab-item").eq(this.activeIndex).addClass('current');
            }
        }
    });
    $(".tabs-activity-center .tab-item").on('click',function(e){
        e.preventDefault();
        $(".tabs-activity-center .current").removeClass('current');
        $(this).addClass('current');
        tabActivityCenter.slideTo($(this).index());
    });
};