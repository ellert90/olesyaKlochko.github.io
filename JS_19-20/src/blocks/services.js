$(function() {
var htmlServices = $('#dataServices').html();
var dataServices = [
{
  title: 'Schedule Services',
  img: '../img/1_service.jpg'
},
{
  title: 'Preventive Maintence',
  img: '../img/2_service.jpg'
},
{
  title: 'Tire&Wheel Services',
  img: '../img/3_service.jpg'
},
{
  title: 'Repair Services',
  img: '../img/4_service.jpg'
}
];

var content = tmpl(htmlServices, {
  data: dataServices
});

$('#services').append(content);

});
