'use strict';

const calcAge = function (year){
    console.log(2050 - year);
    console.log(this);    
}
calcAge(1991)

