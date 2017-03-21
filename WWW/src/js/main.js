$(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });




    });

$(function() {
var htmlPartner = $('#dataPartner').html();
var dataPartner = [
{
  img: 'img/BrHu.jpg',
  icon: 'icon-icon_1',
  desc: 'Based in Chicago. I love playing tennis and loud music.',
  name: 'Bradley Hunter'
},
{
  img: 'img/LuMa.jpg',
  icon: 'icon-icon_2',
  desc: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
  name: 'Lucas Marsha'
},
{
  img: 'img/HeWa.jpg',
  icon: 'icon-icon_3',
  desc: 'I am a happy person that loves cats and climbing on mountains.',
  name: 'Heather Walker'
},
{
  img: 'img/BrHuG.jpg',
  icon: 'icon-icon_4',
  desc: 'Based in Chicago. I love playing tennis and loud music.',
  name: 'Bradley Hunter'
}
];

var content = tmpl(htmlPartner, {
  data: dataPartner
});

$("#partner").append(content);

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
