$(function () {
// анимация логотипа
  TweenLite.to(".logo", 1, { ease: "hop", scale:1.2, rotation:0 });

// анимация локализаций
  TweenMax.staggerFrom(".language__item_nav", 0.5, {autoAlpha: 0}, 0.2);

// анимация элементов навигации и центрального текста при загрузке - start
  TweenLite.from(".nav__item, .main__title", 2.5, { ease: Expo.easeOut, y: -500 });
// анимация элементов навигации и центрального текста при загрузке - end

// Плавное увеличение размера элемента при ховере - start
  var $bigSizes = $('.nav__item, .language__item_nav, .fa, .icon-menu, .icon-menu_close');

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

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
