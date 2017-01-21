document.getElementsByTagName('body'); // отримую body

var div = document.createElement('div'); // створюємо новий елемент div
div.className = "wrapper"; // задаємо йому клас wrapper
document.body.appendChild(div); // вставляємо div в body


var form = document.createElement('form'); // створюю новий елемент form
form.className = "myTimer"; // створюю клас для form
div.appendChild(form); // вставила форму в div

var easyTimer = {
     time_value:   createFormElem('p', 'time-value', 'txt__time-value', '', '', '00:00:00.00' ),
     start_button: createFormElem('input', 'start', 'form__button-start', 'button', 'Start', '' ),
     pause_button: createFormElem('input', 'pause', 'form__button-pause', 'button', 'Pause', '' ),
     continue_button: createFormElem('input', 'continue', 'form__button-continue', 'button', 'Continue', '' ),
     clear_button: createFormElem('input', 'clear', 'form__button-clear', 'button', 'Clear', '' )
};


function  createFormElem (elem, id, className, type, value, txt) {
  var elemTimer = document.createElement(elem); //створює елемент
  elemTimer.id = id;//добавляє імя класу
  elemTimer.className = className;//добавляє імя класу
  elemTimer.type = type; //добавляє тип
  elemTimer.value = value; //добавляє значение
  elemTimer.innerHTML =  txt; //додає текст
  form.appendChild(elemTimer); //вставляє елемент у форму
}
