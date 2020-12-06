$(function () {

  // ドロップダウンリスト
  $("#navi").children("li").on("mouseover mouseout", function () {
    $(this).children("ul").stop().slideToggle(300);
  });

  // ナビ　開閉ボタン切替
  $(".header__nav-item").on("mouseover mouseout", function(){
    $(this).children(".accordion >a").stop().toggleClass("on");
  });


  // ハンバーガーボタン　切替
  $(".is-hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    $(".header__nav").toggleClass("open");
    $("body").toggleClass("is-open");
    
  });

});
