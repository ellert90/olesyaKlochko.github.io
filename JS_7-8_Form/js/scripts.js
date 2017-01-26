
$(function () {

  var span = $('span');
  span.hide();

$('.form__input').hover(function(e) {
   e.preventDefault();
   span.hide();
   $(this).next('span').show();
}, function(e) {
   e.preventDefault();
   span.hide();

}
);

$('.form__input').focus(function(e) {
   e.preventDefault();
   span.hide();
   $(this).next().show();
});

$(".form__button").on("click", function(e) {
  e.preventDefault();
  span.show();
});


});
