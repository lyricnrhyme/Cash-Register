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

function inputValue() { //adding numbers to value on top
    var thisValue = this.querySelector(".value")
    if (priceDiv.innerHTML == 0) {
        priceDiv.innerHTML = thisValue.innerHTML;
    } else if (priceDiv.innerHTML.includes(".") && thisValue.innerHTML === ".") {
        priceDiv.innerHTML = priceDiv.innerHTML;
        console.log(priceDiv.innerHTML.includes("."))
    } else if (result === true) {
        priceDiv.innerHTML = thisValue.innerHTML;
    } else if (memory.includes("+") || memory.includes("-") || memory.includes("*") || memory.includes("/")) {
        priceDiv.innerHTML = thisValue.innerHTML;
    } else {
        priceDiv.innerHTML = priceDiv.innerHTML + thisValue.innerHTML;
        // result = false;
    };
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
var memory = 0;
var result = false;

value[9].innerHTML = "0";
value[10].innerHTML = "00";
value[11].innerHTML = ".";

math[0].innerHTML = "/";
math[0].addEventListener("click", divide);
function divide() {
    memory = priceDiv.innerHTML;
    memory = memory + math[0].innerHTML;
    console.log(memory);
    console.log(parseFloat(memory));
}

math[1].innerHTML = "*";
math[1].addEventListener("click", multiply);
function multiply() {
    memory = priceDiv.innerHTML;
    memory = memory + math[1].innerHTML;
    console.log(memory);
    console.log(parseFloat(memory));
}

math[2].innerHTML = "-";
math[2].addEventListener("click", subtract);
function subtract() {
    memory = priceDiv.innerHTML;
    memory = memory + math[2].innerHTML;
    console.log(memory);
    console.log(parseFloat(memory));
}

math[3].innerHTML = "+";
math[3].addEventListener("click", add);
function add() {
    memory = priceDiv.innerHTML;
    memory = memory + math[3].innerHTML;
    console.log(memory);
    console.log(parseFloat(memory));
}

math[4].innerHTML = "=";
math[4].addEventListener("click", equal);
function equal() {
    if (memory.includes("+")) {
        priceDiv.innerHTML = parseFloat(memory) + parseFloat(priceDiv.innerHTML);
    } else if (memory.includes("-")) {
        priceDiv.innerHTML = parseFloat(memory) - priceDiv.innerHTML;
    } else if (memory.includes("*")) {
        priceDiv.innerHTML = parseFloat(memory) * priceDiv.innerHTML;
    } else if (memory.includes("/")) {
        priceDiv.innerHTML = parseFloat(memory) / priceDiv.innerHTML;
    }
    // result = true;
}

action[0].innerHTML = "Clear";
action[0].addEventListener("click", clear);
function clear() {
    priceDiv.innerHTML = 0;
}

action[1].innerHTML = "Get Balance";
action[1].addEventListener("click", getBalance);
function getBalance() {
    priceDiv.innerHTML = memory;
}

action[2].innerHTML = "Deposit Cash";
action[2].addEventListener("click", deposit);
function deposit() {

}

action[3].innerHTML = "Withdraw Cash";
action[3].addEventListener("click", withdraw);
function withdraw() {

}
