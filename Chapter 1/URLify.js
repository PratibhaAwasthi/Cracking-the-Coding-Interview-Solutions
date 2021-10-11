"use strict";

function URLify(str, length) {
  const strSplit = str.trim().split("");

  for (let i = 0; i < length; i++) {
    if (strSplit[i] === " ") {
      strSplit[i] = "%20";
    }
  }
  console.log(strSplit.join(""));
}

//Test Cases
URLify(" Mr John Smith ", 13);
