function Controller(model, view) {
    var self = this;

     view.elements.addBtn.on('click', addItem);
     view.elements.listContainer.on('click', ".todolist__item-del", removeItem);
     view.elements.listContainer.on('click', ".todolist__text", editItem);
     view.elements.listContainer.on('keypress', ".todolist__item-edit", update);

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
            var item = $(this).data('value');
            $(this).css('display','none');
            var editInp = $('#inp' + item);
            editInp.addClass('todolist__item-edit_active');
     }

    function update(ev) {

            if (ev.which == 13) {
                var inpVal = $(this).val();
                var i = $(this).data('value');
                model.data[i] = inpVal;
                view.renderList(model.data);
            }
    }

}

export {Controller};
