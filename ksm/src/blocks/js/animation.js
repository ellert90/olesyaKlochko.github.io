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
