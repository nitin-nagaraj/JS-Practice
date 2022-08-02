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
  return a * a;
}

console.log(multi);

// Function Expression

const mul = function multiply1(b) {
  return b * b;
};

const multi2 = mul(5);

console.log(multi2);

//  // // // // // // // // // // // // // //
// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(percentageOfWorld3(1000000));

const additiong = (a, b, c) => {
  const k = a + b;
  const d = k * k;
  return d;
};

const bbb = additiong(1, 2, 3);
console.log(bbb);

//  // // // // // // // // // // // // // //
// LECTURE: Functions Calling Other Functions

const describePopulation = function (country, population) {
  const describe = percentageOfWorld1(population);
  return `${country} that has a population of ${population}, which is about ${describe}% of the world  `;
};

console.log(describePopulation("India", 423423453));
console.log(describePopulation("China", 321442345242343));

console.log(describePopulation("Pakistan", 7523423453));

const describePopulation1 = (country, population) => {
  const describe1 = percentageOfWorld1(population);
  return `${country} that has a population of ${population}, which is about ${describe1}% of the world  `;
};
console.log(describePopulation1("USA", 8273498237423423));

//  // // // // // // // // // // // // // //
//  // // // // // // // // // // // // // //
// Coding Challenge #1

let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
  }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(576, 111);

//  // // // // // // // // // // // // // //
// LECTURE: Introduction to Arrays

const populations = [123123, 3464532, 98786734];
console.log(populations);


const percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2])];
console.log(percentages)

//  // // // // // // // // // // // // // //
// LECTURE: Basic Array Operations (Methods)