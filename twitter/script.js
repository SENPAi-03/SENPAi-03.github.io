$(function(){
setInterval(function(){tadaStuff()}, 2000);
  animationStuff();
});
function tadaStuff() {
   var randNum = Math.floor( Math.random() * $('.thumb-unit').length) + 1;
  $('.thumb-unit').eq(randNum).addClass('is-active').siblings().removeClass('is-active');
}

function animationStuff(){
  
  $('.play, .sub-cta').on('click', function(){
    var $this = $(this);
    $('.image-wrapper').toggleClass('action');
    if($('.image-wrapper').hasClass('action')){
       $this.removeClass('fa-play').addClass('fa-close');
       } else {
       $this.removeClass('fa-close').addClass('fa-play');
       }
    

    
  });
}