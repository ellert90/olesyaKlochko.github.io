$(function() {
  (function() {
    var $links = $('.accordion__link'),
        $icons = $('.accordion__icon'),
        $content = $('.accordion__content');

    $links.hover(function() {
      $(this).find('.accordion__icon').addClass('accordion__icon_hover');
    }, function() {
      $(this).find('.accordion__icon').removeClass('accordion__icon_hover');
    });

    $links.click(function(e) {
      e.preventDefault();

      if ($(this).hasClass('accordion__link_active')) {

        $(this).removeClass("accordion__link_active");
        $(this).siblings('.accordion__content').stop().slideUp(300);
        $icons.removeClass('accordion__icon_active');
        $icons.removeClass("fa-minus").addClass("fa-plus");

      } else {
        $icons.removeClass('accordion__icon_active');
        $(this).find('.accordion__icon').addClass('accordion__icon_active');

        $icons.removeClass("fa-minus").addClass("fa-plus");
        $(this).find('.accordion__icon').removeClass("fa-plus").addClass("fa-minus");

        $links.removeClass("accordion__link_active");
        $(this).addClass("accordion__link_active");

        $content.stop().slideUp(300);
        $(this).siblings('.accordion__content').stop().slideDown(300);
      }
    });
  })();

});

$(function () {
  //
  // $('.contact').addClass('animated fadeInDown');
  $('.advantages__item').addClass('animated fadeInLeft');
  // $('.nav-country').addClass('animated fadeInRight');
  //
  //
  //
  // TweenLite.to(".logo", 2, { ease: "hop", scale:1.2, rotation:0 });
  // TweenMax.staggerFrom(".order", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
  //



  var $links = $('.nav-country__link');
  var $tabs = $('.main__text');

  $links.on('click', function (e) {
    e.preventDefault();
    var currentLink = $(this);
    var tabId = currentLink.attr('href');
    $('.main-info').hide();

  $('.country__container').addClass('country__container_active');

    // $links.removeClass('main__item_active');
    // currentLink.addClass('main__item_active');


    $tabs.hide();
    $(tabId).show();

    });



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
