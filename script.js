const rules ={
    "rock": { "rock": 3, "scissors": 1, "paper": 2 },
    "scissors": { "rock": 2, "scissors": 3, "paper": 1 },
    "paper": { "rock": 1, "scissors": 2, "paper": 3 }
}
const displayOptions =['●1   rock','●2   scissors','●3   paper']
const options = ["rock","scissors","paper"]
const numberOptions =['1','2','3']
let round = 1
let roundsWon = 0
let roundsLost = 0
let playerSelection = ""
let computerSelection = ""
let playerSelectionLowerCase =""
let validInputFlag = true

function playRound(){
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
    function setWinnerOfTheRound(player, computer){
        return rules[player][computer]
    }
    do {
        if(validInputFlag){
            playerSelection = window.prompt(`${'Write an option'}\n${ displayOptions.join("\n")}`);
        }
        else{
            playerSelection = window.prompt(`${'Write an option'}\n${'write a correct input'}\n${ displayOptions.join("\n")}`);
        }
        playerSelectionLowerCase = playerSelection.toLowerCase();
        validInputFlag = options.includes(playerSelectionLowerCase)
        if(numberOptions.includes(playerSelectionLowerCase)){
            switch (playerSelectionLowerCase) {
                case '1':
                    playerSelectionLowerCase = "rock"
                    break;
                case '2':
                    playerSelectionLowerCase = "scissors"
                    break;
                case '3':
                    playerSelectionLowerCase = "paper"
                    break;
            }
            validInputFlag = true;
        }
    } while (!validInputFlag);

    computerSelection = setComputerSelection();
    console.log("you played: ",playerSelectionLowerCase);
    console.log("The evil wizard played: ",computerSelection);
    console.log(`${playerSelectionLowerCase} vs ${computerSelection}`);
    console.log(roundMessage(setWinnerOfTheRound(playerSelectionLowerCase,computerSelection)));
    console.log(`Scores | You:${roundsWon} | Evil wizard:${roundsLost}|`);
    console.log(` Round:${round}`);
    round++;
}

console.log("Disclaimer any scissor, rock or paper were not harmed")
do {
    playRound()
    if(roundsWon == 3 || roundsLost == 3)break
} while (round <= 5);
let finalMessage = "";
if(roundsWon === 3 || roundsWon > roundsLost){
    console.log("you won yeiiiii");
}
else if(roundsLost === 3 || roundsLost > roundsLost){
    console.log("lose");
}
else{
    console.log("draw");
    const playAgain = window.confirm()
}


