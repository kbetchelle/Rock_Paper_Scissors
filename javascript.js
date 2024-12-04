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
console.log(getComputerChoice());

//initialize scores as global variables 
let playerScore=0;
let computerScore=0;

//create function to play 5 rounds 
function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice =prompt("rock, paper, or scissors?").toLowerCase();
        let computerChoice=getComputerChoice();
        alert(playRound(playerChoice, computerChoice));
    }
}

//create a function determine winner of each round 
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'It\'s a tie! You both chose ' + playerChoice + ' ';
    } else if (playerChoice == "rock" && computerChoice == "scissors" || 
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper")  {
        playerScore ++;
        return 'You win this round! '+playerChoice+' beats '+computerChoice+'';
    } else {
        computerScore ++;
        return 'You\'ve lost :/. '+ computerChoice +' beats ' + playerChoice +'';
    }
}

playGame();
