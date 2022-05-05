let displayBox = document.querySelector(".display");
let keypad = document.querySelector(".keypad");

let showInDisplay = (i)=> displayBox.innerText +=i;
    
let calc=()=> displayBox.innerText = eval(displayBox.innerText);

let clearAll = _ => displayBox.innerText="";

let clearLast = _ => displayBox.innerText=displayBox.innerText.substring(0,displayBox.innerText.length-1);
             
        