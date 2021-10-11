"use strict";
//Javascript Program to determine if a string has all unique characters.

//Function to check if two strings are permute of each other

function arePermutatedStrings(strOne, strTwo) {
  // if lenght of both strings are not equal, they wont   be permute of each other
  if (strOne.length != strTwo.length) {
    return false;
  }
  //Splitting and sorting strings
  let sortedStringOne = strOne.split('').sort().join('');
  let sortedStringTwo = strTwo.split('').sort().join('');
  console.log(sortedStringOne, sortedStringTwo); 

  //comparing sorted strings
    if (sortedStringOne === sortedStringTwo) 
      return true;
    else
    return false;
}
  

//Test cases
let str1 = "abu";
let str2 = 'bca';

if (arePermutatedStrings(str1, str2)) console.log(`True`);
else 
console.log(`False`);

