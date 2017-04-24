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

// ставимо колбек на клік мишкою по кнопці перевірити результат
let btn = document.getElementById('order__button');
btn.addEventListener("click", function(event) {
showResults();// показуємо результат
event.preventDefault(); // так як у нас ставиться форма, зробимо щоб сторінка не перегружалася
});

// реалізація модального вікна
let btnTestClose = document.getElementsByClassName('order-window__click')[0];
let resultsWindow = document.getElementsByClassName('order-window')[0];
    btnTestClose.addEventListener("click", function(event) {
    resultsWindow.setAttribute('style', 'display: none;');
    event.preventDefault();
});


// функція, яка показує вікно для відправки замовлення
function showResults() {
resultsWindow.setAttribute('style', 'display: block;');

}

$(function() {
var htmlServices = $('#dataServices').html();
var dataServices = [
{
  title: 'Air delivery of cargoes',
  img: 'img/avia_freight.jpg',
  desc: 'Airfreight cargo service from KSM Alliance - is the delivery of cargoes to / from more than 200 countries in just 5 days arranged by own agents worldwide.',
  link: 'services.html'
},
{
  title: 'Container cargo shipping',
  img: 'img/sea_freight.jpg',
  desc: 'We provide services of FCL (full container load) and LCL (less than container load) goods delivery by sea with main discharges in Gdynia, Gdansk, Hamburg, Copper etc.',
  link: 'services.html'
},
{
  title: 'International truck delivery',
  img: 'img/truck_freight.jpg',
  desc: 'We provide direct shipping service for truck cargo transportation within Europe and CIS countries, delivery via warehouses and delivery as part of multimodal transportations.',
  link: 'services.html'
},
{
  title: 'Trading and consulting',
  img: 'img/china_goods.jpg',
  desc: 'We will help you to buy goods in EU, UAE or China, arrange payment, find acceptable logistics solution and prepare shipping documents according to customs demands.',
  link: 'services.html'
},
{
  title: 'Logistics and customs',
  img: 'img/custom_clearence.jpg',
  desc: 'Because of good number of partner`s warehouses in Europe we can arrange consolidation, repacking and labeling services, cross-docking and clearance in EU and Ukraine.',
  link: 'services.html'
},
{
  title: 'Special cargo transportations',
  img: 'img/service_agent.jpg',
  desc: 'Our company operates not only with general cargoes, but also with dangerous goods, human remains, personal effects, exhibition goods, AOG and others.',
  link: 'services.html'
}
];

var content = tmpl(htmlServices, {
  data: dataServices
});

$('#main-services').append(content);

});

jQuery(document).ready(function ($) {

    var jssor_1_SlideshowTransitions = [
      {$Duration:1200,$Opacity:2}
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 960);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
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
