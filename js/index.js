$(function(){
    var swiper = new Swiper('.swiper-container1', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay:true,
      });
    //  头部
    $("nav>ul>li").hover(function(){
      $(this).children("a").css({color:"#097052",fontWeight:"600"})
        $(this).find(".nav_hidden").css({height:"auto",top: "55px"})
        $(this).find(".nav_hidden").addClass("nav_top")
    },function(){
      $("nav>ul>li").children("a").css({color:"",fontWeight:"500"})
    $("nav>ul>li").find(".nav_hidden").css({height: "0px",top: "57px"})
    $("nav>ul>li").find(".nav_hidden").removeClass("nav_top")
    })

    $(".nav_hidden ul li").hover(function(){
      $(this).children("a").css({color:"#097052",fontWeight:"600"})
    },function(){
      $(".nav_hidden>ul>li").children("a").css({color:"",fontWeight:"500"})
    })
})