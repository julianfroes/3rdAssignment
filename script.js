const rules ={
    "rock": { "rock": 3, "scissors": 1, "paper": 2 },
    "scissors": { "rock": 2, "scissors": 3, "paper": 1 },
    "paper": { "rock": 1, "scissors": 2, "paper": 3 }
}
const options = ["rock","scissors","paper"]
let round = 1
let roundsWon = 0
let roundsLost = 0
let playerSelection = "rock"
let computerSelection = "rock"

function playRound(){
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    function roundMessage(result){
        switch(result){
            case 1:
                roundsWon++; 
                return "You won the round";
            case 2:
                roundsLost++; 
                return "You lost the round";    
            case 3: 
                return "This round was a draw";
        }
        
    }
    function setComputerSelection(){
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return("rock");
            case 1:
                return("scissors");
            case 2:
                return("paper");
        }
    }
    function setWinnerOfTheRound(){
        return rules[playerSelectionLowerCase][computerSelection]
    }
    playerSelection = window.prompt(`${'Write an option'}\n${ options.join("\n")}`);
    computerSelection = setComputerSelection();
    console.log("you played: ",playerSelection);
    console.log("The evil wizard played: ",computerSelection);
    console.log(`${playerSelection} vs ${computerSelection}`);
    console.log(roundMessage(setWinnerOfTheRound()));
    console.log(`Scores | You:${roundsWon} | Evil wizard:${roundsLost}|`);
    console.log(` Round:${round}`);
    round++;
}

console.log("Disclaimer any scissor, rock or papper were not harmed")
do {
    playRound()
} while (round <= 5 || roundsWon == 3 || roundsLost == 3);
if(roundsWon === 3 || roundsWon > roundsLost){
    console.log("you won yeiiiii");
}
else if(roundsLost === 3 || roundsLost > roundsLost){
    console.log("lose");
}
else{
    console.log("draw");
}


