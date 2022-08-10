'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered 🛑 ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 💡 ';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        'Number is a bit high.... ';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent =
        'Oops you lost the game ';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        'Number is a bit low.... ';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent =
        'Oops you lost the game ';
    }
  }
});
