$(document).ready(function() {
  var phrases = ["a UX Designer", "an Artist", "a Baker", "a Pianist"];
  var currentIndex = 0;
  
  function updatePhrase() {
      $("#text").fadeOut(500, function() {
          $(this).text(phrases[currentIndex]).fadeIn(500);
      });
      
      currentIndex = (currentIndex + 1) % phrases.length;
  }
  
  updatePhrase();
  setInterval(updatePhrase, 2000);
});