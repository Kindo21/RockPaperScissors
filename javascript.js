let x = myFunction(4, 3);

function myFunction(a, b){
    return a *  b;
}
console.log(x)


let y = computerPlay();


function computerPlay(){
    const hand = ["rock", "paper", "scissors"];
    let random =  Math.floor(Math.random()*hand.length);
    let randomHand = hand[random];
    return randomHand;
}

console.log(y)