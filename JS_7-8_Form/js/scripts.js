
$(function () {

  var span = $('span');
  span.hide();

$('.form__input').hover(function(e) {
   e.preventDefault();
   span.hide();
   $(this).next('span').show();
});

$('.form__input').focus(function(e) {
   e.preventDefault();
   span.hide();
   $(this).next('span').show();
});

$(".form__button").on("click", function(e) {
  e.preventDefault();
  span.show();
});


});
