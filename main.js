let computerScore = 0;
let userScore = 0;

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
    let userChoice = prompt("Choose rock, paper or scissors");
    return userChoice.toUpperCase();
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
    let computerChoice = getComputerChoice();
    console.log(computerChoice)
    let userChoice = getUserChoice();
    let comparison = comparator(computerChoice, userChoice)
    if (comparison === "it's a draw")
        console.log("it's a draw")
    else if (comparator(computerChoice, userChoice) === 'User wins')
        userScore++
    else
        computerScore++
    console.log(`User score: ${userScore}`)
    console.log(`Computer score: ${computerScore}`)
}

let playGame = () => {
    let winner;
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (userScore > computerScore)
        winner = "user"
    else
        winner = "computer"
    console.log(`The winner is: ${winner}`)
}

alert("be ready to choose for the upcoming rock paper scissors game thay you are facing against a super technologycal pc. powered to destroy u")
playGame();
