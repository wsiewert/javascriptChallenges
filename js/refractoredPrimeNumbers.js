//-----------------REFRACTORED PRIME NUMBER CALCULATOR--------------->
//Time copmplexity (N)^2
//Performance: 1 - 1 Million primes takes ~16sec to calculate.

"use strict";

function askRange() {
  let range = prompt("Provide range of prime number check");
  return range;
}

function consoleLogger(isPrime){
  console.log(isPrime + "--> IS PRIME!");
}

function alertPrimeNumberCount(count){
  alert(count + " prime numbers in this range.");
}

//----------------------------CALCULATOR----------------------------->

//Checks for exceptions to quickly skip over checkPrime().
function checkExceptions(currentNumber){
  if (currentNumber % 2 === 0){
    return true;
  } else if (currentNumber % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

//Checks to see if number is prime.
function checkPrime(currentNumber,primesArray){
  let length = Math.floor(primesArray.length / 2) + 1;
  let isPrime = false;

  for (var i = 0; i < length; i++) {
    if(currentNumber % primesArray[i] === 0){
      isPrime = false;
      break;
    }
    if(i === (length-1)){
      isPrime = true;
      break;
    }
  }
  return isPrime;
}

//Iterates through range of numbers & stores global data.
function iterator(range){
  let primesCheckedArray = [];
  let primeNumberCounter = 3;
  primesCheckedArray.push(2,3,5);

  for (var i = 0; i < primesCheckedArray.length; i++) {
    consoleLogger(primesCheckedArray[i]);
  }

  for (var i = 6; i < range; i++) {
    if (checkExceptions(i) === true){
      continue;
    } else if (checkPrime(i,primesCheckedArray) === true) {
      primesCheckedArray.push(i);
      consoleLogger(i);
      primeNumberCounter ++;
    }
  }
  return primeNumberCounter;
}

//Calls Functions In Specific Order.
function programManager(){
  let range = askRange();
  let iterate = iterator(range);
  alertPrimeNumberCount(iterate);
}

programManager();
