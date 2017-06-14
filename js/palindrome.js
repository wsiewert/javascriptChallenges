//-------------DETERMINE IF STRING IS PALINDROME------------>
"use strict";

function askName(){
  let name = prompt("Please provide your name to determine if it's a palindrome:");
  return name;
}

function displayName(name){
  alert(name);
}

function palindromeChecker(name){
  let isPalindrome;
  for (var i = 0; i < name.length; i++) {
    if(name[i] === name[(name.length-1)-i]){
      isPalindrome = true;
      continue;
    } else {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

function programManager(){
  let name = askName();
  let palindrome = palindromeChecker(name);
  displayName(palindrome);
}

programManager();
