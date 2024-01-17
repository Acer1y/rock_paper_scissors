/*
Create a rock paper scissors Game
    Player vs Computer
    Prompts user for rock, paper, or scissors
    Play for one round only
        Rock beats scissors
        paper beats rock
        scissors beats paper
    Computer's player is random generated

    To do: 
    Create variable to prompt for input (choose rock, paper scissors)
    Create function to generate the computers hand
    Create function to play game
        rock beats scissor
        paper beats rock
        scissors beats paper
            compare AI to player hands. Logic should be like above
    Include a tie breaker
        */

    let input = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(input)


   let ai = computer()
   
   function computer() {
        let computerhand = Math.random() * 100
        if (computerhand <= 33) {
            computerhand = "rock"
        }
        else if (computerhand <=66) {
            computerhand = "paper"
        }
        else {
            computerhand = "scissors"
        }
        return computerhand
    }


    function playgame(input,ai) {
            console.log(input.toLowerCase())
            if (input == "rock" && ai == "scissors") /*AI has rock */ {
                console.log ("You won!")
                console.log("you had " + input && "ai had " + ai) 
            }
            else if (input == "rock" && ai == "paper") { // AI has rock
                console.log("You lost!")
                console.log("you had " + input && "ai had " + ai) 
            }
            else if (input == "scissors" && ai == "paper") { // AI has rock
                console.log("You won!")
                console.log("you had " + input && "ai had " + ai)  
            }
            else if (input == "paper" && ai == "scissors"){
                console.log("You lost!")
                console.log("you had " + input && "ai had " + ai)  
            }
            else if (input == "paper" && ai == "rock"){
                console.log("You won!")
                console.log("you had " + input && "ai had " + ai)  
            }
            else {
                console.log("You tied, tie breaker!")
                console.log("you had " + input && "ai had " + ai) 
            }
            }


    playgame(input,ai)