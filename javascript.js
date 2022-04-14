
function computerPlay(){
    const hand = ["rock", "paper", "scissors"];
    let random =  Math.floor(Math.random()*hand.length);
    let randomHand = hand[random];
    return randomHand;
}


let playerSelection;  

let computerSelection = computerPlay();


let result;

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
        if(computerSelection === "rock" && playerSelection === "scissor"){
            result = "Rock beats scissors Computer wins"
        }
        else if(computerSelection === "rock" && playerSelection === "paper"){
            result = "paper beats rock player wins"
        }
        else if(computerSelection === "paper" && playerSelection === "rock"){
            result = "paper beats rock computer wins"
        }
        else if(computerSelection === "paper" && playerSelection === "scissors"){
            result = "scissors beats paper player wins"
        }
        else if(computerSelection === "scissors" && playerSelection === "rock"){
            result = "rock beats scissors player wins"
        }
        else if(computerSelection === "scissors" && playerSelection === "paper"){
            result = "scissors beats paper computer wins"
        }

    }
    
    return result;
    
}
function game(result){
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Please choose rock paper or scissors");
        playerSelection.toLowerCase();
        round();
        console.log(round(computerSelection, playerSelection));
    }
}

game();






