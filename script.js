'use strict'

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const guess = document.querySelector('.guess')

const chkBtn = document.querySelector('.check')

// 
chkBtn.addEventListener('click', () => {
  console.log(guess.value)
})
