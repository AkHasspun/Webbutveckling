const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
const elemMain = document.getElementById("calc");


function btnCalc() {                    // This function takes care of the calculation  
    /* your code here */
    sum = result;

    elemCalcScreen.innerHTML = sum;     // show the result on screen
}

function addDigit(thisSign) {           // Add a digit
    elemCalcScreen.innerHTML += thisSign;
}

function rotate() {
    elemMain.classList.toggle("rotate");

}


function btnConvertToEuro() {           //Converts it to euro
    let x = elemCalcScreen.innerHTML;

    let sum = 0;

    sum = x/10.9;
    sum = sum.toFixed(2);   //toFixed makes it so only 2 decimals shows on the screen

    if (isNaN(sum)) {
        elemCalcScreen.innerHTML = "ERROR" //Makes it so when NaN (Not a Number) woudl apear on the screen a error message instead appears
    }
    else {
        elemCalcScreen.innerHTML = sum;
    }

}

function btnConvertToDollar() {         //Converts to dollar
   let x = elemCalcScreen.innerHTML;

    let sum = 0;

    sum = x/11.1;
    sum = sum.toFixed(2);      //toFixed makes it so only 2 decimals shows on the screen

    if (isNaN(sum)) {
        elemCalcScreen.innerHTML = "ERROR" //Makes it so when NaN (Not a Number) woudl apear on the screen a error message instead appears
    }
    else {
        elemCalcScreen.innerHTML = sum;
    }
}

function btnBackSpace() {               //Removes the number furthest to the right  
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}

function btnClearAll () {                 //Removes everything on the screen
 let x = calcScreen = elemCalcScreen.innerHTML;

 calcScreen = ''

 elemCalcScreen.innerHTML = calcScreen;
}
