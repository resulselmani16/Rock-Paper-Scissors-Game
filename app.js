

console.log("Rock Paper Scissors")

var rpsChoices = ["rock", "paper", "scissors"];

var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
let yourScore = 0;
let cpuScore = 0;
var result = document.getElementById("result")
let cputext = document.getElementById("cpuChoice")


let yourChoice;
let cpuChoice;

rock.addEventListener('click', function(){
    yourChoice = "rock";
    cpuChoice = rpsChoices[Math.floor(Math.random()*3)];
    console.log(cpuChoice)
    if(cpuChoice == "rock"){
        cputext.innerHTML = "CPU chose rock."
        result.innerHTML = "You tied. Try Again"
    }
    else if(cpuChoice == "paper"){
        cputext.innerHTML = "CPU chose paper."
        result.innerHTML = "You lost. Try Again!"
        cpuScore++;
        document.getElementById("cpuScore").innerHTML = cpuScore;
    }
    else{
        cputext.innerHTML = "CPU chose scissors."
        result.innerHTML = "You won!!"
        yourScore++;
        document.getElementById("yourScore").innerHTML = yourScore;
    }

}
)

paper.addEventListener('click', function(){
    yourChoice = "paper";
    cpuChoice = rpsChoices[Math.floor(Math.random()*3)];
    console.log(cpuChoice)
    if(cpuChoice == "paper"){
        cputext.innerHTML = "CPU chose paper."
        result.innerHTML = "You tied. Try Again"
    }
    else if(cpuChoice == "scissors"){
        cputext.innerHTML = "CPU chose scissors."
        result.innerHTML = "You lost. Try Again!"
        cpuScore++;
        document.getElementById("cpuScore").innerHTML = cpuScore;
    }
    else{
        cputext.innerHTML = "CPU chose rock."
        result.innerHTML = "You won!!"
        yourScore++;
        document.getElementById("yourScore").innerHTML = yourScore;
    }
}
)

scissors.addEventListener('click', function(){
    yourChoice = "scissors";
    cpuChoice = rpsChoices[Math.floor(Math.random()*3)];
    console.log(cpuChoice)
    if(cpuChoice == "scissors"){
        cputext.innerHTML = "CPU chose scissors."
        result.innerHTML = "You tied. Try Again"
    }
    else if(cpuChoice == "rock"){
        cputext.innerHTML = "CPU chose rock."
        result.innerHTML = "You lost. Try Again!"
        cpuScore++;
        document.getElementById("cpuScore").innerHTML = cpuScore;
    }
    else{
        cputext.innerHTML = "CPU chose paper."
        result.innerHTML = "You won!!"
        yourScore++;
        document.getElementById("yourScore").innerHTML = yourScore;
    }
}
)

