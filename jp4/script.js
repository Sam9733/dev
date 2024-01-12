let rand = Math.round(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess))
        alert('Please enter a valid number')
    else if (guess < 1 || guess > 100)
        alert('Please enter a number between 1 and 100')
    else{
        prevGuess.push(guess)
        displayGuess(guess)
        if(numGuess===11)
        {
            displayMsg(`Game Over. The Random Number was :- ${rand}`)
            endGame()
        }
        else{
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===rand)
    {
        displayMsg(`Congrats! You Won🎉🎉`)
        endGame()
    }
    else if(guess<rand)
    {
        displayMsg(`Your Guess is low, Bring it UP ⬆`)
    }
    else
    displayMsg(`Your Guess is high, Bring it DOWN ⬇`)
}

function displayGuess(guess) {
    userInput.value = ''         //cleaning the guess
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
   const newGameBtn= document.querySelector('#newGame')
   newGameBtn.addEventListener('click',function(event){
    rand = Math.round(Math.random() * 100 + 1)
   prevGuess=[]
   numGuess=1
   guessSlot.innerHTML=''
   remaining.innerHTML=`${11-numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true
   })
}