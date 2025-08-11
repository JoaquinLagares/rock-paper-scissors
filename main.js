let computerScore = 0;
let userScore = 0;
let roundCount = 0;
const options = document.querySelector('#options')

let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 1) {
        return "ROCK"
    } else if (computerChoice == 2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }

}
let getUserChoice = () => {
    options.addEventListener('click', (event) => {
        let target = event.target
        switch (target.id) {
            case 'rock':
                console.log('rock')
                return 'ROCK'
            case 'paper':
                console.log('paper')
                return 'PAPER'
            case 'scissors':
                console.log("scissors")
                return 'SCISSORS'
        }
    })
}

let comparator = (computerChoice, userChoice) => {
    let result;
    if (computerChoice === userChoice) {
        return "it's a draw"
    }
    else if (computerChoice === 'ROCK') {
        if (userChoice === 'SCISSORS') {
            return 'Computer wins';
        } else if (userChoice == 'PAPER') {
            return 'User wins'
        }
    }
    else if (computerChoice === 'PAPER') {
        if (userChoice === 'ROCK') {
            result = "Computer wins";
        } else if (userChoice == "SCISSORS") {
            return 'User wins'
        }
    }
    else if (computerChoice === 'SCISSORS') {
        if (userChoice === 'PAPER') {
            return 'Computer wins';
        } else if (userChoice == "ROCK") {
            return 'User wins'
        }
    }



}

let playRound = () => {


    options.addEventListener('click', (event) => {
        roundCount++
        let userChoice;
        let target = event.target.id;
        if (!['rock', 'paper', 'scissors'].includes(target)) return;
        switch (target) {
            case 'rock':
                userChoice = 'ROCK'
                break
            case 'paper':
                userChoice = 'PAPER'
                break
            case 'scissors':
                userChoice = 'SCISSORS'
                break
        }
        let computerChoice = getComputerChoice()
        midRound(computerChoice, userChoice)
        if (userScore === 5 || computerScore === 5)
            endRound(computerChoice, userChoice);
    })

}


let midRound = (computerChoice, userChoice) => {

    const div = document.querySelector('#history')
    const pRoundCount = document.createElement('p')
    pRoundCount.textContent = `-----RoundCount: ${roundCount}-----`
    div.appendChild(pRoundCount)
    const pUserChoice = document.createElement('p')
    pUserChoice.textContent = `User choice: ${userChoice}`
    div.appendChild(pUserChoice)
    const pComputerChoice = document.createElement('p')
    pComputerChoice.textContent = `Computer choice: ${computerChoice}`
    document.querySelector('#history').appendChild(pComputerChoice)
    console.log(`user choice: ${userChoice}`)
    let comparison = comparator(computerChoice, userChoice)
    if (comparison === "it's a draw")
        console.log("it's a draw")
    else if (comparison === 'User wins')
        userScore++
    else if (comparison === 'Computer wins')
        computerScore++

    const pUserScore = document.createElement('p')
    pUserScore.textContent = `User score: ${userScore}`
    div.appendChild(pUserScore)
    const pComputerScore = document.createElement('p')
    pComputerScore.textContent = `Computer score: ${computerScore}`
    div.appendChild(pComputerScore)
}
let endRound = () => {

    const div = document.querySelector('#history')
    const result = document.createElement('h1')
    result.textContent = `The winner is: ${computerScore === 5 ? "computer" : "user"}`
    div.appendChild(result)
    userScore = 0;
    computerScore = 0;
}


playRound();

