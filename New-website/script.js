 //Vilken del är högst upp?
 const elemHeader = document.querySelector("header"); 

 //Kolla när denna blivit bortscrollad
 const elemSplashImage = document.querySelector("hero-banner"); 
 
 //lägg till saker som ni vill manipulera
 const elemMainMenu = document.querySelector('.main-menu');
 
 //inställningar för hur intersectionObserver ska fungera (t.ex. rootMargin ställer in när din intersectionObserver ska aktiveras)
 let options = {
   root: null,
   rootMargin: "0px",
   threshold: 0
 };
 
 //skapa ny observer
 let observer = new IntersectionObserver(callback, options);
 
 //själva funktionen för att kolla om .elemSplashImage har scrollats bort (har blivit scrollad så den inte syns)
 function callback(entries, observer) {
   entries.forEach(entry => {
     if (!entry.isIntersecting) {     //funktioner som ska hända när man har scrollat ner
       elemHeader.classList.add("scrolled");  
     } else {                                      //Vad ska hända om man sscrollar upp igen?
       elemHeader.classList.remove("scrolled");  
     }
   });
 }
 
 observer.observe(elemSplashImage);

 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}