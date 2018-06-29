var outside = document.createElement("div");
outside.id = "outside";
document.body.appendChild(outside);

var parentNumber = document.createElement("div");
parentNumber.id = "parentNumber";
outside.appendChild(parentNumber);

var number = document.createElement("div");
number.id = "number";
number.innerHTML = 0;
parentNumber.appendChild(number);

var powerButton = document.createElement("powerButton");
powerButton.id = "powerButton";
outside.appendChild(powerButton);

var on = document.createElement("div");
on.id = "on";
on.innerHTML = "ON"
powerButton.appendChild(on);

var off = document.createElement("div");
off.id = "off";
off.innerHTML = "OFF"
powerButton.appendChild(off);

var clear = document.createElement("div");
clear.id = "clear";
clear.innerHTML = "C"
powerButton.appendChild(clear);

var calculate = document.createElement("div");
calculate.id = "calculate";
outside.appendChild(calculate);

var buttonsDiv = document.createElement("div");
buttonsDiv.id = "buttonsDiv";
outside.appendChild(buttonsDiv);

var digitsDiv = document.createElement("div");
digitsDiv.id = "digitsDiv";
buttonsDiv.appendChild(digitsDiv);

for (var i=0; i<4; i++) {
  var row = document.createElement("div");
  row.className = "row";
  digitsDiv.appendChild(row);
  for (var j=0; j<3; j++) {
    var mathButton = document.createElement("div");
    mathButton.className = "digits";
    row.appendChild(mathButton);
  }
}

var signs = document.createElement("div");
signs.id = "signs";
buttonsDiv.appendChild(signs);

for (var i=0; i<5; i++) {
    var makeSignButtons = document.createElement("div");
    makeSignButtons.className = "signButtons";
    signs.appendChild(makeSignButtons);
}

// var signButtons = getElementsByClassName("signButtons");

var memory = 0;

var val1 = 7;
var val2 = 4;
var val3 = 1;
var val4 = 0;
var newButtons = document.getElementsByClassName("digits");

for (var k=0; k<9; k++) {
  if (k<3) {
    newButtons[k].innerHTML = val1;
    newButtons[k].value = val1;
    val1 += 1;
  } else if (k>2 && k<6) {
    newButtons[k].innerHTML = val2;
    newButtons[k].value = val2;
    val2 += 1;
  } else if (k>5 && k<9) {
    newButtons[k].innerHTML = val3;
    newButtons[k].value = val3;
    val3 += 1;
  }
}

newButtons[9].innerHTML = "0";
newButtons[10].innerHTML = "00";
newButtons[11].innerHTML = ".";

// newButtons[3].className = "mathSigns";
// newButtons[6].className = "mathSigns";
// newButtons[9].className = "mathSigns";
// newButtons[11].className = "mathSigns";
// newButtons[11].className = "mathSigns";

var onSwitch = document.getElementById("on");
on.addEventListener("click", start);

function start() {
  var startUp = document.getElementById("number");
  startUp.innerHTML = 0;
  signRepeat = 0;
  reload = 0;
  memory = 0;
}

var offSwitch = document.getElementById("off");
off.addEventListener("click", bye);

function bye() {
  var ok = document.getElementById("outside");
  var turnOn = document.getElementById('on');
  ok.style.background = "none"; 
//   ok.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center'
  ok.innerHTML = "";
  ok.appendChild(turnOn);
}

var clearSwitch = document.getElementById("clear");
clear.addEventListener("click", gone);

function gone() {
  var result = document.getElementById("number");
  result.innerHTML = 0;
  memory = 0;
  signRepeat = 0;
  reload = 0;
  memory = 0;
}

//start humbug way

function changeValue() {
    thisValue = this.querySelector(".")
}

newButtons[0].addEventListener("click", change7);
newButtons[1].addEventListener("click", change8);
newButtons[2].addEventListener("click", change9);
newButtons[3].addEventListener("click", change4);
newButtons[4].addEventListener("click", change5);
newButtons[5].addEventListener("click", change6);
newButtons[6].addEventListener("click", change1);
newButtons[7].addEventListener("click", change2);
newButtons[8].addEventListener("click", change3);
newButtons[9].addEventListener("click", change0);
newButtons[10].addEventListener("click", changeDec);

var reload;
var signRepeat;

function changeDec(){
    if (number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0){
        number.innerHTML = '0.';
        reload = 1;
      } else if (number.innerHTML.includes('.')) {}
      else{
        number.innerHTML = number.innerHTML + '.';
        // number.innerHTML = parseFloat(num);
    } 
}

