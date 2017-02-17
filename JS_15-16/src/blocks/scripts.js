var btn = document.getElementById('search__button');
btn.addEventListener("click", showResults);


function showResults() {
       var searchRequest = new XMLHttpRequest();
       searchRequest.onreadystatechange = function() {
          if(searchRequest.readyState == 4 && searchRequest.status == 200) {
            var data = JSON.parse(searchRequest.responseText);
            var html= '<div class="block">';
                for (i=0; i<data.results.length; i++) {
                html = html + '<img style="width: data.results[i].media[0].gif.dims[0];  width: data.results[i].media[0].gif.dims[1];" src="' + data.results[i].media[0].gif.url + '">';
                }
            html = html+'</div>';

            document.getElementById("search__result").innerHTML = html;

          }
       };

       searchRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + document.getElementById("search__request").value + '&key=LIVDSRZULELA');
       searchRequest.send();
   }
