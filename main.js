 
 const display= document.getElementById("display");

 function enterValue(v) {
    display.value+=v;
 }

 function enterOperator(operator) {
    display.value+=operator;
 }

 function execute(equal) {
    display.value= eval(display.value);
 }

 function displayClear() {
    display.value= "";
 }

 function displayDelete() {
    display.value=display.value.substr(0,display.value.length-1);
 }
