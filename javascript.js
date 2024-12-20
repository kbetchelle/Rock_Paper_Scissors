/* initialize score 
computerScore equals 1 
humanScore equals 1 

create computerChoice function
    create const variable of all choices [rock, paper, scissors]
    return a random choice of the three varaibles 

create playGame function 
     WHILE the player score and computer score are less than or equal to 5
     playerChoice 
     alert to invoke the playRound function 
     


create playRound function 
*/
// get computer choice 
function getComputerChoice() {
    let choices = ["rock","paper","scissors"]
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice
 }

//view computerChoice selection in console 

//initialize global variables 
let playerScore='';
let computerScore='';
let playerChoice='';
let roundResult='';

//create function to play 5 rounds 
function playGame() {
    if (playerScore === 5 || computerScore === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        alert(`GAME OVER. 
        Player score: ${playerScore} 
        Computer score: ${computerScore}
            `);
    }
} 

//create a function determine winner of each round 
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    } else if (playerChoice == "rock" && computerChoice == "scissors" || 
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper")  {
            return "playerWin"
    } else {
        return "computerWin"
    }
};

//Creating UI
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener('click', () => {
    let playerChoice = button.className;
    let computerChoice = getComputerChoice();
    const displayResult = document.getElementById("result")
    let roundResult = playRound(playerChoice,computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(roundResult);

    if (roundResult === "tie") {
        displayResult.textContent = "It's a tie."
    } else if (roundResult=== "playerWin") {
        displayResult.textContent = `You win. ${playerChoice} beats ${computerChoice}.`
        playerScore ++;
    } else {
        displayResult.textContent = `You lose. ${computerChoice} beats ${playerChoice}.`
        computerScore ++;
    }
    console.log(playerScore);
    console.log(computerScore);
    score();
    playGame();
    }
    )
});

//const playMatch = (playerChoice,computerChoice) => {

function score () {
    const PS = document.getElementById("pScore");
    PS.innerHTML = `Player Score: ${playerScore}`;
    const CS =document.getElementById("cScore");
    CS.innerHTML = `Computer Score: ${computerScore}`;
}



