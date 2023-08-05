function input(value) {
    document.getElementById("displayScreen").value += value;
}

function clearDisplayScreen() {
    document.getElementById("displayScreen").value = "";
}

function backspace(){
   var expression=document.getElementById("displayScreen").value;
   var currentValue=displayScreen.value;
   displayScreen.value=currentValue.slice(0,-1);
}

function calculate() {
   var expression=document.getElementById("displayScreen").value;
   var result=eval(expression);
   document.getElementById("displayScreen").value = result; 
}
