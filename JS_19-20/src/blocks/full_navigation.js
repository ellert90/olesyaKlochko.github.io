$(function() {
var htmlFullNav = $('#dataFullNav').html();
var dataFullNav = [
{
  title: 'SOCIALS',
  link_1: 'Facebook',
  link_2: 'Flickr',
  link_3: 'Twitter',
  link_4: 'Vimeo'
},
{
  title: 'LINKS',
  link_1: 'How to Write a Blog',
  link_2: 'Create a Blog in 4 Steps',
  link_3: '15 Tips to Increase Traffic',
  link_4: '20 Blog Post Ideas'
},
{
  title: 'BLOGROLL',
  link_1: 'Blogs Blog',
  link_2: 'Roll Up Roll Up',
  link_3: 'Blog Free',
  link_4: 'Wordpress Blog'
},
{
  title: 'ABOUT US',
  link_1: 'Agriculture',
  link_2: 'Harvest',
  link_3: 'Company news',
  link_4: 'Investor relations'
}
];

var content = tmpl(htmlFullNav, {
  data: dataFullNav
});

$('#full-nav').append(content);

});
