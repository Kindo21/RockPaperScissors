/*let x = myFunction(4, 3);

function myFunction(a, b){
    return a *  b;
}
console.log(x)*/


/*let y = computerPlay();*/


function computerPlay(){
    const hand = ["rock", "paper", "scissors"];
    let random =  Math.floor(Math.random()*hand.length);
    let randomHand = hand[random];
    return randomHand;
}

//console.log(computerPlay())

/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection
 - and then return a string that declares the winner of the round like so: 
 "You Lose! Paper beats Rock"*/ 


 //rocklet computerSelection = computerPlay();
 let playerSelection;  
 //let playerSelection = 'rock'
 let computerSelection = computerPlay();

//const computerSelection = "rock"; 
//const playerSelection = "scissor";


function round(computerSelection, playerSelection) {
    let result;
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

for (let i = 0; i < 5; i++){
    playerSelection = window.prompt("Please choose rock paper or scissors");
    playerSelection.toLowerCase();
    round();
    console.log(round(computerSelection, playerSelection));
}






