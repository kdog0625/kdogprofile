$(function(){
  $('.js-modal-open1').on('click',function(){
      $('.js-modal1').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal1').fadeOut();
      return false;
  });

  $('.js-modal-open2').on('click',function(){
    $('.js-modal2').fadeIn();
    return false;
});
$('.js-modal-close').on('click',function(){
    $('.js-modal2').fadeOut();
    return false;
});

$('.js-modal-open3').on('click',function(){
  $('.js-modal3').fadeIn();
  return false;
});
$('.js-modal-close').on('click',function(){
  $('.js-modal3').fadeOut();
  return false;
});
});