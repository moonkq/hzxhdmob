
var siteId = '13';  // 站点ID
var contentId1 = '680122'; // 寒假班领书ID
var contentId2 = '766089';  // 寒假班报名ID

$(function() {
    $('#btn-submit').on('click', function(e) {
        var sucFun = function(){
            $('.succeed').show();
        }
        validateLinstenOne('.testform', 'http://zyadmin.xhd.cn' , true , sucFun, contentId1);
        e.preventDefault();
    });

    // 报名成功弹窗
    $('.succeed .alert-icon').click(function(){
        $('.succeed').hide();
    });

    $('.select-two .current').click(function(){
        $('.select-two').addClass('open');
    });
    $('.select-two .option').click(function(){
        $('.select-two').removeClass('open');
        $('.select-two .current').text($(this).text());
    });
    $('.select-one .current').click(function(){
        $('.select-one').addClass('open');
    });
    $('.select-one .option').click(function(){
        $('.select-one').removeClass('open');
        $('.select-one .current').text($(this).text());
    });

    $('#submitBtn2').on('click', function(e) {
        var sucFun = function(){
            var msgSuccess = "恭喜，您已预约成功！";
            var msg = "我们会在1个工作日内联系您！";
            diyAlert(msgSuccess, msg);
            $('.yuyue').fadeOut();
        }
        validateLinstenTwo('.form-two', 'http://zyadmin.xhd.cn' , true , sucFun, contentId2);
        e.preventDefault();
    });
});

function charToInt(unames) {
    if (unames == null || unames == "") {
        return "";
    }
    var arr = {};
    var rtn = "";
    arr[0] = unames.charAt(0);
    rtn = arr[0].charCodeAt();
    for (var i = 1; i < unames.length; i++) {
        arr[i] = unames.charAt(i);
        rtn = rtn + "," + arr[i].charCodeAt();
    }
    return rtn;
}

function submitLinstenOne(domain, hasContent, from, sucFun, name, phoneNo, contentId) {
    var url = domain + "/listen.jspx?callbak=?&";
    var param = "";
    if (hasContent) {
        param += "contentId=" + contentId + "&";
    } else {
        param += "contentId=557901&";
    }

    param += "name=" + charToInt(name) + "&";
    param += "phoneNo=" + phoneNo + "&";
    param += "siteId="+ siteId;

    url += param;
    $.getJSON(url, function(data) {
        if (data.success) {
            if (sucFun != null && typeof sucFun == 'function') {
                sucFun();
            } else {
                $('.succeed').show();
            }
        } else {
            if (data.status == 3) {
                $('.succeed').show();
            } else {
                $('.succeed').show();
            }
        }
    });
};

function submitLinstenTwo(domain, hasContent, from, sucFun, name, phoneNo, contentId) {
    var url = domain + "/listen.jspx?callbak=?&";
    var param = "";
    if (hasContent) {
        param += "contentId=" + contentId + "&";
    } else {
        param += "contentId=557901&";
    }
    param += "name=" + charToInt(name) + "&";
    param += "phoneNo=" + phoneNo + "&";
    param += "siteId="+ siteId;
    url += param;
    $.getJSON(url, function(data) {
        if (data.success) {
            if (sucFun != null && typeof sucFun == 'function') {
                sucFun();
            } else {
                diyAlert("您已经预约，我们会尽快与您取得联系！");
            }
        } else {
            if (data.status == 3) {
                diyAlert("您已经预约，我们会尽快与您取得联系！");
            } else {
                diyAlert("预约提交失败，请重试！");
            }
        }
    });
}



function validateLinstenOne(constiner, domain, hasContent, sucFun, contentId) {
    var boo = true;
    var tip = "以下原因导致提交失败";
    var msgName = "";
    var msgPhone = "";
    var name = $(constiner).find("input[name='name']").val();
    var phoneNo = $(constiner).find("input[name='phoneNo']").val();


    if (isEmpty(name) || eq(name, $(constiner).find("input[name='name']").attr("val"))) {
        msgName += "您的名字不能为空!";
        boo = false;
    } else if (!rightReg(name, /^[\u0391-\uFFE5]+$/)) {
        msgName += "您的名字只能是中文名!";
        boo = false;
    }
    if (isEmpty(phoneNo) || eq(phoneNo, $(constiner).find("input[name='phoneNo']").attr("val"))) {
        msgPhone += "您的电话不能为空!";
        boo = false;
    } else if (!rightReg(phoneNo, /^1(3|4|5|6|7|8|9)\d{9}$/)) {
        msgPhone += "您的电话格式不正确!";
        boo = false;
    }

    if (!boo) {
        diyAlert(tip, msgName, msgPhone);
    } else {
        submitLinstenOne(domain, hasContent, null, sucFun, name, phoneNo, contentId);
    }
};

