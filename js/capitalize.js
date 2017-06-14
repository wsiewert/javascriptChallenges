//----------------CAPITALIZE EACH FIRST LETTER------------------>
"use strict";

function userInput(){
  let input = prompt("Please provide a sentence:");
  return input;
}

function displayString(message) {
  alert(message);
}

function upperCase(message){
  let messageArray = [];
  for (var i = 0; i < message.length; i++) {
    if(i === 0){
      let upper = message[i].toUpperCase();
      messageArray.push(upper);
    } else if (message[i] === " ") {
      messageArray.push(message[i]);
      messageArray.push(message[i+1].toUpperCase());
      i++
    } else {
      messageArray.push(message[i]);
    }
  }
  return messageArray.join("");
}

function programManager(){
  let input = userInput();
  let capitalize = upperCase(input);
  displayString(capitalize);
}

programManager();
