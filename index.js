  $(function () {
    $('.app_imgs').click(function() {
      // メニュー表示/非表示
      $(this).next('.port-sitediv').slideToggle('fast');
    });
  
    // マウスカーソルの位置（メニュー上/メニュー外）
    $('.app_imgs,.port-sitediv').hover(function(){
      over_flg = true;
    }, function(){
      over_flg = false;
    });
    
    // メニュー領域外をクリックしたらメニューを閉じる
    $('.app_imgs').click(function() {
      if (over_flg == false) {
        $('.port-sitediv').slideUp('fast');
      }
    });
  });
 