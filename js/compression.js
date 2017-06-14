//-----------------COMPRESS A STRING----------------------->
"use strict";

function promptUser(){
  let userInput = prompt("Please Provide a one word string with multiple letters in a row:");
  return userInput;
}

function displayString(string){
  alert(string);
}

function joinArray(compressedArray){
  let joinedArray = compressedArray.join("");
  return joinedArray;
}

function compressor(string){
  let compressed = [];
  let repeatedCounter = 0;
  let temporaryConcatination;
  for (var i = 0; i < string.length; i++) {
    if(string[i] === string[i+1]){
      repeatedCounter ++
    } else if (string[i] != string[i+1]) {
      repeatedCounter ++
      temporaryConcatination = repeatedCounter + string[i];
      compressed.push(temporaryConcatination);
      repeatedCounter = 0;
    }
  }
  return compressed;
}

function programManager(){
  let input = promptUser();
  let compressed = compressor(input);
  let joiner = joinArray(compressed);
  displayString(joiner);
}

programManager();
