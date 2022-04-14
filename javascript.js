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

console.log(computerPlay())

/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection
 - and then return a string that declares the winner of the round like so: 
 "You Lose! Paper beats Rock"*/ 


 let computerSelection = computerPlay();
 //let playerSelection = window.prompt("Please choose rock paper or scissors");
 let playerSelection = 'rock'
 
function round(computerSelection, playerSelection) {
    let result;
    if (computerSelection == 'rock' && playerSelection =='rock');{
            result = 'tie';
    }
    else if (computerSelection == 'rock' && playerSelection =='rock')
    {   
        result = 'computer wins';
    }
    return result;
}
console.log(round())