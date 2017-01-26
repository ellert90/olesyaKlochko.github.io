$(function () {

var $links = $('.main__link');
var $tabs = $('.main__text');

$links.on('click', function (e) {
  e.preventDefault();
  var currentLink = $(this);
  var tabId = currentLink.attr('href');

  $links.removeClass('main__item_active');
  currentLink.addClass('main__item_active');
  

  $tabs.hide();
  $(tabId).show();

  });

});
