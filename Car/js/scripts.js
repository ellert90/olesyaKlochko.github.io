// fps frames per second


// js animation
// function slideLeft(d, duration, slideLength) {
//   var leftPosition = parseInt(d.style.left) || 0;
//   var time = 0;
//   var fps = 50;
//
// var interval = setInterval(function() {
//   if (time > 1000){
//     clearInterval(interval);
//   }
//     leftPosition += slideLength/(duration/fps);
//     time += duration/fps;
//     d.style.left = leftPosition + 'px';
//   }, duration/fps);
// }
//
// var box = document.querySelector(".jx-box");
//
// box.addEventListener('click', function() {
//   slideLeft(box, 1000, 200);
// });

//jquery

$('.jquery-box').on('click', function() {
  $(this).animate({
  left: '+=420',
  opacity: 0
}, 1500, 'easeInElastic');
});

//css animation
// $('.css-box').on('click', function() {
//   $(this).addClass('css-box-animated');
// });
