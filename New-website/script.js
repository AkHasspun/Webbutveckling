
 const header = document.querySelector("header");
 const sectionOne = document.querySelector(".hero-banner");   /*tar in klasser från html*/
 
 const sectionOneOptions = {
   rootMargin: "-200px 0px 0px 0px"   /*gör så att det händer 200px ovanför där det annars skulle börja*/
 };
 
 const sectionOneObserver = new IntersectionObserver(function(
   entries,
   sectionOneObserver
 ) {
   entries.forEach(entry => {             /*gör så att när man bläddrat förbi hero-bannern så får headern klassen nav-scrolled*/
     if (!entry.isIntersecting) {
       header.classList.add("nav-scrolled");
     } else {                                 /*gör så att klassen nav-scrolled tas bort när man kommer upp till hero-bannern igen*/
       header.classList.remove("nav-scrolled");
     }
   });
 },
 sectionOneOptions);
 
 sectionOneObserver.observe(sectionOne);


 function openNav() {
  document.getElementById("mySidenav").style.width = "250px"; /*sätter en width på sidenaven när den öppnas*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"; /*tar bort widhten på sidenaven när den stängs*/
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);     
}                                       /*själva koden för hur bild karusselen fungerar*/

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}