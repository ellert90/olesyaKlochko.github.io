function View(model) {
 var self = this;

 function init () {
   var todolist= tmpl($('#wrapper-template').html());
   $('body').append(todolist);
   self.elements = {
     input: $('.todolist__item-value'),
     addBtn: $('.todolist__item-add'),
     listContainer: $('.todolist__item-list')
   };
   self.renderList(model.data);
 }


self.renderList = function (data) {
   var list = tmpl($('#list-template').html(), {data: data});
   self.elements.listContainer.html(list);
 };

init();
}

export {View};
