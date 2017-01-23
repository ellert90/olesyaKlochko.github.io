// аналогічна функції внизу - загрузка всього ДОМ
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('DOMContentLoaded');
// });
// фуннкція загружає весь ДОМ і з ним можна працювати - устарівший варіант загрузки ДОМ
// $(document).ready(function () {
  // var element = $('.wrapper');
//   console.log(element);
// });
// фуннкція загружає весь ДОМ і з ним можна працювати - новий варіант загрузки ДОМ
$(function () {
  // var $element = $('.wrapper').parent(); // якщо без ноліка - знайде елемент і передасть масивом інфо, а щоб передав як дом леемент - добавляємо ноль в квадратних скобках var element = $('.wrapper')[0];
var $element = $('.wrapper');
var $link = $('a');
  $link.addClass('red');
  $link
     .css({                // добавляє css властивості
        color: 'white',
        background: 'pink'
     })
     .attr('href', 'https://www.google.com.ua'); // добавляє атрибути

     $link.remove();// удаляє дом елементи
     $('.wrapper').append('<div>test</div>'); //динамически генирирует дом елемент - добавили дів
     $('.wrapper').append($link);//динамічно вставляє наші а, навіть якщо ми їх удалилиЮ вони в памяті є

    //  $link.on('click', function () { //добавляє метод обработчика подій on, якщо one - один раз клікнути можна
    //    console.log('клікнули мошкой на 123');
    //  });


    //  $link.hover(function () { //добавляє метод обработчика подій on, якщо one - один раз клікнути можна
    //   //  console.log('мишку навели на 123');
    //    $(this).hide(); // в обрабочику подій джиквері this -це дом елемент з яким ми працюємо, тому його треба брати в дужки і ставити знак джиквері, hide ховає елементи
    //  },
    //  function () { //добавляє метод обработчика подій on, якщо one - один раз клікнути можна
    //    console.log('мишку убрали з 123');
    //  });
    //  $link.off('click', function () { //удаляє метод обработчика подій on
    //    alert('leska');
    //  });
       $element.on('click', function(event) {
         $(this).animate({
           opacity: 0
         }, 4000, function () {
           alert('ПРИВІТ  :) ');
         })
       });


  // console.log($element);
  // console.log($link);
});

// var user = prompt("name?");
//
// function showMessage(a, user) {
//   var txt = a;
//   alert( txt + " " + user);
// }
//
// showMessage(' hello', user);
// showMessage(' how are you?', user);
// showMessage(' how old are you?', user);


// скрипт для створення списку


  // var ul = document.createElement('ul');
  // document.body.appendChild(ul);
  //
  // while (true) {
  //   var data = prompt("Введите текст для пункта списка", "");
  //
  //   if (!data) {
  //     break;
  //   }
  //
  //   var li = document.createElement('li');
  //   li.appendChild(document.createTextNode(data));
  //   ul.appendChild(li);
  // }


// var calculator = {
//   sum: function() {
//      alert(this.a + this.b);
//      return this;
//   },
//
//   mul: function() {
//      alert(this.a - this.b);
//     return this;
//   },
//
//   read: function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//     return this;
//   }
// };
//
// calculator.read().sum().mul();



// var ladder = {
//   step: 0,
//   up: function() {
//     this.step++;
//     return this;
//   },
//   down: function() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     alert( this.step );
//     return this;
//   }
// };
//
// ladder.up().up().up().up().up().down().up().down().showStep(); // 4

// var user = { firstName: "Вася" };
// var admin = { firstName: "Админ" };
//
// function sayName() {
//   alert( this.firstName );
// }
//
// user.f = sayName;
// admin.g = sayName;
//
// // this равен объекту перед точкой:
// user.f(); // Вася
// admin.g(); // Админ

// var n = +prompt('введите число, факториал')
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// console.log( factorial(n) ); // (*)


// var n = +prompt('введите число, до которого нужно посчитать сумму')
//
// function sumTo(n) {
//   var a = 1;
//
//   return ( (a + n) / 2 ) * n;
//   }
//
// console.log( sumTo(n) ); // (*)

// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

// var x = +prompt('введите число, до которого нужно посчитать сумму')
//
// function sumTo(x) {
//   if (x != 1) {
//     return x + sumTo(x - 1);
//   } else {
//     return x;
//   }
// }
//
// console.log( sumTo(x) ); // (*)


// function sayHi() {
//   alert( "Привет" );
// }
//
// alert( sayHi );


// function min( a,b ) {
//  if ( a < b) {
//    return a;
//  } else {
//    return b;
//  }
// }
//
// // var a = +prompt('a');
// // var b = +prompt('b');
// console.log(min(1,1));

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// OR
//
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }
//



