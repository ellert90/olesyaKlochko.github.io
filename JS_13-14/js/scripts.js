'use strict';

let testInfo = [
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
];

var answers = [true, false, false, false, false, true, true, false, false, false];

localStorage.setItem('infoObj', JSON.stringify(testInfo));

let infoPage = localStorage.getItem('infoObj');

testInfo = JSON.parse(infoPage);

const page = obj => `
   <p class="form__title">Тест</p>
   <form id="form-test">
     ${obj.map(obj => `
       <div class='block'>
       <p class="form__question">${obj.title}</p>
       <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask1}</i></label>
       <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask2}</i></label>
       <label class="form__answer"><input id="form__checkbox" type='checkbox'><i>${obj.ask3}</i></label>
       </div>
       `).join('')}
       <label><input id="form__button" type='submit' value='Проверить!'></label>
   </form>
`;

let parent = document.getElementsByClassName('wrapper')[0];
parent.innerHTML = page(testInfo);

var btn = document.getElementById('form__button');
btn.addEventListener("click", showResults);


function showResults() {

  var elems = document.getElementsByTagName("input");
  var res = Array.from(elems, x => x.checked);

    if (answers === res) {
      alert('Все правильно');
    } else {
      alert('Еще раз!');
    }

}
