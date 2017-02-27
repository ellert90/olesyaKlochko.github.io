$(function() {
  (function() {
    let $links = $('.accordion__link'),
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

$(function() {
var htmlAdvantages = $('#dataAdvantages').html();
var dataAdvantages = [
{
  title: 'Power Inside',
  img: 'advantages__icon_1',
  number: '01',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
},
{
  title: 'New Technologies',
  img: 'advantages__icon_2',
  number: '02',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
},
{
  title: 'Fast Support',
  img: 'advantages__icon_3',
  number: '03',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
}
];

var content = tmpl(htmlAdvantages, {
  data: dataAdvantages
});

$('#advantages').append(content);

});

$(function() {
var htmlFullNav = $('#dataFullNav').html();
var dataFullNav = [
{
  title: 'SOCIALS',
  link_1: 'Facebook',
  link_2: 'Flickr',
  link_3: 'Twitter',
  link_4: 'Vimeo'
},
{
  title: 'LINKS',
  link_1: 'How to Write a Blog',
  link_2: 'Create a Blog in 4 Steps',
  link_3: '15 Tips to Increase Traffic',
  link_4: '20 Blog Post Ideas'
},
{
  title: 'BLOGROLL',
  link_1: 'Blogs Blog',
  link_2: 'Roll Up Roll Up',
  link_3: 'Blog Free',
  link_4: 'Wordpress Blog'
},
{
  title: 'ABOUT US',
  link_1: 'Agriculture',
  link_2: 'Harvest',
  link_3: 'Company news',
  link_4: 'Investor relations'
}
];

var content = tmpl(htmlFullNav, {
  data: dataFullNav
});

$('#full-nav').append(content);

});

$(function() {
var htmlNews = $("#dataNews").html();
var dataNews = [
{
  title: 'Advanced Machinery Helps Improve Quality',
  img: '../img/1_news.jpg',
  dateMonth: 'Jan',
  dateNumber: '23',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis',
  link: 'Read More',
  author: 'cmsmasters',
  amount: '6'

},
{
  title: 'Advanced Machinery Helps Improve Quality',
  img: '../img/2_news.jpg',
  dateMonth: 'Feb',
  dateNumber: '30',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis',
  link: 'Read More',
  author: 'cmsmasters',
  amount: '3'}
];

var content = tmpl(htmlNews, {
  data: dataNews
});

$("#news").append(content);

});

$(function() {
var htmlServices = $('#dataServices').html();
var dataServices = [
{
  title: 'Schedule Services',
  img: '../img/1_service.jpg'
},
{
  title: 'Preventive Maintence',
  img: '../img/2_service.jpg'
},
{
  title: 'Tire&Wheel Services',
  img: '../img/3_service.jpg'
},
{
  title: 'Repair Services',
  img: '../img/4_service.jpg'
}
];

var content = tmpl(htmlServices, {
  data: dataServices
});

$('#services').append(content);

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
