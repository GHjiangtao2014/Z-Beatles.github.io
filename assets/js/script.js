// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();
        
        var system ={win : false,mac : false,xll : false};
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        //判断平台类型
        if(system.win||system.mac||system.xll){
            if ($(window).scrollTop() > 70)
            {
                $('.site-header').addClass('site-header-nav-scrolled');
            } else {
                $('.site-header').removeClass('site-header-nav-scrolled');
            }
        }else{
               var a=document.getElementById("row");//获取父节点
               var b=document.getElementById("sidebar-post-nav");//获取需要删除的子节点
               var x=document.getElementById("link");//获取父节点
               var y=document.getElementById("icon");
               a.parentNode.removeChild(b);
               x.parentNode.removeChild(y);
            //如果是手机访问则将顶栏移除界面
            if ($(window).scrollTop() > 40) 
            {
                $('.site-header').addClass('site-header-nav-scrolled-mt');
            } else {
                $('.site-header').removeClass('site-header-nav-scrolled-mt');
            }
        }
 });
};

$( document ).ready(function() {
    windowScroll();
});
