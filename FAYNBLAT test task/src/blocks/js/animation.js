$(function () {
// анимация логотипа
  TweenLite.to(".logo", 1, { ease: "hop", scale:1.2, rotation:0 });

// анимация локализаций
  TweenMax.staggerFrom(".language__item_nav", 0.5, {autoAlpha: 0}, 0.2);

// анимация элементов навигации и центрального текста при загрузке - start
  TweenLite.from(".nav__item, .main__title", 2.5, { ease: Expo.easeOut, y: -500 });
// анимация элементов навигации и центрального текста при загрузке - end

// Плавное увеличение размера элемента при ховере - start
  var $bigSizes = $('.nav__item, .main__play-box, .language__item_nav, .fa, .icon-menu, .icon-menu_close');

  $bigSizes.hover(
     function() {
        TweenLite.to($(this), 0.2, {scale:1.2});
     },
     function() {
        TweenLite.to($(this), 0.15, {scale:1});
     }
  );
// Плавное увеличение размера єлемента при ховере - end

// Анимация соц. иконок при загрузке - start
  TweenMax.staggerFrom(".fa-facebook, .fa-twitter, .fa-vk", 1.4, {
    scale:0.5,
    autoAlpha: 0,
    y: 200,
    scaleY: 0,
    ease: Elastic.easeOut.config(0.5, 0.4)
  }, '-=0.45');
// Анимация соц. иконок при загрузке - end


// Анимация кнопок скрола и play при загрузке - start
  TweenMax.staggerFrom(".main__scrolldown-icon, .main__play-icon", 2, {
    scale:0.5,
    autoAlpha: 0,
    y: 200,
    scaleY: 0,
    ease: Elastic.easeOut.config(0.5, 0.4)
  }, '-=0.45');
// Анимация кнопок скрола и play при загрузке - end



// плавное открывание списка локализаций - start
var $faDown = $('.fa, .language__item');
var $langHiden = $('.language__item_hiden');

$faDown.on('click', function(e) {
  e.preventDefault();
  $langHiden.slideToggle();
});
// плавное открывание списка локализаций - end

});
