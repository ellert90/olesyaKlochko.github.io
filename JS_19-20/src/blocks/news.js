$(function() {
var htmlNews = $("#dataNews").html();
var dataNews = [
{
  title: 'Advanced Machinery Helps Improve Quality',
  img: '../img/1_news.jpg',
  dateMonth: 'Jan',
  dateNumber: '23',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis',
  link: 'Read More',
  author: 'cmsmasters',
  amount: '6'

},
{
  title: 'Advanced Machinery Helps Improve Quality',
  img: '../img/2_news.jpg',
  dateMonth: 'Feb',
  dateNumber: '30',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis Cum sociis natoque penatibus et magnis',
  link: 'Read More',
  author: 'cmsmasters',
  amount: '3'}
];

var content = tmpl(htmlNews, {
  data: dataNews
});

$("#news").append(content);

});
