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
