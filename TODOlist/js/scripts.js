function Model(data) {
 var self = this;

 self.data = data;

 self.addItem = function(item) {
     if (item.length === 0) {
       return;
       }

      self.data.push(item);
     return self.data;

 };

 self.removeItem = function(item) {
  var index = self.data.indexOf(item);
    if (index === -1) {
      return;
    }

  self.data.splice(index, 1);
  return self.data;
 };

// функція, яка перезаписує нове знячення в массив
 self.editItem = function(itemVal, editVal) {
  var index = self.data.indexOf(itemVal);

  self.data[index] = editVal;
  return self.data;

  };





}

function View(model) {
 var self = this;

 function init () {
   var wrapper= tmpl($('#wrapper-template').html());
   $('body').append(wrapper);
   self.elements = {
     input: $('.item-value'),
     addBtn: $('.item-add'),
     listContainer: $('.item-list')
   };
   self.renderList(model.data);
 }


self.renderList = function (data) {
   var list = tmpl($('#list-template').html(), {data: data});
   self.elements.listContainer.html(list);
 };

init();
}

function Controller(model, view) {
    var self = this;

     view.elements.addBtn.on('click', addItem);
     view.elements.listContainer.on('click', ".item-delete", removeItem);
     view.elements.listContainer.on('click', ".textToDo", editItem);


     function addItem() {
       var newItem = view.elements.input.val();
       model.addItem(newItem);
       view.renderList(model.data);
       view.elements.input.val('');

     }

     function removeItem() {
       var item = $(this).attr('data-value');
       model.removeItem(item);
       view.renderList(model.data);
     }

     function editItem() {
       var textItem = $('.textToDo'); // шукаю елемент <p>, на який клікнули
       var itemVal = textItem.text();// отримую текст з елементу <p>, на який ми клікнули

       textItem.empty();// удаляю текст в <p>

       var inputEdit = $('.item-edit'); // шукаю схований інпут
       inputEdit.addClass('item-edit_active'); // вставляю клас, щоб зробити видимим

       var editVal = view.elements.input.val();
       model.editItem(itemVal, editVal); // нове значення, як ввели в інпут, перезаписую

      //  alert('hello');
     }

}

$(function() {

  var firstToDoList = ['learn js', 'learn html', 'make coffee'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);

});