// var browser;
//
// if (browser == 'IE') {
//    alert( 'О, да у вас IE!' );
// } else if (browser == 'Chrome'
//   || browser == 'Firefox'
//   || browser == 'Opera') {
//   alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
//   alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

//   // ----------------------------------- Домашка 2 часть (1-2)--------------------------
// var arrNames = [];
// var a = 0;
//
// while ( a < 5 ) {
//   var value = prompt( 'Введите любое имя' );
//   arrNames.push(value);
//   a++;
// }
//
// console.log( arrNames );
//
// var userName = prompt( 'Введите Ваше имя' );
// var txt = "It is mistake!";
//
// for (var i = 0; i < arrNames.length; ++i) {
//          if ( arrNames[i] === userName ) { txt = userName + ', вы успешно вошли!';  break;}
// }
// alert(txt);
//   // -----------------------------------


// for (var i = 0; i < 10; i++) {
//
//   if (i % 2) {
//     alert( i );
//   }
//
// }



// //   -------------Создайте код, который выводит все простые числа из интервала от 2 до 10.
// Результат должен быть: 2,3,5,7.

// nextPrime:
//   for (var i = 2; i < 10; i++) {
//
//     for (var j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//
//     alert( i ); // простое
//   }

// //   -------------Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).
// Проверка num != null – значение null означает, что посетитель нажал «Отмена»,
 // в этом случае цикл тоже нужно прекратить.

// var num;
//
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);



// //   ------------- Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }
//   Ответ:
// var i = 0;
// while (i < 3) {
//   alert( "номер " + i + "!" );
//   i++;
// }



//   ------------- При помощи цикла for выведите чётные числа от 2 до 10.
// for (var i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }
 // АБО
// var i;
//
// for (i=2; i<=10; i++) {
//   if (i % 2 !== 0) continue;
//   alert(i);
// }


//   ----------------------------------- Логічні оператори--------------------------

// var age = prompt( 'введите ваш возраст' );
//
// if (age < 14 || age > 90) {
//   alert( 'Верно' );
// } else {
//   alert( 'mistake' );
// }




//   // ----------------------------------- Домашка 2 часть (1-2)--------------------------
// var arrNames = [];
// var a = 0;
//
// while ( a < 5 ) {
//   var value = prompt( 'Введите любое имя' );
//   arrNames.push(value);
//   a++;
// }
//
// console.log( arrNames.length );
//
// var userName = prompt( 'Введите Ваше имя' );
//
// for (var i = 0; i < arrNames.length; ++i) {
//   if ( userName === arrNames[i]) {
//     alert( userName + ', Вы успешно вошли в систему!' );
//   } else {
//     alert('ошибка');
//   }
// }
//   // -----------------------------------




//   ----------------------------------- Условие в уксловии и вывод результат--------------------------
// var message = prompt('Введите логин?', '');
//
// if ( message == 'Админ' ) {
//
//   var pass = prompt( 'Введите ваш пароль:' );
//     if ( pass == 'Чёрный Властелин' ) {
//       alert('Добро пожаловать!');
//     } else if ( pass != 'Чёрный Властелин' ) {
//       alert( 'Пароль неверен' );
//     } else if (pass === null) {
//       alert( 'Вход отменён');
//     }
//
// } else  if ( message === null ) {
//   alert( 'Вход отменён' );
// } else {
//   alert( 'Я вас не знаю' );
// }
//   -----------------------------------

//   ----------------------------------- Условие проверки введенного чила и его сравнение--------------------------
// var value = prompt (' Введите любое число?' , '' );
//
// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else if (value !== 0) {
//  alert( 0 );
// }
//   -----------------------------------


//   ----------------------------------- Условие проверки названия--------------------------
//
// var officialNameJS = prompt (' Каково «официальное» название JavaScript?' , '' );
//
// if (officialNameJS == 'ECMAScript') {
//   alert( 'Верно!' );
// } else {
//   alert ( 'Не знаете? «ECMAScript»!' );
// }
//   -----------------------------------

//   -----------------------------------Домашка 1 часть (1-2)------------------------
//
// function pow(x, n) {
//      var result = x;
//
//      for (var a = 1; a < n; a++) {
//        result = result * x;
//      }
//      return result;
//    }
//
// var x = prompt('Введите x - любое целое число, которое нужно возвести в степень', '');
// var n = prompt('Введите n - степень, больше или равна 0', '');
//
//  if ( n < 0 ) {
//    alert ('Степень ' + n + ' не поддерживается, введите целую степень, большую 1');
//  } else if ( n == 0 ) {
//         console.log( 1 );
//  } else {
//         console.log( pow( x,n ) );
//      }
//   -----------------------------------
