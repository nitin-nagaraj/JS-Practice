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

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
];
console.log(percentages);

const newArraysss = ["hello", 1, 7, "Bye", percentages];
console.log(newArraysss);

//  // // // // // // // // // // // // // //
// LECTURE: Basic Array Operations (Methods)

const neighbours = ["Pakistan", "China", "Nepal"];
console.log(neighbours);
neighbours.push("Bhutan");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.push("SriLanka");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not an asian country");
}

const position = neighbours.indexOf("Pakistan");
console.log(position);

neighbours.splice(position, 1, "Nepalis");
console.log(neighbours);

//  // // // // // // // // // // // // // //
// Coding Challenge #2

function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

const bill = [125, 555, 44];
console.log(`Bill array is`, bill);
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(`Tip array is`, tip);

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(`Total bill array is`, total);

//  // // // // // // // // // // // // // //
// LECTURE: Introduction to Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Kannada",
  population: 1300000000000,
  neighbours: ["Pakistan", "Nepal", "China"],

  describe: function () {
    console.log(
      `${this.country} has the capital city ${this.capital} and has a population of ${this.population} and neighbour ${this.neighbours[0]}`
    );
  },

  chceckIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    console.log(this.isIsland);
  },
};

console.log(myCountry);

//  // // // // // // // // // // // // // //
// LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has a the capital city ${myCountry.capital} and has a population of ${myCountry.population}`
);
console.log(
  `${myCountry.country} neighbours are ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, and ${myCountry.neighbours[2]}`
);

myCountry.population += 500;
console.log(myCountry.population);
myCountry["population"] -= 500;
console.log(myCountry.population);

//  // // // // // // // // // // // // // //
// LECTURE: Object Methods

myCountry.describe();
myCountry.chceckIsland();

//  // // // // // // // // // // // // // //
// Coding Challenge #3

const bmiMark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmiValueMark = this.mass / (this.height * this.height);
    return this.bmiValueMark;
  },
};

console.log(bmiMark.calcBMI());

const bmiJohn = {
  name: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmiValueJohn = this.mass / (this.height * this.height);
    return this.bmiValueJohn;
  },
};
console.log(bmiJohn.calcBMI());

if (bmiMark.bmiValueMark > bmiJohn.bmiValueJohn) {
  console.log(
    `Mark's BMI of ${bmiMark.bmiValueMark} is more than John's BMI of ${bmiJohn.bmiValueJohn}`
  );
} else {
  console.log(
    `John's BMI of ${bmiJohn.bmiValueJohn} is more than Mark's BMI of ${bmiMark.bmiValueMark}`
  );
}

//  // // // // // // // // // // // // // //
// LECTURE: Iteration: The for Loop

let count = 50;
for (let i = 1; i <= 50; i++) {
  console.log(`Voter Number ${i} is currently voting`);
}

//  // // // // // // // // // // // // // //
// LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];
for (let j = 0; j < populations.length; j++) {
  console.log(populations[j]);
}

for (let i = 0; i < populations.length; i++) {
  const temp = percentageOfWorld1(populations[i]);
  percentages2.push(temp);
}

for (let i = 0; i < percentages2.length; i++) {
  console.log(percentages2[i]);
}

console.log(percentages);

//  // // // // // // // // // // // // // //
// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//  // // // // // // // // // // // // // //
// LECTURE: The while Loop

const percentages3 = [];

let j = 0;
while (j < populations.length) {
  const temp1 = percentageOfWorld1(j);
  percentages3.push(temp1);
  j++;
}
console.log(percentages3);

//  // // // // // // // // // // // // // //
// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const temp = calcTip(bills[i]);
  tips.push(temp);
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

let sum = 0;
let average2 =0;
function calcAverage2(arr) {
  for (let i = 0; i < bills.length; i++) {
    sum = bills[i] + sum;
  }
  average2 = sum/bills.length;
}

calcAverage2(bills);
console.log(sum);
console.log(average2)

// calcAverage2(bills);
// console.log(sum);
// console.log(average2)
