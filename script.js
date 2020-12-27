'use strict'

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const guess = document.querySelector('.guess')

// CHECK BUTTON
const checkBtn = document.querySelector('.check')


// GENERATES RANDOM NUMBER
const ranNumber = Math.trunc(Math.random() * 20) +1
number.textContent = ranNumber


// CHECK BUTTON
checkBtn.addEventListener('click', () => {
  const inputValue = Number(guess.value)

  if(!inputValue){
    message.textContent = '🛑 Please add a Number!'
  } else if(inputValue === ranNumber){
    message.textContent = '🏆 Congrats Number Matched'
  } else if(inputValue > ranNumber){
    message.textContent = '😫 Guess is too high'
  } else if(inputValue < ranNumber){
    message.textContent = 'Guess is too Low'
  }
})
