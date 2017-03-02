

let parent = document.getElementsByClassName('wrapper')[0];
parent.innerHTML = page(testInfo);

var btn = document.getElementById('form__button');
btn.addEventListener("click", showResults);


function showResults() {

  var elems = document.getElementsByTagName("input");
  var res = Array.from(elems, x => x.checked);
  var tmp = answers.length;

  var result = compareArr(answers, res, tmp);

     if(result) {
        alert('Молодец! Все правильно! Пора ехать в путешествие!');
    } else {
       alert('Надо учить географию!!!!');
  }
}
