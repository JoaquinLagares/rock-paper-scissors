let computerScore = 0;
let userScore = 0;
let roundCount = 1;
const player = document.querySelector('#player')
const playerPoints = document.querySelector('#player-points')
const computer = document.querySelector('#computer')
const computerPoints = document.querySelector('#computer-points')
const pResult = document.querySelector('#result')
const options = document.querySelector('#options')

playerPoints.textContent = `Player points: ${userScore}`;
computerPoints.textContent = `Computer points: ${computerScore}`;
let picks = ['ROCK', 'PAPER', 'SCISSORS']

const victorias = {
    ROCK: 'SCISSORS',
    PAPER: 'ROCK',
    SCISSORS: 'PAPER'
}

let getComputerChoice = () => {
    return picks[Math.floor(Math.random() * picks.length)]
}

let comparator = (computerChoice, userChoice) => {
    if (computerChoice === userChoice) return `it's a draw`
    else if (victorias[computerChoice] === userChoice) {
        computerScore++;
        return 'computer wins';
    }
    else {
        userScore++;
        return 'user wins';
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
        pResult.textContent = `This round ${comparator(computerChoice, userChoice)}`

        playerPoints.textContent = `Player points: ${userScore}`;
        computerPoints.textContent = `Computer points: ${computerScore}`;
        if (userScore === 5 || computerScore === 5) {
            playerPoints.textContent = `Player points: ${userScore}`;
            computerPoints.textContent = `Computer points: ${computerScore}`;
            setTimeout(() => {
                alert(`Game finished ${userScore === 5 ? "player wins" : "computer wins"}`);
                userScore = 0;
                computerScore = 0;
                playerPoints.textContent = `Player points: ${userScore}`;
                computerPoints.textContent = `Computer points: ${computerScore}`;
            }, 50)
        }

    })




}

playRound()
