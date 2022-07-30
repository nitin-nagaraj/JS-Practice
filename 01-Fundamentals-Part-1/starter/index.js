// LECTURE: Values and Variables

let country = "india";
let continent = "asia";
let population = 10000000000;
population>=10000000000 ? console.log("Wowwwwwwww") : console.log("Oops");

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

const finland = 600000;
country = "india";
let newPopulation = population / 2;
console.log(newPopulation);

const belgium = 6000005;

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

if (finland > belgium) {
  console.log("Portugal's population is above average");
} else if (finland >= belgium) {
  console.log("Portugal's population is 22 million below average");
}
console.log("Blabla");

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

//  Coding Challenge #2

if (bmiMark < bmiJohn) {
  console.log(
    `John's BMI of ${bmiJohn} is higher than than of Mark's ${bmiMark} BMI`
  );
} else {
  console.log(
    `John's BMI of ${bmiJohn} is lower than than of Mark's ${bmiMark} BMI`
  );
}

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: Type Conversion and Coercion
console.log("9" - "5");
console.log("19" - "13" + 17);
"123" < 57;
console.log(5 + 6 + "4" + 9 - 4 - 2);

const year = "2020.0000";
console.log(year);
const year2 = Number(year * 4);
console.log(year2 / year);

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

// LECTURE: Equality Operators: == vs. ===

// // let numNeighbours = prompt('How many neighbour countries does your country have?');

// // console.log(numNeighbours);
// // console.log(typeof numNeighbours)
// // parseInt(numNeighbours)
// // console.log(typeof numNeighbours)

// if (numNeighbours === 1){
//   console.log("Only1border!")
// } else if (numNeighbours > 1){
//   console.log("Morethan1border")
// } else {
//   console.log("Noborders")
// }

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

let age = 32;

if (age !== 32) {
  console.log("True");
} else if (age >= 20 && age < 30) {
  console.log("Age is greater than equal 20 and less than 30");
} else if (age >= 20 || age < 40) {
  console.log("age more than 30");
}

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: Logical Operators

/*
let speaksEnglish = prompt("Enter the language");
let lessPopulation = prompt("Enter the population");
let isanIsland = prompt("Enter yes or no");

if (speaksEnglish === 'english' && lessPopulation < 50 && isIsland) {
  console.log("You should live in Scotland");
} else {
  console.log("You should probably live somewhere else");
}

*/

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// Coding Challenge #3

let dolp1 = 97;
let dolp2 = 112;
let dolp3 = 105;
let koa1 = 109;
let koa2 = 95;
let koa3 = 106;

let avgOfDolp = (dolp1 + dolp2 + dolp3) / 3;
let avgOfKoa = (koa1 + koa2 + koa3) / 3;

console.log(avgOfDolp);
console.log(avgOfKoa);

if (avgOfDolp === avgOfKoa && avgOfDolp > 100 && avgOfKoa > 100) {
  console.log("It's a draw");
} else if (avgOfDolp > avgOfKoa && avgOfDolp > 100) {
  console.log("Dolphins win");
} else if (avgOfKoa > avgOfDolp && avgOfKoa > 100) {
  console.log("Koalas win");
} else {
  console.log("No one wins");
}

// //  //// //  //// //  //// //  //// //  //// //  //// //  //
// LECTURE: The switch Statement

const languages = "englkannadaish";

switch (languages) {
  case "mandarin":
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place in number of native speakers");
    break;
  case "hindi":
    console.log("4th place in number of native speakers");
    break;
  case "arabic":
    console.log("5th place in number of native speakers");
    break;
  default:
    console.log("Great");
}

// //  //// //  //// //  //// //  //// //  //// //  //// //  //

