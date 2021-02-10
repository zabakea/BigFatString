"use strict"
document.querySelector("button").addEventListener("click", provjera);

function provjera() {

const inputField = document.querySelector("#someData").value;
const optionField = document.querySelector("#condition").value;
let output = "";



if (optionField == "fnUpper" ) {
output = inputField.charAt(0).toUpperCase() + inputField.slice(1).toLowerCase();
}
else if(optionField == "fndFirst") {
    output =inputField.slice(0, inputField.indexOf(" "));
}
else if(optionField == "fnLength") {
    output =inputField.slice(0, inputField.indexOf(" ")).length;
}
else if(optionField == "mdName") {
    output =inputField.slice(inputField.indexOf(" "), inputField.lastIndexOf(" "));
}
else if(optionField == "pngjpg") {
    output = inputField.endsWith(".jpg") || inputField.endsWith(".png");
}
else if(optionField == "password") {
   const output1 = inputField.replace(inputField, "*");
   output = output1.repeat(inputField.length);
}
else if(optionField == "threechUp") {
 output = inputField.slice(0, 2) + inputField.charAt(2).toUpperCase() + inputField.slice(3);
 }
 else if(optionField == "spaceUp") {
    output = "It's the end of the world as we know it"
    }
 

document.querySelector("#result").textContent = output;
}

