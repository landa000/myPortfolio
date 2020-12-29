// main_module.js

(function($){

  var headBox = $('#headBox');
  var introBox = $('#introBox');
  var mainBox = $('#mainBox');
  var profileBox = $('#profileBox');

  var project01 = $('#project01');
  var project02 = $('#project02');
  var other = $('#other_project');
  var footBox = $('#footBox');

// ================================

  headBox.load('./headBox.html');
  introBox.load('./introBox.html');
  mainBox.load('./mainBox.html');
  profileBox.load('./profileBox.html');
  project01.load('./project01.html');
  project02.load('./project02.html');
  other.load('./other_project.html');
  footBox.load('./footBox.html');

})(jQuery);