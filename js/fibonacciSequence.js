//-------------------------FIBONACCI SEQUENCE-------------------------->
"use strict";

function promptUser(){
  let userInput = prompt("Please privide a number to start the fibonacci sequence from:");
  let userInputInt = parseInt(userInput);
  return userInputInt;
}

function checkFibinacciSequence(startPoint,range){
  let sequenceArray = [];
  for (var i = 1; i < range; i++) {
    let added = (sequenceArray[i-2]) + (sequenceArray[i-3]);
    if(i === 1){
      sequenceArray.push(startPoint);
      console.log(startPoint);
    } else if (i === 2){
      sequenceArray.push(startPoint);
      console.log(startPoint);
    } else if (i > 2){
      sequenceArray.push(added);
      console.log(added);
    }
  }
}

//--------RUN---------->
function runProgram(){
  let range = 50;
  let startPoint = promptUser();
  checkFibinacciSequence(startPoint,range);
}

runProgram();
