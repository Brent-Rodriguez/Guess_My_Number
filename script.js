'use strict'

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const guess = document.querySelector('.guess')

// MUTABLES
let score = document.querySelector('.score')

// CHECK BUTTON
const checkBtn = document.querySelector('.check')


// GENERATES RANDOM NUMBER
const ranNumber = Math.trunc(Math.random() * 20) +1




let updateScore = 20
number.textContent = ranNumber


// CHECK BUTTON
checkBtn.addEventListener('click', () => {
  const inputValue = Number(guess.value)

  if(!inputValue){ // CHECKS FOR NO INPUT
    message.textContent = '🛑 Please add a Number!'
  } else if(inputValue === ranNumber){
    message.textContent = '🏆 Congrats Number Matched'
  } else if(inputValue > ranNumber){
    message.textContent = '😫 Guess is too high'
    updateScore--
    score.textContent = updateScore
  } else if(inputValue < ranNumber){
    message.textContent = '😫 Guess is too Low'
    updateScore--
    score.textContent = updateScore
  }
})
