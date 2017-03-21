$(function() {
var htmlPartner = $('#dataPartner').html();
var dataPartner = [
{
  img: 'img/BrHu.jpg',
  icon: 'icon-icon_1',
  desc: 'Based in Chicago. I love playing tennis and loud music.',
  name: 'Bradley Hunter'
},
{
  img: 'img/LuMa.jpg',
  icon: 'icon-icon_2',
  desc: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
  name: 'Lucas Marsha'
},
{
  img: 'img/HeWa.jpg',
  icon: 'icon-icon_3',
  desc: 'I am a happy person that loves cats and climbing on mountains.',
  name: 'Heather Walker'
},
{
  img: 'img/BrHuG.jpg',
  icon: 'icon-icon_4',
  desc: 'Based in Chicago. I love playing tennis and loud music.',
  name: 'Bradley Hunter'
}
];

var content = tmpl(htmlPartner, {
  data: dataPartner
});

$("#partner").append(content);

});
