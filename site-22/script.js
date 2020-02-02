			   TweenMax.set('.hexa-progress,.hexa-progress-bg',{
  xPercent:"-50%",
  yPercent:"-50%",
  left:"50%",
  top:"50%",
  opacity:1
});
TweenMax.set('.percent',{
  xPercent:"-50%",
  yPercent:"-50%",
  left:"50%",
  top:"50%",
  marginTop:5,
  opacity:1
});

function drawProgress(){
  $.each($('.pctbox'),function(index, value){
    var endPercent = $(this).data("percent");
    var hex = $(this).find('.hexa-progress path');
    var chiffre = $(this).find('.pctamount');
    var percent = {curvalue:0};

    TweenMax.fromTo(percent,2.5,{opacity:0},{opacity:1,delay:0.5,curvalue:endPercent,roundProps:"curvalue",ease: Power4.easeOut,onUpdate:function(){
      chiffre.text(percent.curvalue);
    }});
    TweenMax.fromTo(hex,2.5,{drawSVG:false},{delay:0.5,ease: Power4.easeOut,
      drawSVG:"0% "+endPercent+"%"
    });
  });
}
drawProgress();

$('#randomize').mouseup(function(){
  TweenMax.to('.hexa-progress path',0.4,{drawSVG:false, onComplete:function(){
      $.each($('.pctbox'),function(){
        $(this).data('percent',Math.random()*100);
      });
      drawProgress();
  }});
  TweenMax.to('#randomize',0.4,{scale:1,transformOrigin:"50% 50%"});
}).mousedown(function(){
  TweenMax.to('#randomize',0.4,{scale:0.95,transformOrigin:"50% 50%"});
});

TweenMax.to('#twitterlink,#randomize',1,{scale:1.2,repeat:-1,transformOrigin:"50% 50%",yoyo:true});
$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 97) {
            $("nav").addClass('shrink');
        } else {
            $("nav").removeClass("shrink");
        }
    });
});        