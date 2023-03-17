function myFunction(moreId,lessId,readMoreId) {                     //funktionen gör så att om man klickar på knappen "read more" så kommer texten med klassen "less" att visas
    let more = document.getElementById(moreId);                     //och då kommer också knappen ändras till "read less". Om man då klickar på den så kommer texten "less"
    let less = document.getElementById(lessId);                     // att döljas igen och knappen kommer ändras till "read more"
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
  if (screen.width < 1185) {
    return;
  }
    let all = document.getElementsByClassName("zoom");                      //gör så att när man klickar på en bild med klassen "zoom"" så kommer så kommer det skapas en kopia av bilden
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


function animation () {                                   //gör så att när man klickar på knappen "Klicka här för att starta animation" så får brevet klassen "anmimation" 
    let letter = document.getElementById("letter");

    letter.classList.add("animation");

    letter.addEventListener("animationend",() => {letter.classList.remove("animation")});           //gör så att när animationen är slut så kommer den förlora klassen "animation"
}