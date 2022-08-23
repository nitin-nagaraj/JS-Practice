'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// const {name,starterMenu,openingHours} = restaurant;
// console.log(name,starterMenu,openingHours);


// const {sat:{open}} = openingHours;
// console.log(open)


// let [first,,second] = restaurant.categories;
// console.log(first,second);

// [first,second] = [second,first]
// console.log(first,second);

// console.log(restaurant.order(2,0)) 
// const [starter, mainCourse] = restaurant.order(2,0)
// console.log(starter,mainCourse)

const arr1 = [4,8,9]
const arr2 = [...arr1,5,8]
console.log(arr1);
console.log(arr2);

const newMenu = [...restaurant.starterMenu,...restaurant.mainMenu]
console.log(newMenu)



