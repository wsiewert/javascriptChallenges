//---------------------HAPPY NUMBERS-------------------------->
"use strict";

function promptUser(){
  let askNumber = prompt("Please provide a number:");
  return askNumber;
}

//Displays happy or sad number.
function displayAlert(number,boolean){
  if(boolean === false){
    displayHappyNumber(number);
  }
  if(boolean === true){
    displaySadNumber(number);
  }
}

function displayHappyNumber(happyNumber){
  alert(happyNumber + " is a HAPPY number!");
}

function displaySadNumber(sadNumber){
  alert(sadNumber + " is a SAD number :(");
}


//------happy number calc------->

//Checks for sequence patterns.
function checkSadNumber(sequenceArray){
  let isSadNumber = false;
    for (var i = 0; i < sequenceArray.length; i++) {
      if(i === sequenceArray.length-1){
        break;
      }
      if(sequenceArray[i] === sequenceArray[sequenceArray.length-1] && sequenceArray.length > 2){
        isSadNumber = true;
        break;
      }
    }
  return isSadNumber;
}

//Takes String returns Added squares (int)
function addDigitSquares(numberArray){
  let total = 0;
  for (var i = 0; i < numberArray.length; i++) {
    let add = Math.pow(parseInt(numberArray[i]),2);
    total += add;
  }
  return total;
}

//Checks to see if calculated number is 1.
function calculateHappyNumber(number){
  let originalNumber = number;
  let currentNumber = 0;
  let firstIteration = true;
  let isSadNumberCheck = false;
  let sequenceArray = [];

  if(firstIteration === true){
    currentNumber = number;
    firstIteration = false;
  }

  while(currentNumber != 1){
    sequenceArray.push(currentNumber.toString());
    isSadNumberCheck = checkSadNumber(sequenceArray);
    if(isSadNumberCheck === true){
      break;
    }
    currentNumber = addDigitSquares(currentNumber.toString());
  }
  return isSadNumberCheck;
}



//------------RUN---------------->

function programManager(){
  let input = promptUser();
  let boolean = calculateHappyNumber(input);
  displayAlert(input,boolean);
}

programManager();
