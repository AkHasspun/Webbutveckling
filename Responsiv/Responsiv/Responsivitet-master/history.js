function myFunction(moreId,lessId,readMoreId) {
    let more = document.getElementById(moreId);
    let less = document.getElementById(lessId);
    let btn = document.getElementById(readMoreId);

    if (less.style.display === "none") {
        less.style.display = "inline";
        btn.innerHTML = "Read More";
        more.style.display = "none";
    } else {
        less.style.display = "none";
        btn.innerHTML = "Read less";
        more.style.display = "inline";
    }
}

window.onload = () => {
    let all = document.getElementsByClassName("zoom");                      //gör så att när man klickar på en bild med klassen "zoom"" så kommer så kommer det skapas en kopi av bilden
    let background = document.getElementById("background-zoom");              //och den kommer då också att förlora sina gammla klasser och införskaffa klassen "show" iställe när man sedan klickar på skärmen igen så kommer den återgå till normalt
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        background.innerHTML = "";
        background.appendChild(clone);
        background.className = "show";
      };
    }}
      background.onclick = () => {
      background.className = "";
    };
  };


function animation () {                                   //gör så att när man klickar på knappen "Klicka här för att starta animation" så får arrow klassen "anmimation" och om man klickar igen försvinner den
    let letter = document.getElementById("letter");

    letter.classList.add("animation");

    letter.addEventListener("animationend",() => {letter.classList.remove("animation")});           //gör så att när animationen är slut så kommer den förlora klassen "animation"
}

