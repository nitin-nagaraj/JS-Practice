'use strict';

// console.log(document.querySelector('.message').textContent) 

// console.log(document.querySelector('.message').textContent) 

// document.querySelector('.message').textContent = "That's the Correct Number"
// document.querySelector('.number').textContent = 16;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 13;

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;

    if(!guess){
        document.querySelector('.message').textContent = 'No Number Entered 🛑 '
    }
})