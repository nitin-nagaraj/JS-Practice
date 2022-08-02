"use strict";

//  // // // // // // // // // // // // // //
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  const temp = `${country} has a population of ${population} and it's capital city is ${capitalCity}`;
  return temp;
}

const temp = console.log(describeCountry("India", 1000000000000, "Delhi"));
const temp2 = console.log(describeCountry("Brazil", 20000000000, "Rio"));
const temp3 = console.log(describeCountry("USA", 100000000, "W.D.C"));

//  // // // // // // // // // // // // // //
// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentPopChina = percentageOfWorld1(100);
const percentPopIndia = percentageOfWorld2(10000);
console.log(percentPopChina, percentPopIndia);

// Function Declaration
const multi = multiply(5);


function multiply(a) {
    return a*a;
}

console.log(multi)

// Function Expression


const mul = function multiply1(b) {
    return b*b;
}

const multi2 = mul(5);

console.log(multi2)


//  // // // // // // // // // // // // // //
// LECTURE: Arrow Functions


const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(percentageOfWorld3(1000000));

const additiong = (a , b ,c) => {
    const k = a + b;
    const d = k*k;
    return d;
}

const bbb = additiong(1,2,3)
console.log(bbb)

//  // // // // // // // // // // // // // //
// LECTURE: Functions Calling Other Functions


