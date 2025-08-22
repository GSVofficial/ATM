//card details
var cardNum = document.querySelector('.card-number')
var cardName = document.querySelector('.holder-name')
var Cardexp = document.querySelector('.exp-date')

//input from user
var userName = document.querySelector('#card-name')
var userNum = document.querySelector('#card-num')
var userExp = document.querySelector('#card-exp')

userName.addEventListener('input',()=>{
    cardName.textContent = userName.value
})
userNum.addEventListener('input',()=>{
    cardNum.textContent = userNum.value
})
userExp.addEventListener('input',()=>{
    Cardexp.textContent = userExp.value
})