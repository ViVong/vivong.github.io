(function(){

  const Topbar = document.getElementById('topbar');
  const LinkNav = document.getElementById('linknav');
  const TitleNav = document.getElementById('titlenav'); 
  const P1 = document.getElementById('p1');

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      Topbar.style.minHeight = "3rem";
      LinkNav.style.top = "1rem";
      TitleNav.style.top = "-0.5rem";
      P1.style.top = "-3rem";
    } else {
      Topbar.style.minHeight = "5.5rem";
      LinkNav.style.top = "2.5rem";
      TitleNav.style.top = "0rem";
      P1.style.top = "1.2em";
    }
  }

})();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var Slides = document.getElementsByClassName("slides");
    var Text = document.getElementsByClassName("desc");
    if (n > Slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = Slides.length} ;
    for (i = 0; i < Slides.length; i++) {
      Slides[i].style.display = "none";
      Text[i].style.display = "none"
    }
    Slides[slideIndex-1].style.display = "block"; 
    Text[slideIndex-1].style.display = "block";
}