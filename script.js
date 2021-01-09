'use strict'

const bgColor = document.querySelector('body')
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
//number.textContent = ranNumber


// CHECK BUTTON
checkBtn.addEventListener('click', () => {
  const inputValue = Number(guess.value)


  //Checks for no input
  if(!inputValue){ 
    message.textContent = '🛑 Add a Number!'

    //When a Player Wins
  } else if(inputValue === ranNumber){
    message.textContent = '🏆 Correct Number'
    bgColor.style.backgroundColor = '#60b347'


    // When guess is to high
  } else if(inputValue > ranNumber){
    if(updateScore > 1){
      message.textContent = '😫 Guess too high'
      updateScore--
      score.textContent = updateScore
    } else {
      message.textContent = 'You lost'
      score.textContent = 0
      bgColor.style.backgroundColor = 'red'
    }
  } else if(inputValue < ranNumber){
    if(updateScore > 1){
      message.textContent = '😫 Guess too Low'
      updateScore--
      score.textContent = updateScore
    } else {
      message.textContent = 'You Lost'
      score.textContent = 0
      bgColor.style.backgroundColor = 'red'
    }
    
  }
})
