console.log("hello cash");

var calcDiv = document.createElement("div");
calcDiv.id = "calcDiv";
document.body.appendChild(calcDiv);

var displayDiv = document.createElement("div");
displayDiv.id = "displayDiv";
calcDiv.appendChild(displayDiv);

var priceDiv = document.createElement("div");
priceDiv.id = "priceDiv";
priceDiv.innerHTML = "0";
displayDiv.appendChild(priceDiv);

var buttonsDiv = document.createElement("div");
buttonsDiv.id = "buttonsDiv";
calcDiv.appendChild(buttonsDiv);

var digitsDiv = document.createElement("div");
digitsDiv.id = "digitsDiv";
buttonsDiv.appendChild(digitsDiv);

var mathDiv = document.createElement("div");
mathDiv.id = "mathDiv";
buttonsDiv.appendChild(mathDiv);

var actionDiv = document.createElement("div");
actionDiv.id = "actionDiv";
buttonsDiv.appendChild(actionDiv);

for (var i=0; i<4; i++) { //creating digit buttons
    var rowDiv = document.createElement("div");
    rowDiv.className = "rowDiv";
    for (j=0; j<3; j++) {
        var makeDigits = document.createElement("div");
        makeDigits.className = "digitButton";
        makeDigits.addEventListener("click", inputValue);
        var makeValue = document.createElement("div");
        makeValue.className = "value";
        makeDigits.appendChild(makeValue);
        rowDiv.appendChild(makeDigits);
    }
    digitsDiv.appendChild(rowDiv);
}

// != 0 then += num to the screen 

for (var i=0; i<5; i++) { //creating math sign buttons
    var makeMath = document.createElement("div");
    makeMath.className = "math";
    mathDiv.appendChild(makeMath);
}

for (var i=0; i<4; i++) { //creating action buttons
    var makeAction = document.createElement("div");
    makeAction.className = "action";
    actionDiv.appendChild(makeAction);
}

var value = document.getElementsByClassName("value");
var math = document.getElementsByClassName("math");
var action = document.getElementsByClassName("action");

var val1 = 7
var val2 = 4
var val3 = 1

for (var i=0; i<9; i++) { //creating values in buttons
    if (i<3) {
        value[i].innerHTML = val1;
        val1++;
    } else if (i<6) {
        value[i].innerHTML = val2;
        val2++;
    } else {
        value[i].innerHTML = val3;
        val3++;
    }
}

// console.log(typeof digits[0].innerHTML);

value[9].innerHTML = "0";
value[10].innerHTML = "00";
value[11].innerHTML = ".";

var eqArr = [];
var firstNum;
var mathSign;
var secondNum;
var result;
var memory;
var repeatNum;
var repeatSign;

function inputValue() { //adding numbers to value on top
    var thisValue = this.querySelector(".value");
    if (!(result)) {
        if (priceDiv.innerHTML === "0") {
            priceDiv.innerHTML = thisValue.innerHTML;
            eqArr.push(priceDiv.innerHTML);
            console.log(eqArr);
        } else if (priceDiv.innerHTML.includes(".") && thisValue.innerHTML === ".") {
            priceDiv.innerHTML = priceDiv.innerHTML;
        } else if (eqArr[eqArr.length-1] === "+" || eqArr[eqArr.length-1] === "-" || eqArr[eqArr.length-1] === "*" || eqArr[eqArr.length-1] === "/") {
            priceDiv.innerHTML = thisValue.innerHTML;
            eqArr.push(priceDiv.innerHTML);
            console.log(eqArr);        
        } else {
            priceDiv.innerHTML = priceDiv.innerHTML + thisValue.innerHTML;
            eqArr.push(priceDiv.innerHTML);
            console.log(eqArr);
        }
    } else if ((result)) {
        if (priceDiv.innerHTML === "0") {
            priceDiv.innerHTML = thisValue.innerHTML;
            // eqArr.push(priceDiv.innerHTML);
            // console.log(eqArr);
        } else if (priceDiv.innerHTML.includes(".") && thisValue.innerHTML === ".") {
            priceDiv.innerHTML = priceDiv.innerHTML;
        } else if (eqArr[eqArr.length-1] === "+" || eqArr[eqArr.length-1] === "-" || eqArr[eqArr.length-1] === "*" || eqArr[eqArr.length-1] === "/") {
            priceDiv.innerHTML = thisValue.innerHTML;
            eqArr.push(priceDiv.innerHTML);
            console.log(eqArr);        
        } else {
            priceDiv.innerHTML = priceDiv.innerHTML + thisValue.innerHTML;
            eqArr.push(priceDiv.innerHTML);
            console.log(eqArr);
        }
    }
    // if (priceDiv.innerHTML === "0") {
    //     priceDiv.innerHTML = thisValue.innerHTML;
    //     eqArr.push(priceDiv.innerHTML);
    //     console.log(eqArr);
    // } else if (eqArr[eqArr.length-1] === "+" || eqArr[eqArr.length-1] === "-" || eqArr[eqArr.length-1] === "*" || eqArr[eqArr.length-1] === "/") {
    //     priceDiv.innerHTML = thisValue.innerHTML;
    //     eqArr.push(priceDiv.innerHTML);
    //     console.log(eqArr);
    // } else { //adding on extra digits
    //     priceDiv.innerHTML = priceDiv.innerHTML + thisValue.innerHTML;
    //     eqArr.push(priceDiv.innerHTML);
    //     console.log(eqArr);
    // }
}

