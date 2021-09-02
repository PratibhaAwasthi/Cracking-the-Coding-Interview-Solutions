"use strict";

function oneWay(strOne, strTwo) {
  if (strOne.length === strTwo.length) {
    if (replace(strOne, strTwo)) {
      console.log(`One edit away`);
    } else {
      console.log(`No edit away`);
    }
  } else {
    if (insert(strOne, strTwo)) {
      console.log(`One edit away`);
    } else if (remove(strOne, strTwo)) {
      console.log(`One edit away`);
    } else {
      console.log(`No edit away`);
    }
  }
}

function replace(strOne, strTwo) {
  let foundDifference = false;
  for (let i = 0; i < strOne.length; i++) {
    if (strOne.charAt(i) != strTwo.charAt(i)) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function insert(strOne, strTwo) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < strOne.length && index2 < strTwo.length) {
    if (strOne.charAt[index1] != strTwo.charAt[index2]) {
      if (index1 != index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
}

//Test code
oneWay("pale", "bake");
