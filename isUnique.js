"use strict";
//Javascript Program to determine if a string has all unique characters.
//Using brute force
function uniqueStringCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      } else {
        return true;
      }
      }
    }
  }
var readline = require('readline');
var rl = readline.createInterface(
process.stdin, process.stdout);
rl.question('Please input the string\n', (strInput) => {
console.log('Your string is: ' + strInput);
if (uniqueStringCharacters(strInput)) {
  console.log(`Unique Characters`);
} else {
  console.log(`Non Unique`);
}
});
