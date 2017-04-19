$(function() {
var htmlServices = $('#dataServices').html();
var dataServices = [
{
  title: 'Air delivery of cargoes',
  img: 'img/avia_freight.jpg',
  desc: 'Airfreight cargo service from KSM Alliance - is the delivery of cargoes to / from more than 200 countries in just 5 days arranged by own agents worldwide.',
  link: 'services.html'
},
{
  title: 'Container cargo shipping',
  img: 'img/sea_freight.jpg',
  desc: 'We provide services of FCL (full container load) and LCL (less than container load) goods delivery by sea with main discharges in Gdynia, Gdansk, Hamburg, Copper etc.',
  link: 'services.html'
},
{
  title: 'International truck delivery',
  img: 'img/truck_freight.jpg',
  desc: 'We provide direct shipping service for truck cargo transportation within Europe and CIS countries, delivery via warehouses and delivery as part of multimodal transportations.',
  link: 'services.html'
},
{
  title: 'Trading and consulting',
  img: 'img/china_goods.jpg',
  desc: 'We will help you to buy goods in EU, UAE or China, arrange payment, find acceptable logistics solution and prepare shipping documents according to customs demands.',
  link: 'services.html'
},
{
  title: 'Logistics and customs',
  img: 'img/custom_clearence.jpg',
  desc: 'Because of good number of partner`s warehouses in Europe we can arrange consolidation, repacking and labeling services, cross-docking and clearance in EU and Ukraine.',
  link: 'services.html'
},
{
  title: 'Special cargo transportations',
  img: 'img/service_agent.jpg',
  desc: 'Our company operates not only with general cargoes, but also with dangerous goods, human remains, personal effects, exhibition goods, AOG and others.',
  link: 'services.html'
}
];

var content = tmpl(htmlServices, {
  data: dataServices
});

$('#main-services').append(content);

});
