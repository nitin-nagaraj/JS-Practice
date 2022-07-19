// LECTURE: Values and Variables

let country = "india";
let continent = "asia";
let population = 10000000000;

console.log(
  "Population of " +
    country +
    "in the continent of " +
    continent +
    "is " +
    population
);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: Data Types

let isIsland = 5;
let language = "kannada";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof null);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: let, const and var

country = 500;
console.log(language);
console.log(typeof country);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: Basic Operators

const finland = 6000000;
country = "india";
let newPopulation = population / 2;
console.log(newPopulation);

const belgium = 6000000;

const description = console.log(
  "Population of " + country + " if it is reduced by half is " + newPopulation
);

newPopulation += 1;
console.log(newPopulation);

console.log(finland < newPopulation);
console.log(newPopulation > population);
console.log(finland == belgium);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

// Coding Challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


// //  //// //  //// //  //// //  //// //  //// //  //// //  //

// LECTURE: Strings and Template Literals

const newDescription = `Population of ${country} ${finland} is the same as ${belgium}`;
console.log(newDescription);

console.log(
  `BMI of Mark which is ${bmiMark} is greather than that of ${bmiJohn}`
);
console.log(`Weight difference of mark and john is ${massJohn - massMark}`);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

// LECTURE: Taking Decisions: if / else Statements