math[0].innerHTML = "/";
math[0].addEventListener("click", divide);
function divide() {
}

math[1].innerHTML = "*";
math[1].addEventListener("click", multiply);
function multiply() {
}

math[2].innerHTML = "-";
math[2].addEventListener("click", subtract);
function subtract() {
}

math[3].innerHTML = "+";
math[3].addEventListener("click", add);
function add() {
    if (!(result)) {
        mathSign = "+";
        console.log(mathSign, "mathSign");
        eqArr.push(mathSign);
        console.log(eqArr);
        firstNum = priceDiv.innerHTML;
    } else if ((result)) {
        mathSign = "+";
    }
    // if (!(result)) {
    //     firstNum = eqArr[eqArr.length-1];
    //     // console.log(firstNum);
    //     mathSign = "+";
    //     // console.log(mathSign);
    //     eqArr.push(mathSign);
    //     console.log(eqArr);
    // } else if ((result)) {
    //     mathSign = "+";
    //     eqArr.push(mathSign);
    //     firstNum = result;
    //     console.log(eqArr);
    // }
}

math[4].innerHTML = "=";
math[4].addEventListener("click", equal);
function equal() {
    if (mathSign === "+") { //for adding
        if (!(result)) {
            secondNum = priceDiv.innerHTML;
            result = parseFloat(firstNum) + parseFloat(secondNum);
            priceDiv.innerHTML = result;
            eqArr.push("=");
            eqArr.push(result);
            console.log(eqArr);
            mathSign = null;
        }
            // if (!(result)) {
            // secondNum = priceDiv.innerHTML;
            // eqArr.push("=");
            // console.log(eqArr);
            // result = parseFloat(firstNum) + parseFloat(secondNum);
            // priceDiv.innerHTML = result;
            // eqArr = [];
            // eqArr.push(result);
            // firstNum = result;
            // console.log(firstNum, "firstNum");
            // } else if ((result)) {
            //     result = parseFloat(firstNum) + parseFloat(secondNum);
            //     priceDiv.innerHTML = result;
            //     eqArr = [];
            //     eqArr.push(result);
            //     firstNum = result; 
            // }
    }
}

action[0].innerHTML = "Clear";
action[0].addEventListener("click", clear);
function clear() {
    priceDiv.innerHTML = 0;
    result = null;
    firstNum = null;
    secondNum = null;
    eqArr = [];
}

action[1].innerHTML = "Get Balance";
action[1].addEventListener("click", getBalance);
function getBalance() {
}

action[2].innerHTML = "Deposit Cash";
action[2].addEventListener("click", deposit);
function deposit() {
}

action[3].innerHTML = "Withdraw Cash";
action[3].addEventListener("click", withdraw);
function withdraw() {
}
