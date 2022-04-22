
/*let scissor = document.createElement("button");
scissor.innerHTML = "Scissor";

var body = document.getElementsByTagName("body")[0];
body.appendChild(scissor);

scissor.addEventListener ("click", function() {
    alert("You picked scissor")
})

let rock = document.createElement("button");
rock.innerHTML = "Scissor";

var body = document.getElementsByTagName("body")[1];
body.appendChild(rock);

rock.addEventListener ("click", function() {
    alert("You picked rock")
})

let paper = document.createElement("button");
paper.innerHTML = "Scissor";

var body = document.getElementsByTagName("body")[2];
body.appendChild(paper);

paper.addEventListener ("click", function() {
    alert("You picked paper")
})*/


/*var Chapter = ["rock", "paper", "scissor"];
for (i = 0; i < 3; i++) {
    var button = document.createElement("button");
    button.innerHTML = Chapter[i];
    button.className = "btn btn-outline-success";
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
}*/

/*let i = 1;
let body = document.getElementsByTagName("body")[0];

for (i; i <= 3; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'Button '+i;
  body.appendChild(button);
  button.addEventListener ("click", function() {
    alert(this.innerHTML);
  });
}*/

/*const handSign = ["rock", "paper", "scissor"];
handSign.forEach(buttonCreate);
function buttonCreate(){
    let button = document.createElement("button");
    button.innerHTML
}

*/
function computerPlay(){
    const hand = ["rock", "paper", "scissors"];
    let random =  Math.floor(Math.random()*hand.length);
    let randomHand = hand[random];
    return randomHand;
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>
        game()
    )
}
)



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
    //for (let i = 0; i < 5; i++){
        playerSelection = window.prompt("Please choose rock paper or scissors");
        playerSelection.toLowerCase();
        round();
        console.log(round(computerSelection, playerSelection));
    //}
}

game();






