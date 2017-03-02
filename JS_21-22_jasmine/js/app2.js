

const page = obj => `
   <p class="title">Тест</p>
   <form id="form-test">
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

  try {
  module.exports = page;

  } catch (e) {}