function validateLinstenTwo(constiner, domain, hasContent, sucFun, contentId) {
    var boo = true;
    var tip = "以下原因导致提交失败";
    var msgName = "";
    var msgPhone = "";
    var msgCourse = "";
    var msgCity = "";
    var name = $(constiner).find("input[name='name']").val();
    var phoneNo = $(constiner).find("input[name='phoneNo']").val();
    var city = $("#cityName").text();
    var course = $(constiner).find("input[name='courses']:checked").val();


    if (isEmpty(name) || eq(name, $(constiner).find("input[name='name']").attr("val"))) {
        msgName += "您的名字不能为空!";
        boo = false;
    } else if (!rightReg(name, /^[\u0391-\uFFE5]+$/)) {
        msgName += "您的名字只能是中文名!";
        boo = false;
    }
    if (isEmpty(phoneNo) || eq(phoneNo, $(constiner).find("input[name='phoneNo']").attr("val"))) {
        msgPhone += "您的电话不能为空!";
        boo = false;
    } else if (!rightReg(phoneNo, /^1(3|4|5|6|7|8|9)\d{9}$/)) {
        msgPhone += "您的电话格式不正确!";
        boo = false;
    }

    if(course === '课程'){
        msgCourse += "请选择课程!";
        boo = false;
    }

    if(city === '城市'){
        msgCity += "请选择城市!";
        boo = false;
    }

    name = '姓名：' + name + '-- 课程：' + course +  "--" + "城市：" + city;

    if (!boo) {
        diyAlert(tip, msgName, msgPhone, msgCourse, msgCity);
    } else {
        submitLinstenTwo(domain, hasContent, null, sucFun, name, phoneNo, contentId);
    }
};



function rightReg(str, reg) {
    var r = new RegExp(reg);
    return r.test(str);
}

function eq(str1, str2) {
    return str1 == str2;
}

function isEmpty(str) {
    return str == null || str == "";
}

function diyAlert(){
    var _html = '<div id="mask-layer"><div id="alert-box"><div id="alert-head"><h4>消息</h4><span id="alert-icon">×</span></div><ul id="alert-msg"></ul><input id="alert-btn" type="button" value="确定" /></div></div>';
    $("body").append(_html);
    for(var i = 0; i < arguments.length; i++){
        $('#alert-msg').append('<li>' + arguments[i] + '</li>');
    }

    GenerateCss();

    $('#alert-btn, #alert-icon').click(function(){
        $("#mask-layer").remove();
    });
}

function GenerateCss(){
    $("#mask-layer").css({width: "100%", height: "100%", position: "fixed", zIndex: "99999", top: "0", left: "0", backgroundColor: "rgba(0, 0, 0, 0.6)"});
    $("#alert-box").css({position: "absolute", width: "80%", backgroundColor: "#fff", boxShadow: "2px 2px 5px #333", borderRadius: "10px"});
    $("#alert-head").css({height: "40px", lineHeight: "40px", fontSize: "16px", fontWeight: "bold", padding: "0 16px 0 20px", backgroundColor: "#eee", borderRadius: "10px 10px 0 0", borderBottom: "2px solid #2a7dee"});
    $("#alert-head > h4").css({float: "left", margin: 0, color: "#000"});
    $("#alert-icon").css({float: "right", color: "#449cf6"});
    $("#alert-msg").css({padding: "20px", margin: 0, borderBottom: "1px solid #ddd"});
    $("#alert-msg li").css({listStyle: "none", fontSize: "14px", color: "#f00", lineHeight: "24px", textAlign: "center"});
    $("#alert-msg li:first()").css({fontSize: "16px", color: "#000", marginBottom: "5px"});
    $("#alert-btn").css({width: "100%", height: "40px", fontSize: "16px", fontWeight: "bold", color: "#449cf6", border: "none", borderRadius: "10px", backgroundColor: "#fff"});

    var _widht = document.documentElement.clientWidth;
    var _height = document.documentElement.clientHeight;
    var boxWidth = $("#alert-box").width();
    var boxHeight = $("#alert-box").height();
    $("#alert-box").css({top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px"});
}
