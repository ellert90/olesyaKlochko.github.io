$(function () {

var $link1 = $('.main__item_1');
var $link2 = $('.main__item_2');
var $link3 = $('.main__item_3');
var $text1 = $('.main__text_1');
var $text2 = $('.main__text_2');
var $text3 = $('.main__text_3');



$link1.on('click', function(e) {
  e.preventDefault();
  $('li').removeClass('main__item_active');
  $(this).addClass("main__item_active");
  $('p').removeClass('main__text_active');
  $text1.addClass("main__text_active");

});

$link2.on('click', function(e) {
  e.preventDefault();
  $('li').removeClass('main__item_active');
  $(this).addClass("main__item_active");
  $('p').removeClass('main__text_active');
  $text2.addClass("main__text_active");

});

$link3.on('click', function(e) {
  e.preventDefault();
  $('li').removeClass('main__item_active');
  $(this).addClass("main__item_active");
  $('p').removeClass('main__text_active');
  $text3.addClass("main__text_active");

});

});