function change7() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0'){
    number.innerHTML = newButtons[0].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[0].innerHTML;
    number.innerHTML = parseFloat(num);
  } 
}

function change8() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[1].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[1].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change9() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[2].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[2].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change4() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[3].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[3].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change5() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[4].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[4].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change6() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[5].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[5].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change1() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[6].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[6].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change2() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[7].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[7].innerHTML;
    number.innerHTML = parseFloat(num);
  }  
}

function change3() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[8].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    var num = number.innerHTML + newButtons[8].innerHTML;
    number.innerHTML = parseFloat(num);
  } 
}

function change0() {
  if (number.innerHTML === 0|| number.innerHTML === '/' || number.innerHTML === '*' || number.innerHTML === '+' || number.innerHTML === '-' || reload === 0 || number.innerHTML === '0') {
    number.innerHTML = newButtons[9].innerHTML;
    reload = 1;
  } else if (number.innerHTML !== 0) {
    number.innerHTML = number.innerHTML + newButtons[9].innerHTML;
    // number.innerHTML = parseFloat(num);
  }  
}
//end humbug way

var mathSigns = document.getElementsByClassName("mathSigns");
mathSigns[0].addEventListener("click", divide);
mathSigns[1].addEventListener("click", multiply);
mathSigns[2].addEventListener("click", subtract);
mathSigns[3].addEventListener("click", equal);
mathSigns[4].addEventListener("click", add);



function divide() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '/';
         }else{
            number.innerHTML = '/';
            memory = parseFloat(memory) + '/';
            signRepeat++;
            reload = 0;   
           }
    }else{
    memory = number.innerHTML + '/';
    number.innerHTML = '/';
    signRepeat = 1;
    return memory;
    }
}

function multiply() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '*';
         }else{
             number.innerHTML = '*';
             memory = parseFloat(memory) + '*';
             signRepeat++;
             reload = 0;   
            }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '*';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '*';
console.log(memory);
signRepeat = 1;
return memory;
    }
}

function subtract() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '-';
         }else{
            number.innerHTML = '-';
            memory = parseFloat(memory) + '-';
            signRepeat++;
            reload = 0;   
           }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '-';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '-';
console.log(memory);
signRepeat = 1;
return memory;
}
}

