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

var btn = document.getElementById('search__button');
btn.addEventListener("click", showResults);


function showResults() {
       var word = document.getElementById("search__request").value;
              // Удаляем сетку картинок
       document.getElementById('grid').remove();
             // Новый AJAX запрос
       var searchRequest = new XMLHttpRequest();
       searchRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + word + '&key=LIVDSRZULELA');
       searchRequest.send();
       searchRequest.onreadystatechange = function() {
          if(searchRequest.readyState == 4 && searchRequest.status == 200) {
            var dataGrid = JSON.parse(searchRequest.responseText);
            console.log(dataGrid);
            // Вставка картинок через шаблоны
            $(function() {
             var htmlGrid = $('#dataGrid').html();
             var content  = tmpl(htmlGrid, {
                     data: dataGrid
            });
            $('#gridContainer').append(content);

            // Инициализация Масонри, после загрузки изображений
               var $container = $('#grid');
               $container.imagesLoaded( function() {
               $container.masonry({
                // options
                   itemSelector: '.grid-item',
                   columnWidth: '.persent-size',
                   percentPosition: true,
                   gutter: 10
                   });
                });
           });
          }
       };


}


function showImgs(word) {
        word = 'cat';
        var searchRequest = new XMLHttpRequest();
        searchRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + word + '&key=LIVDSRZULELA');
        searchRequest.send();
        searchRequest.onreadystatechange = function() {
           if(searchRequest.readyState == 4 && searchRequest.status == 200) {
             var dataGrid = JSON.parse(searchRequest.responseText);
             console.log(dataGrid);

             $(function() {
             var htmlGrid = $('#dataGrid').html();
             var content = tmpl(htmlGrid, {
               data: dataGrid
             });
             $('#gridContainer').append(content);

             var $container = $('#grid');
             // Инициализация Масонри, после загрузки изображений
             $container.imagesLoaded( function() {
             $container.masonry({
                 // options
                 itemSelector: '.grid-item',
                 columnWidth: '.persent-size',
                 percentPosition: true,
                 gutter: 5
                 });
             });

               });


           }
        };



    }

showImgs();

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
