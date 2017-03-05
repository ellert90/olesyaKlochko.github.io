'use strict';
// викориcтовую деструкторизатори
let [testInfo, answers] = [
  [
  {
    title: 'Столица Андорры?',
    ask1: 'Андорра',
    ask2: 'Каракас',
    ask3: 'Санта-Моника'
  },
  {
    title: 'Столица Австралии?',
    ask1: 'Сидней',
    ask2: 'Мельбурн',
    ask3: 'Канберра'
  },
  {
    title: 'Столица Турции?',
    ask1: 'Анкара',
    ask2: 'Стамбул',
    ask3: 'Анталия'
  }
],
[true, false, false, false, false, true, true, false, false]
];

//записую данні в localStorage, перетворюючи обєкт в JSON
localStorage.setItem('infoObj', JSON.stringify(testInfo));
// Беру дані з localStorage і розпарсюю їх
testInfo = JSON.parse(localStorage.getItem('infoObj'));

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