function add() {
    if(signRepeat > 0){
        if(memory.includes('/') && !number.innerHTML.match(/[\/+*-]/gm)){
            var currentNum = parseFloat(number.innerHTML);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum/currentNum;
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
        }else if(memory.includes('*') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum*currentNum;
            console.log(storedNum*currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else if(memory.includes('+') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = parseFloat(storedNum+currentNum);
            console.log(storedNum+currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else if(memory.includes('-') && !number.innerHTML.match(/[\/+*-]/gm)){
            var num = number.innerHTML;
            var currentNum = parseFloat(num);
            var storedNum = parseFloat(memory);
            number.innerHTML = storedNum-currentNum;
            console.log(storedNum-currentNum);
            reload = 0;
            signRepeat++;
            memory = number.innerHTML + '+';
         }else{
            number.innerHTML = '+';
            memory = parseFloat(memory) + '+';
            signRepeat++;
            reload = 0;   
           }
    }else{
memory = number.innerHTML;
console.log(memory);
var num = number.innerHTML;
number.innerHTML = '+';
num = 0;
var int = parseFloat(memory);
console.log(int);
memory = int + '+';
console.log(memory);
signRepeat = 1;
return memory;
    }
}

// on.addEventListener("mouseover", onShowGif);
// on.addEventListener("mouseout", onHideGif);
// off.addEventListener("mouseover", offShowGif);
// off.addEventListener("mouseout", offHideGif);
// clear.addEventListener("mouseover", clearShowGif);
// clear.addEventListener("mouseout", clearHideGif);

// function onShowGif(url) {
//   on.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center';
// }

function onHideGif() {
  on.style.background = null;
}

// function offShowGif(url) {
//   off.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center'
// }

function offHideGif() {
  off.style.background = null;
}

// function clearShowGif(url) {
//   clear.style.background = 'url("https://media.giphy.com/media/7OWdNvyaMr3BuQ8uMk/giphy.gif") center'
// }

function clearHideGif() {
  clear.style.background = null;
}

var gifArr = ['url("https://media.giphy.com/media/3XhU5pkFZChvW/giphy.gif") center',
'url("https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif") center',
'url("https://media.giphy.com/media/RLWwOuPbqObupogOLB/giphy.gif") center',
'url("https://media.giphy.com/media/4NeWu795Y4zP5Jzunf/giphy.gif") center',
'url("https://media.giphy.com/media/QqkVKdsehPtCw/giphy.gif") center',
'url("https://media.giphy.com/media/3oEjHYibHwRL7mrNyo/giphy.gif") center',
'url("https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif") center',
'url("https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif") center',
'url("https://media.giphy.com/media/dEdmW17JnZhiU/giphy.gif") center',
'url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif") center',
'url("https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif") center',
'url("https://media.giphy.com/media/XfYyQFiq9ySc0/giphy.gif") center',
'url("https://media.giphy.com/media/QNQgqJ403Vcoo/giphy.gif") center',
'url("https://media.giphy.com/media/zMQcrvqjkC9d6/giphy.gif") center',
'url("https://media.giphy.com/media/EaSH6bwyEQVkA/giphy.gif") center',
'url("https://media.giphy.com/media/EGQ7qLdbWHOLK/giphy.gif") center',
'url("https://media.giphy.com/media/Cf76sVcqiN1tu/giphy.gif") center',
'url("https://media.giphy.com/media/dwRyANr9buXtK/giphy.gif") center',
'url("https://media.giphy.com/media/VG2RUZNTHYvAs/giphy.gif") center',
'url("https://media.giphy.com/media/50ikYkrYPNBqU/giphy.gif") center',
'url("https://media.giphy.com/media/gMDKyrWInxOhO/giphy.gif") center',
'url("https://media.giphy.com/media/12za05Ybz2YfcY/giphy.gif") center',
'url("https://media.giphy.com/media/pVtxNScpYHaY8/giphy.gif") center',
'url("https://media.giphy.com/media/p2s1qCQ60n4qs/giphy.gif") center',
'url("https://media.giphy.com/media/VEn6uMTmWunRu/giphy.gif") center',
'url("https://media.giphy.com/media/He70JJxAUGp8Y/giphy.gif") center',
'url("https://media.giphy.com/media/37qcnlmtHzZoAFsiFA/giphy.gif") center',
'url("https://media.giphy.com/media/sJaZBVqhPnQk0/giphy.gif") center',
'url("https://media.giphy.com/media/8NunvDAvEeWXu/giphy.gif") center',
'url("https://media.giphy.com/media/nbMyya8CQ25dPMXeYn/giphy.gif") center',
'url("https://media.giphy.com/media/l3nWl5bhBoim7glNu/giphy.gif") center',
'url("https://media.giphy.com/media/3dhBaH8VO2JRsIlvoR/giphy.gif") center'];

function changeGif(url) {
  parentNumber.style.background = url;
}

function equal() {
if(memory.includes('/')){
    var num = number.innerHTML;
    var currentNum = parseFloat(number.innerHTML);
    if(num.match(/[\/+*-]/gm)){
        currentNum = parseFloat(memory);
        number.innerHTML = parseFloat(memory)/currentNum;
        memory = number.innerHTML;
        signRepeat = 0;
        reload = 0;
    }else{
    var storedNum = parseFloat(memory);
    number.innerHTML = storedNum/currentNum;
    console.log(storedNum/currentNum);
    memory = number.innerHTML;
    reload = 0;
    signRepeat = 0;
    }
}else if(memory.includes('*')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)*currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = storedNum*currentNum;
   console.log(storedNum*currentNum);
   reload = 0;
   signRepeat = 0;
}
}else if(memory.includes('+')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)+currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = parseFloat(storedNum+currentNum);
   console.log(storedNum+currentNum);
   reload = 0;
   signRepeat = 0;
}
}else if(memory.includes('-')){
   var num = number.innerHTML;
   var currentNum = parseFloat(num);
   if(num.match(/[\/+*-]/gm)){
    currentNum = parseFloat(memory);
    number.innerHTML = parseFloat(memory)-currentNum;
    memory = number.innerHTML;
    signRepeat = 0;
    reload = 0;
}else{
   var storedNum = parseFloat(memory);
   number.innerHTML = storedNum-currentNum;
   console.log(storedNum-currentNum);
   reload = 0;
   signRepeat = 0;
}
}
  var randomGif = gifArr[Math.floor(Math.random()*gifArr.length)]
  changeGif(randomGif);
  }

if(number.innerHTML.length>13){
    number.innerHTML = number.innerHTML.substring(0,13);
}

number.addEventListener('mouseover', showLength);

function showLength(){
console.log(number.innerHTML.length)
}