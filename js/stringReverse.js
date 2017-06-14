//------------------REVERSE A STRING--------------------->
"use strict";

function askString(){
  let input = prompt("Please provide a word to reverse");
  return input;
}

function displayString(string){
  alert(string);
}

function reverse(string){
  let input = [];
  for (var i = 0; i < string.length; i++) {
    let character = string[i];
    input.unshift(character);
  }
  return input;
}

function programManager(){
  let input = askString();
  let reversedString = reverse(input);
  displayString(reversedString);
}

programManager();
