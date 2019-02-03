/*客服*/
$('.fixed-right div').mouseover(function () {
        var index = $(this).index();
        $(this).siblings().removeClass('fix-a');
        $(this).addClass('fix-a');
    }
)
$('.kefu').mouseover(function () {
    $(this).children('img').attr('src', 'img/kefua.png')
})
$('.kefu').mouseout(function () {
    $(this).children('img').attr('src', 'img/kefu.png');
    $(this).removeClass('fix-a');
})
$('.yuyue').mouseover(function () {
    $(this).children('img').attr('src', 'img/yuyuea.png')
})
$('.yuyue').mouseout(function () {
    $(this).children('img').attr('src', 'img/yuyue.png');
    $(this).removeClass('fix-a');
})
$('.pay').mouseover(function () {
    $(this).children('img').attr('src', 'img/zhifua.png')
})
$('.pay').mouseout(function () {
    $(this).children('img').attr('src', 'img/zhufu.png');
    $(this).removeClass('fix-a');
})
//合作伙伴
var nowimg = 0;
var timer = null;
// 克隆第一张图片，并且放到最后
$(".box-in li:first").clone().appendTo('.box-in')
// 右按钮业务
$(".you").click(rightFunc)

function rightFunc() {

    if (nowimg < 1) {
        nowimg++
        $(".box-in").animate({"left": nowimg * -1220}, 2000)
    } else {
        nowimg = 0
        $(".box-in").animate({"left": 2 * -1220}, 2000, function () {
            $(".box-in").css("left", 0)

        })
    }
    $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')

}

function healthyConsult(){
    window.open('healthyConsult.html')
    //window.location.href='healthyConsult.html'
}

// 左按钮业务
$(".zuo").click(function () {
    if (nowimg > 0) {
        nowimg--
        $(".box-in").animate({"left": nowimg * -1220}, 1000)
    } else {
        nowimg = 1
        $(".box-in").css({"left": 2 * -1220}, 1000)
        $(".box-in").animate({"left": nowimg * -1220}, 1000)
    }
    $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
})
// 小圆点业务
$(".circle span").click(function () {
    nowimg = $(this).index()
    $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
    $(".box-in").animate({"left": nowimg * -1220}, 1000)
});

// 自动轮播

timer = setInterval(rightFunc, 3000)

$(".box").mouseenter(function () {
    clearInterval(timer)
})
$(".box").mouseout(function () {
    clearInterval(timer)
    timer = setInterval(rightFunc, 3000)
})

//健康资讯
$('#notice-tit li').click(function () {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    var index = $(this).index();  // 获取当前点击元素的下标
    // alert(index);
    $('#notice-con>div').hide();
    $('#notice-con>div').eq(index).show();
})

//服务
$(".fuwu li").click(function () {
    //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    $(this).addClass("activef").siblings().removeClass("activef");
    //获取选中元素的下标
    var index = $(this).index();
    $(this).parent().siblings().children().eq(index).addClass("activef")
        .siblings().removeClass("activef");
});
//banner
$(".js-silder").silder({
    auto: true,//自动播放，传入任何可以转化为true的值都会自动轮播
    speed: 20,//轮播图运动速度
    sideCtrl: false,//是否需要侧边控制按钮
    bottomCtrl: true,//是否需要底部控制按钮
    defaultView: 0,//默认显示的索引
    interval: 3000,//自动轮播的时间，以毫秒为单位，默认3000毫秒
    activeClass: "activeb",//小的控制按钮激活的样式，不包括作用两边，默认active
});
//导航
i = $(this).index();
$('.reply').hover(function () {

    $(this).children('.list').show();
    $(this).children('.navList').addClass('active');
}, function () {
    $(this).children('.list').hide();
    $(this).children('.navList').removeClass('active');
})
