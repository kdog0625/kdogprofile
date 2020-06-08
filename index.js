  $(function () {
    $('.menu-toggle').click(function() {
      // メニュー表示/非表示
      $(this).next('.sidebar-nav').slideToggle('fast');
    });
  
    // マウスカーソルの位置（メニュー上/メニュー外）
    $('.menu-toggle,.sidebar-nav').hover(function(){
      over_flg = true;
    }, function(){
      over_flg = false;
    });
    
    // メニュー領域外をクリックしたらメニューを閉じる
    $('.menu-toggle').click(function() {
      if (over_flg == false) {
        $('.sidebar-nav').slideUp('fast');
      }
    });
  });
 