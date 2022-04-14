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
 //let playerSelection = window.prompt("Please choose rock paper or scissors");
 //let playerSelection = 'rock'
 //let computerSelection = 'rock';
 /*if (computerSelection == 'rock' && playerSelection =='rock' || computerSelection == 'paper' && playerSelection == 'paper' || computerSelection == 'scissor' && playerSelection == 'scissor'){
    result = 'tie';
}
else if(computerSelection == 'scissor' && playerSelection =='rock'){
    result = 'computer loses'
}
else if(computerSelection == 'paper' && playerSelection =='rock'){
result = 'computer wins'
}
else if(playerSelection == 'scissor' && computerSelection == 'rock'){
result = 'player loses'
}
else if(){

}
else {
result = 'you suck!'
};*/
const computerSelection = "rock"; 
const playerSelection = "scissor";


function round(computerSelection, playerSelection) {
    let result;
    if (computerSelection === playerSelection){

        result = 'tie';
    }
    else if(computerSelection != playerSelection){
        if(computerSelection === "rock" && playerSelection === "scissor"){
            result = "Computer wins"
        }
        else if(computerSelection === "rock" && playerSelection === "paper"){
            result = "player wins"
        }

    }
    
    return result;
    
}

//computerPlay();
console.log(round(computerSelection, playerSelection));




