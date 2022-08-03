// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding Challenge #1

const arr = [17, 21, 23];
const arr2 = [12,5,-5,0,4]

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}C in ${i+1} day`)
  }
}

printForecast(arr);

function printForecast2(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      console.log(`${arr2[i]}C in ${i+1} day`)
    }
  }
  
  printForecast(arr2);