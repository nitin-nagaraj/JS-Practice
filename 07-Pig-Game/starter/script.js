'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRollDice = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const diceRoll = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  document.querySelector('.current-score').textContent = dice;

  if (dice !== 1) {
    currentScore += dice;
    current0Element.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
};

buttonRollDice.addEventListener('click', diceRoll);
