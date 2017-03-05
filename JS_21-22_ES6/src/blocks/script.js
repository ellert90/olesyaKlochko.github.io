//описую шаблон, який ставить HTML фрагмент на сторінку з використанням зворотньої кавички
const page = obj => `
<p class="title">Тест</p>
<form id="form">
${obj.map(obj => `
  <div class='form__block'>
  <p class="form__question">${obj.title}</p>
  <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask1}</i></label>
  <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask2}</i></label>
  <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask3}</i></label>
  </div>
  `).join('')}
  <label><input id="form__button" type='submit' value='Проверить!'></label>
  </form>
  `;
// ставимо шаблон на строніку
let parent = document.getElementsByClassName('wrapper')[0];
 parent.innerHTML = page(testInfo);

// ставимо колбек на клік мишкою по кнопці перевірити результат
let btn = document.getElementById('form__button');
btn.addEventListener("click", function(event) {
showResults();// показуємо результат
event.preventDefault(); // так як у нас ставиться форма, зробимо щоб сторінка не перегружалася
});

// реалізація модлаьного вікна
let btnTestOk = document.getElementsByClassName('test-modal__click')[0];
let resultsWindow = document.getElementsByClassName('test-modal')[0];
    btnTestOk.addEventListener("click", function() {
    resultsWindow.setAttribute('style', 'display: none;');
});
let testResultMassage = document.getElementsByClassName("test-message")[0];

// функція, яка показує результат
function showResults() {
  let elems = document.getElementsByTagName("input");
  let res = Array.from(elems, x => x.checked);
  let tmp = answers.length;

  var result = compareArr(answers, res, tmp);

     if(result) {
        testResultMassage.innerHTML = 'Поздравляю! Пора ехать в путешествие!!! :)';
    } else {
        testResultMassage.innerHTML = 'Надо учить географию!';
  }

resultsWindow.setAttribute('style', 'display: block;');

}

//функція, яка порівнює два масиви
let compareArr = (arr1, arr2, arrayLength) => {
  for (let i = 0; i < arrayLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
