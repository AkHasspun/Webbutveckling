const elemBtnCalc = document.getElementById("btn-calc");


const elemCalcScreen = document.getElementById("calc-screen");

function btnCalc() {
    let sum = 0;
    let x = 10;
    let y = 5;
    
    sum = x + y;
    elemCalcScreen.innerHTML = sum;
}