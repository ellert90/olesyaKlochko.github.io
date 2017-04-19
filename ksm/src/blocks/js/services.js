$(function() {
var htmlServices = $('#dataServices').html();
var dataServices = [
{
  title: 'Express air delivery of cargoes',
  img: 'img/avia_freight.jpg',
  desc: 'Express air delivery in KSM - is the delivery of cargoes to / from 220 countries in just 5 days + real financial guarantees. Customs clearance of cargos - for 1 day.',
  link: 'services.html'
},
{
  title: 'Container cargo shipping',
  img: 'img/sea_freight.jpg',
  desc: 'Our company provides services of goods delivery by sea "on a turnkey basis" or freight. ',
  link: 'services.html'
},
{
  title: 'International truck delivery',
  img: 'img/truck_freight.jpg',
  desc: 'We provide a range of professional services for motor cargo transportation (including - as part of multimodal transportations).',
  link: 'services.html'
},
{
  title: 'Order of goods in China',
  img: 'img/china_goods.jpg',
  desc: 'We will help you to search, order, conduct quality control, and direct delivery of goods from China on favorable terms.',
  link: 'services.html'
},
{
  title: 'Cargo customs clearance',
  img: 'img/custom_clearence.jpg',
  desc: 'Our highly skilled specialists custom cargo clearance quickly and at competitive rates.',
  link: 'services.html'
},
{
  title: 'Importer and agent services',
  img: 'img/service_agent.jpg',
  desc: 'We are ready to provide you with a comprehensive solution for single or regular delivery of goods to Poland / abroad.',
  link: 'services.html'
}
];

var content = tmpl(htmlServices, {
  data: dataServices
});

$('#main-services').append(content);

});
