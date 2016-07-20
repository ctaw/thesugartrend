//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require ./vendor/wow
//= require ./vendor/jquery.easing.min
//= require ./vendor/scrolling-nav

//= require ./vendor/jquery.magnific-popup.min
new WOW().init();

$('#myCarousel').carousel({
  interval: 2000
});
