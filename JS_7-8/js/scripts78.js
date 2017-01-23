$(function () {

var $link1 = $('.main__item_1');
var $link2 = $('.main__item_2');
var $link3 = $('.main__item_3');

var $text1 = $('.main__text_1');
var $text2 = $('.main__text_2');
var $text3 = $('.main__text_3');

$link1.on('click', function(e) {
  e.preventDefault();
  $text1.show();
  $text2.hide();
  $text3.hide();
  // $submenu.toggle();
  // $submenu.slideToggle();
});

$link2.on('click', function(e) {
  e.preventDefault();
  $text1.hide();
  $text2.show();
  $text3.hide();
  // $text2.toggle();
  // $submenu.show();
  // $submenu.toggle();
  // $submenu.slideToggle();


});

$link3.on('click', function(e) {
  e.preventDefault();
  $text1.hide();
  $text2.hide();
  $text3.show();
  // $submenu.show();
  // $submenu.toggle();
  // $submenu.slideToggle();
});

});
