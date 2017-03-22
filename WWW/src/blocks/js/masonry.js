var btn = document.getElementById('search__button');
btn.addEventListener("click", showResults);


function showResults(e) {
       e.preventDefault();
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
