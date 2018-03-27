$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    $('p').removeClass();
    $('p').addClass('highlighter');
  });
  $("p").click(function() {
    alert("this is a paragraph.");
    $('p').toggleClass('highlighter');
  });
  $(".walrus").click(function() {
    alert("an image of a walrus!");
  });
  $("#fancyWalrus").click(function() {
    alert("Fade Walrus!")
    $('.fader').fadeToggle();
  });
  $('#famousWalrus').click(function() {
    alert("Slide Walrus!");
    $('.slide').slideToggle();
  });
  $('button#dark').click(function() {
    alert("Engage Dark Theme")
    $('body').removeClass();
    $('body').addClass('darkTheme');
  });
  $('button#light').click(function() {
    alert("Engage Light Theme")
    $('body').removeClass();
    $('body').addClass('lightTheme');
  });
  $('button#original').click(function(){
    alert("Engage Original Theme")
    $('body').removeClass();
    $('body').addClass(originalTheme);
  });
});
