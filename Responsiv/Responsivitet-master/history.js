function myFunction() {
    let more = document.getElementById("more");
    let less = document.getElementById("less");
    let btn = document.getElementById("read-more");

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

function myFunction2() {
    let more = document.getElementById("more2");
    let less = document.getElementById("less2");
    let btn = document.getElementById("read-more2");

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

function myFunction3() {
    let more = document.getElementById("more3");
    let less = document.getElementById("less3");
    let btn = document.getElementById("read-more3");

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
    let all = document.getElementsByClassName("zoomD"),
        lightbox = document.getElementById("lightbox");
   
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}
   
  
    lightbox.onclick = () => {
      lightbox.className = "";
    };
  };

