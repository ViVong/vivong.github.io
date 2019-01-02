(function(){

  const Topbar = document.getElementById('topbar');
  const LinkNav = document.getElementById('linknav');
  const TitleNav = document.getElementById('titlenav'); 
  const P1 = document.getElementById('p1');
  const modal = document.getElementById('myModal');

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

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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

function visibility(){
  var VisibleTopbar = document.getElementById('topbar');
  var Reappear = document.getElementById('reappear');
  if (VisibleTopbar.style.visibility == "visible"){
    VisibleTopbar.style.visibility = "hidden";
    Reappear.style.visibility = "visible";
  }
  else{
    VisibleTopbar.style.visibility = "visible";
    Reappear.style.visibility = "hidden";
  }
}

function collapse(){
  const Expand = document.getElementById("expand");
  const Expand1 = document.getElementById("expand1");
  const Expand2 = document.getElementById("expand2");
  const Expand3 = document.getElementById("expand3");
  const Expand4 = document.getElementById("expand4");
  if (Expand.style.maxHeight == "5rem"){
    Expand.style.maxHeight = "0rem";
    Expand1.style.maxHeight = "0rem";
    Expand2.style.maxHeight = "0rem";
    Expand3.style.maxHeight = "0rem";
    Expand4.style.maxHeight = "0rem";
  }
  else{
    Expand.style.maxHeight = "5rem";
    Expand1.style.maxHeight = "5rem";
    Expand2.style.maxHeight = "5rem";
    Expand3.style.maxHeight = "5rem";
    Expand4.style.maxHeight = "7rem";
  }
}

function modalUp(){
  document.getElementById('myModal').style.display = "inherit";
}