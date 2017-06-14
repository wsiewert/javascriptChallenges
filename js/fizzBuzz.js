//--------------------FIZZ BUZZ----------------------->
"use strict";

function runProgram(){
  for(var i = 0; i < 100; i++) {
    let divThree = i%3;
    let divFive = i%5;
    if (i != 0) {
      if(divThree === 0 && divFive === 0){
        console.log(i + "-->FIZZBUZZ");
      } else if (divThree === 0) {
        console.log(i + "-->Fizz");
      } else if (divFive === 0) {
        console.log(i + "-->Buzz");
      }
    }
  }
}

runProgram();
