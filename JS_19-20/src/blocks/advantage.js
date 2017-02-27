$(function() {
var htmlAdvantages = $('#dataAdvantages').html();
var dataAdvantages = [
{
  title: 'Power Inside',
  img: 'advantages__icon_1',
  number: '01',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
},
{
  title: 'New Technologies',
  img: 'advantages__icon_2',
  number: '02',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
},
{
  title: 'Fast Support',
  img: 'advantages__icon_3',
  number: '03',
  desc: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique',
  link: 'Read More'
}
];

var content = tmpl(htmlAdvantages, {
  data: dataAdvantages
});

$('#advantages').append(content);

});
