// 03introBox.js

(function($){

  var introBox = $('#introBox');
  var enterBtn = introBox.find('button');
  var body = $('body');
  body.css({overflow:'hidden'});

  enterBtn.on('click',function(e){
    e.preventDefault();
    introBox.fadeOut();
    body.removeAttr('style');
  });

})(jQuery);