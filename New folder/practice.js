// const keys = document.querySelectorAll(".key")



// keys.forEach(key => {
//     key.addEventListener("click", () => playNote(key))
// })

// function playNote(key) {
//     const noteAudio = document.getElementById(key.dataset.note)
//     noteAudio.currentTime = 0
//     noteAudio.play()
//     key.
// }






// let countEl = document.getElementById('count-el')

// let count = 0
// function increment() {
//     count += 1
//     console.log(count)
//     countEl.textContent = count
// }


// let saveEl = document.getElementById('save-el')




// function save() {
// let countStr = count + " - "

//     saveEl.textContent += countStr
//     count = 0
//     countEl.textContent = 0
    
// }



const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
console.log(resultDisplay)
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissiors = document.querySelector('#scissors')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice
    genereteComputerChoice()
    getResult()
}))


function genereteComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissores'
    }
    computerChoiceDisplay.textContent = computerChoice
}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win'
    }
    if (computerChoice === "rock" && userChoice === 'scissors') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }

    resultDisplay.innerHTML = result
}


















