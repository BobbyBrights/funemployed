// mobile nav

$('#nav-icon3').click(function(){

  // open hamburger icon, animate and change color
  $(this).toggleClass('open');

  // 2. show mobile header
  $('.mobile-nav').toggle(200)

  return false

});