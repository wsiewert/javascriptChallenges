//---------------------PRIME NUMBER CALCULATOR--------------------->
// Write a program listing every prime number from 1 - 10,000 or var.
// As of now this program will run about 1:25:00 to process 1 Million Primes.
"use strict";

function askMaxNum() {
  let range = prompt("Provide range of prime number check");
  return range;
}

function consoleLogger(isPrime){
  console.log(isPrime + "--> IS PRIME!");
}

function alertPrimeNumberCount(count){
  alert(count + " prime numbers in this range.");
}

function checkPrimeNumber(checkNumber){
  let isPrime = false;
  let halfCheckNumber = Math.floor(checkNumber / 2);
  for(var i = 2; i < halfCheckNumber; i++){
      isPrime = false;
      if(checkNumber % i === 0){
        isPrime = false;
        break;
      }
      if(i === (halfCheckNumber-1)){
        isPrime = true;
        break;
      }
  }
  return isPrime;
}

function checkPreviousPrimes(primesArray,currentNumber){
  let result = false;

  for (var i = 0; i < primesArray.length; i++) {
    if(currentNumber % primesArray[i] === 0 && primesArray[i] != 1){
      result = true;
      break;
    }
  }
  return result;
}

function checkExceptions(currentNumber,primesArray){
  let checkPrime = checkPrimeNumber(currentNumber);
  let checkPrevious = checkPreviousPrimes(primesArray,currentNumber);

  if (currentNumber <= 2 && currentNumber != 0) {
    return true;
  } else if (currentNumber % 2 === 0) {
    return false;
  } else if (currentNumber === 5 || currentNumber === 3){
    return true;
  } else if (currentNumber % 5 === 0){
    return false;
  } else if (checkPrevious === true){
    return false;
  } else {
    return checkPrime;
  }
}

function checkEachNum(range){
  let primesArray = [];
  let isPrime;
  let primeNumberCounter = 0;
  for(var i = 0; i < range; i++){
    isPrime = checkExceptions(i,primesArray);
    if(isPrime === true){
      primesArray.push(i);
      primeNumberCounter += 1;
      consoleLogger(i);
    }
  }
  // console.log(primesArray);
  return primeNumberCounter;
}

function programRun(){
  let range = askMaxNum();
  let primeNumberCount = checkEachNum(range);
  alertPrimeNumberCount(primeNumberCount);
}

programRun();
