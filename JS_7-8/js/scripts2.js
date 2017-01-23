$(function () {

var $links = $('.menu a');

$links.on('click', function(e) {
  var $submenu = $(this).siblings('.submenu'); // siblings метод який дозвонляє шукати сусідні елементи у ДОМ
  e.preventDefault();
  console.log('$submenu', $submenu);
  // $submenu.show();
  // $submenu.toggle();
  $submenu.slideToggle();
});



});
