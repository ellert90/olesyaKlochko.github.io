// ставимо колбек на клік мишкою по кнопці перевірити результат
let btn = document.getElementById('order__button');
btn.addEventListener("click", function(event) {
showResults();// показуємо результат
event.preventDefault(); // так як у нас ставиться форма, зробимо щоб сторінка не перегружалася
});

// реалізація модального вікна
let btnTestClose = document.getElementsByClassName('order-window__click')[0];
let resultsWindow = document.getElementsByClassName('order-window')[0];
    btnTestClose.addEventListener("click", function(event) {
    resultsWindow.setAttribute('style', 'display: none;');
    event.preventDefault();
});


// функція, яка показує вікно для відправки замовлення
function showResults() {
resultsWindow.setAttribute('style', 'display: block;');

}
