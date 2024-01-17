/*
To do list:
Create event listeners:
    Rock Button
    Paper Button
    Scissors button
Change play function to run when button is pressed
Create point system
Make function that updates score on page

hal smack talk:
Find way to pick a line from list
Draw line above play buttons
smack talk is generated every time a button is clicked and on page load for first time.
*/

//Declare variables for finding HTML elements/containers
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissor')
const playArea = document.querySelector('.text')
const playerScore = document.querySelector('.playerScore')
const halScore = document.querySelector('.halScore')

let pScore = 0
playerScore.textContent = 'Your score: ' + pScore
let hScore = 0
halScore.textContent = "Hal 9000's score:" + hScore



//Function for actually playing game
    function playgame(input,ai) {
            console.log(input.toLowerCase())
            if (input == "rock" && ai == "scissors") /*AI has rock */ {
                playArea.textContent = "You won! " + "Hal chose " + ai
                pScore++
                playerScore.textContent = 'Your score: ' + pScore


            }
            else if (input == "rock" && ai == "paper") { // AI has rock
                playArea.textContent = "You lost! " + "Hal chose " + ai
                hScore++
                halScore.textContent = "Hal 9000's score:" + hScore
            }
            else if (input == "scissors" && ai == "paper") { // AI has rock
                playArea.textContent = "You won! " + "Hal chose" + ai
                pScore++
                playerScore.textContent = 'Your score: ' + pScore

            }
            else if (input == "paper" && ai == "scissors"){
                playArea.textContent = "You lost!" + "Hal chose " + ai
                hScore++
                halScore.textContent = "Hal 9000's score:" + hScore

            }
            else if (input == "paper" && ai == "rock"){
                playArea.textContent = "You won! " + "Hal chose " + ai
                pScore++
                playerScore.textContent = 'Your score: ' + pScore
            }
            else {
                playArea.textContent = "You tied, try again!"
            }
            }

rockButton.addEventListener('click', () => {
    //Function to generate hal's play for game function
    let ai = computer()
   
    function computer() {
         let computerhand = Math.random() * 100
         console.log(computerhand)
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
    playgame('rock',ai)

})

paperButton.addEventListener('click', () => {
    //Function to generate hal's play for game function
    let ai = computer()
   
    function computer() {
         let computerhand = Math.random() * 100
         console.log(computerhand)
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
    playgame('paper',ai)

    scissorButton.addEventListener('click', () => {
        //Function to generate hal's play for game function
        let ai = computer()
       
        function computer() {
             let computerhand = Math.random() * 100
             console.log(computerhand)
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
        playgame('scissor',ai)
    
    })

})



