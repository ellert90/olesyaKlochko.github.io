var body = document.getElementsByTagName('body');

var div = document.createElement('div');
div.className = "wrapper";
document.body.appendChild(div);

var h1 = document.createElement('h1');
h1.className = "wrapper__title";
h1.innerHTML = 'Тест по программированию!';

var form = document.createElement('form');
form.className = "wrapper__form";

createPage();

function createPage() {
  div.appendChild(h1);
  div.appendChild(form);
}


var  elemsForm  =  {
   question_0:  {
     ask: "1. Вопрос №1 ",
     answer1:  'Вариант ответа №1',
     answer2:  'Вариант ответа №2',
     answer3:  'Вариант ответа №3',
     true_answer:  'Вариант ответа №2'
 },
 question_1: {
   ask: "2. Вопрос №2",
   answer1: 'Вариант ответа №1',
   answer2: 'Вариант ответа №2',
   answer3: 'Вариант ответа №3',
   true_answer: 'Вариант ответа №1'
 },
 question_2: {
    ask: "3. Вопрос №3",
    answer1: 'Вариант ответа №1',
    answer2: 'Вариант ответа №2',
    answer3: 'Вариант ответа №3',
    true_answer: 'Вариант ответа №3'
  },
  button: 'Проверить мои результаты'
};

var page =
  [
{
  ask1: createFormElem('p', "form__title-question", '', '', elemsForm.question_0.ask),
  check1: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_0.answer1),
  answer1: createFormElem('label', 'form__answer', '', '', elemsForm.question_0.answer1),
  check2: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_0.answer2),
  answer2: createFormElem('label', 'form__answer', '', '', elemsForm.question_0.answer2),
  check3: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_0.answer3),
  answer3: createFormElem('label', 'form__answer', '', '', elemsForm.question_0.answer3)
},
{
  ask2: createFormElem('p', "form__title-question", '', '', elemsForm.question_1.ask),
  check1: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_1.answer1),
  answer1: createFormElem('label', 'form__answer', '', '', elemsForm.question_1.answer1),
  check2: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_1.answer2),
  answer2: createFormElem('label', 'form__answer', '', '', elemsForm.question_1.answer2),
  check3: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_1.answer3),
  answer3: createFormElem('label', 'form__answer', '', '', elemsForm.question_1.answer3)
},
{
  ask3: createFormElem('p', "form__title-question", '', '', elemsForm.question_2.ask),
  check1: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_2.answer1),
  answer1: createFormElem('label', 'form__answer', '', '', elemsForm.question_2.answer1),
  check2: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_2.answer2),
  answer2: createFormElem('label', 'form__answer', '', '', elemsForm.question_2.answer2),
  check3: createFormElem('input', 'form__checkbox', 'checkbox', '', elemsForm.question_2.answer3),
  answer3: createFormElem('label', 'form__answer', '', '', elemsForm.question_2.answer3),
},
  { p: createFormElem('p', '' , '' , '', ''),
   button: createFormElem('input', 'form__button', 'submit', elemsForm.button)
}
];


function  createFormElem (elem, className, type, value, txt) {
  var question = document.createElement(elem); //створює елемент
  question.className = className;//добавляє імя класу
  question.type = type; //добавляє тип
  question.value = value; //добавляє значение
  question.innerHTML =  txt; //додає текст
  form.appendChild(question); //вставляє елемент у форму
}




// длину массива краще ивнести за цикл і присвоїти змінну, і вже в циклі порівнювати зі змінною


// var questions = [
//       {
//           topic: "The Q1",
//           ask: "How 1",
//           answers: [{title: 'Answer 1', value: 'true'}, {title: 'Answer2', value: 'false'}, {title: 'Answer3', value: 'false'}],
//           },
//       {
//           topic: "The Q2",
//           ask: "How 2",
//           answers: [{title: 'Answer 1', value: 'true'}, {title: 'Answer2', value: 'false'}, {title: 'Answer3', value: 'false'}],
//           },
//         {
//             topic: "The Q3",
//             ask: "How 3",
//             answers: [{title: 'Answer 1', value: 'true'}, {title: 'Answer2', value: 'false'}, {title: 'Answer3', value: 'false'}],
//           }
//  ];
