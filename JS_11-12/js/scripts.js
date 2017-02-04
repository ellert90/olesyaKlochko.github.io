$(function() {
// my own plagin Carusel
$('carousel-list').carusel();

// my shablon
var html = $('#top_it').html();
var itCompanies = [
{
  img: 'img/ciklum.png',
  title: 'Ciklum',
  description: 'Сиклум - глобальная компания, с датскими корнями, основанная в 2002 году, работающая в сфере аутсорсинга разработки программного обеспечения.',
  site: 'www.ciklum.com'
},
{
  img: 'img/epam.png',
  title: 'EPAM',
  description: 'Engineering is in our DNA. Since 1993, we’ve helped the world’s leading companies imagine, design, engineer, and deliver software that changes the world. Today, we are more than developers. Our offices are digital laboratories.',
  site: 'www.epam.com'
},
{
img: 'img/cogn.png',
title: 'Cogniance',
description: 'Cogniance provides services in the design, development, testing, implementation and support of software systems in the international market, and specializes in the development of innovative projects for businesses of all sizes.',
site: 'www.cogniance.com'
}
];

var content = tmpl(html, {
  data: itCompanies
});

$('body').append(content);

});
