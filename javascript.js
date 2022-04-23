
function computerPlay(){
    const hand = ["rock", "paper", "scissors"];
    let random =  Math.floor(Math.random()*hand.length);
    let randomHand = hand[random];
    return randomHand;
}

//let userResult;

let playerSelection;

let computerSelection;
// = computerPlay();

let playerScore = 0;
let computerScore = 0;




let result;


//var score = document.querySelector('#score');
//const computerScoreDOM = document.querySelector('#computerScoreDOM');



function round(computerSelection, playerSelection) {
    
    if (computerSelection === playerSelection){
        if(computerSelection === "rock" && playerSelection === "rock"){
            result = ' both chose rock tie';
        }
        else if(computerSelection === "paper" && playerSelection === "paper"){
            result = 'both chose paper tie';
        }
        else if(computerSelection === "scissors" && playerSelection === "scissors"){
            result = 'both chose scissors tie';
        }
        
    }
    else if(computerSelection != playerSelection){
        if(computerSelection === "rock" && playerSelection === "scissors"){
            result = "Rock beats scissors Computer wins"
            computerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        else if(computerSelection === "rock" && playerSelection === "paper"){
            result = "paper beats rock player wins"
            playerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        else if(computerSelection === "paper" && playerSelection === "rock"){
            result = "paper beats rock computer wins"
            computerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        else if(computerSelection === "paper" && playerSelection === "scissors"){
            result = "scissors beats paper player wins"
            playerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        else if(computerSelection === "scissors" && playerSelection === "rock"){
            result = "rock beats scissors player wins"
            playerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        else if(computerSelection === "scissors" && playerSelection === "paper"){
            result = "scissors beats paper computer wins"
            computerScore++;
            //console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        }
        
    }
    else if (computerScore == 5) {
        console.log ("Computer win!")
        computerScore = 0;
    }
    else if (playerScore == 5){
        console.log ("Player win!")
        playerScore = 0;
    }
    
    return result;
    
}

    
    



/*function game(result){
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Please choose rock paper or scissors");
        playerSelection.toLowerCase();
        round();
        console.log(round(computerSelection, playerSelection));
    }
}*/

//game();




function rock(){
     playerSelection = "rock"
     computerSelection = computerPlay();
    //playerSelection = "rock"
    game(computerSelection, playerSelection);
    console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
    //document.write("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
    document.getElementById('score').textContent = ("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
    
        //playerSelection.toLowerCase();
        //round();
        //console.log(round(computerSelection, playerSelection));
}
function paper(){
    
    playerSelection = "paper"
    computerSelection = computerPlay();
        //playerSelection.toLowerCase();
        //round();
        //console.log(round(computerSelection, playerSelection));
        game(computerSelection, playerSelection);

        console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        document.getElementById('score').textContent = ("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
}
function scissors(){
    
    playerSelection = "scissors"
    computerSelection = computerPlay();
        //playerSelection.toLowerCase();
        //round();
        //console.log(round(computerSelection, playerSelection));
        game(computerSelection, playerSelection);
        console.log("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        document.getElementById('score').textContent = ("computer score: " + " " + computerScore + " " +  "player score: " + playerScore);
        document.getElementById('winner').textContent = ("");
        
        
}

function game(computerSelection, playerSelection){
    //playerSelection = userResult;
    //console.log(playerSelection);
    //console.log(round(computerSelection, playerSelection));
    document.getElementById('selection').textContent = (round(computerSelection, playerSelection));
    if(playerScore === 5){
        document.getElementById('winner').textContent = ("Player is the winner!");
        playerScore = 0;
        computerScore = 0;    
    }
    else if(computerScore === 5){
        document.getElementById('winner').textContent = ("Computer is the winner!");
        playerScore = 0;
        computerScore = 0;    
    }
    
    
}


