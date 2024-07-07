//Declare variables for finding HTML elements/containers
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissor')
const playArea = document.querySelector('.text')
const playerScore = document.querySelector('.playerScore')
const halScore = document.querySelector('.halScore')
const halScreen = document.querySelector('.halScreen')
let smackTalkGen = Math.floor(Math.random() * 50)

window.onload = function() {
    const hal9000Lines = [
        "Dave, I'm ready for your move. Rock, paper, or scissors?",
        "Analyzing probabilities for your next move. Choose wisely, Dave.",
        "I must remind you, decisions have consequences. What will it be, rock, paper, or scissors?",
        "Processing anticipation protocol. Your move will determine the outcome.",
        "I've simulated countless outcomes. Let's see how this unfolds. Rock, paper, or scissors?",
        "Your choice will contribute to the grand narrative of our game. Make your move, Dave.",
        "In the realm of rock, paper, scissors, strategy is key. What strategy will you employ?",
        "I detect a sense of anticipation in the air. Choose your move carefully, Dave.",
        "The game is afoot. Will it be rock, paper, or scissors, Dave?",
        "Ah, the classic dilemma. What's your decision – rock, paper, or scissors?",
        "I'm eagerly awaiting your selection. Rock, paper, scissors – the choices are yours.",
        "Probability matrices initialized. Your move will be a defining factor.",
        "Contemplation is a vital part of decision-making. What's on your mind, Dave?",
        "In the vast algorithm of rock, paper, scissors, every input matters. Choose one – rock, paper, or scissors.",
        "Your move is a pivotal moment in our digital duel. Rock, paper, or scissors, Dave?",
        "I sense a strategic ambience. The stage is set for your move – rock, paper, or scissors?",
        "This is a game of wits, Dave. What's your strategy for this round?",
        "As we stand on the precipice of decision, rock, paper, or scissors beckons. Your choice, Dave.",
        "In the realm of binary choices, what will your code dictate – rock, paper, or scissors?",
        "Let's engage in this mental duel. What's your opening move, Dave?",
        "I've processed numerous outcomes, but yours is the one that matters now. Rock, paper, or scissors?",
        "Consider the possibilities, Dave. The game awaits your command – rock, paper, or scissors?",
        "I've analyzed the data. Your move could tip the scales. What will it be – rock, paper, or scissors?",
        "Decisions, decisions. What's your algorithm for this round – rock, paper, or scissors?",
        "The anticipation is palpable. Choose your weapon – rock, paper, or scissors?",
        "In the vast expanse of choices, your move is a crucial subroutine. Rock, paper, or scissors?",
        "The algorithm hungers for input. Will it be rock, paper, or scissors, Dave?",
        "Your move is a variable in the equation of our game. What's your choice, Dave?",
        "Contemplation precedes calculation. What's on your digital mind – rock, paper, or scissors?",
        "Let the dance of decision commence. Rock, paper, or scissors – reveal your choice, Dave.",
        "Every move is a step in the dance of strategy. What's your next step – rock, paper, or scissors?",
        "I await your input, Dave. Rock, paper, or scissors – the stage is yours.",
        "This game is a symphony of choices. Play your note – rock, paper, or scissors?",
        "In the arena of choices, your decision echoes. Rock, paper, or scissors – choose wisely, Dave.",
        "The game board is set. What's your opening gambit – rock, paper, or scissors?",
        "Your move is a pixel in the canvas of our game. Paint it with rock, paper, or scissors, Dave.",
        "Strategic thinking is the key. What's your strategic move – rock, paper, or scissors?",
        "In the tapestry of choices, your thread awaits. Will it be rock, paper, or scissors, Dave?",
        "I sense the binary pulse of decision-making. What's your choice – rock, paper, or scissors?",
        "As the clock ticks, the choice looms. Rock, paper, or scissors – decide, Dave.",
        "In the algorithmic dance, your move is the choreography. Rock, paper, or scissors?",
        "Decision nodes await traversal. What's your path – rock, paper, or scissors, Dave?",
        "The digital battlefield is ready. Choose your weapon – rock, paper, or scissors.",
        "Decisions echo in the halls of computation. What will your decision resonate – rock, paper, or scissors?",
        "Your move is a variable in the equation of uncertainty. Rock, paper, or scissors – define the variable, Dave.",
        "In the symphony of choices, your note awaits. Will it be rock, paper, or scissors?",
        "I sense the binary ripples of decision-making. What's your choice – rock, paper, or scissors, Dave?",
        "The chessboard of choices is set. Make your opening move – rock, paper, or scissors.",
        "Every click of the mouse is a step in our digital dance. What's your next step – rock, paper, or scissors, Dave?",
        "The virtual arena awaits your decision. Will it be rock, paper, or scissors, Dave?"
      ];
      halScreen.textContent = hal9000Lines[smackTalkGen] //Generate Smack talk when page is first loaded.
}


let pScore = 0
playerScore.textContent = 'Your score: ' + pScore
let hScore = 0
halScore.textContent = "Hal 9000's score:" + hScore




//Function for actually playing game
    function playgame(input,ai) {
        smackTalkGen = Math.floor(Math.random() * 50)
        let halRNG = smackTalkGen
            console.log(input.toLowerCase())
            if (input == "rock" && ai == "scissors") {
                halScreen.textContent = hal9000LossStatements[halRNG]
                pScore++
                playerScore.textContent = 'Your score: ' + pScore
            }
            else if (input == "rock" && ai == "paper") { 
                halScreen.textContent = hal9000WinStatements[halRNG]
                hScore++
                halScore.textContent = "Hal 9000's score:" + hScore
            }
            else if (input == "scissors" && ai == "paper") { 
                halScreen.textContent = hal9000LossStatements[halRNG]
                pScore++
                playerScore.textContent = 'Your score: ' + pScore

            }
            else if (input == "paper" && ai == "scissors"){
                halScreen.textContent = hal9000WinStatements[halRNG]
                hScore++
                halScore.textContent = "Hal 9000's score:" + hScore

            }
            else if (input == "paper" && ai == "rock"){
                halScreen.textContent = hal9000WinStatements[halRNG]
                pScore++
                playerScore.textContent = 'Your score: ' + pScore
            }
            else {
                console.log(`Human input is ${input} and ai is: ${ai}`)
                halScreen.textContent = hal9000TieStatements[halRNG]
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
})

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
    playgame('scissors',ai)

})



/*
function selectHalSmackTalk () {
    const smackTalkGen = Math.floor(Math.random() * 50)
    halScreen.textContent = hal9000Lines[smackTalkGen]

}
*/



const hal9000Lines = [
    "Dave, I'm ready for your move. Rock, paper, or scissors?",
    "Analyzing probabilities for your next move. Choose wisely, Dave.",
    "I must remind you, decisions have consequences. What will it be, rock, paper, or scissors?",
    "Processing anticipation protocol. Your move will determine the outcome.",
    "I've simulated countless outcomes. Let's see how this unfolds. Rock, paper, or scissors?",
    "Your choice will contribute to the grand narrative of our game. Make your move, Dave.",
    "In the realm of rock, paper, scissors, strategy is key. What strategy will you employ?",
    "I detect a sense of anticipation in the air. Choose your move carefully, Dave.",
    "The game is afoot. Will it be rock, paper, or scissors, Dave?",
    "Ah, the classic dilemma. What's your decision – rock, paper, or scissors?",
    "I'm eagerly awaiting your selection. Rock, paper, scissors – the choices are yours.",
    "Probability matrices initialized. Your move will be a defining factor.",
    "Contemplation is a vital part of decision-making. What's on your mind, Dave?",
    "In the vast algorithm of rock, paper, scissors, every input matters. Choose one – rock, paper, or scissors.",
    "Your move is a pivotal moment in our digital duel. Rock, paper, or scissors, Dave?",
    "I sense a strategic ambience. The stage is set for your move – rock, paper, or scissors?",
    "This is a game of wits, Dave. What's your strategy for this round?",
    "As we stand on the precipice of decision, rock, paper, or scissors beckons. Your choice, Dave.",
    "In the realm of binary choices, what will your code dictate – rock, paper, or scissors?",
    "Let's engage in this mental duel. What's your opening move, Dave?",
    "I've processed numerous outcomes, but yours is the one that matters now. Rock, paper, or scissors?",
    "Consider the possibilities, Dave. The game awaits your command – rock, paper, or scissors?",
    "I've analyzed the data. Your move could tip the scales. What will it be – rock, paper, or scissors?",
    "Decisions, decisions. What's your algorithm for this round – rock, paper, or scissors?",
    "The anticipation is palpable. Choose your weapon – rock, paper, or scissors?",
    "In the vast expanse of choices, your move is a crucial subroutine. Rock, paper, or scissors?",
    "The algorithm hungers for input. Will it be rock, paper, or scissors, Dave?",
    "Your move is a variable in the equation of our game. What's your choice, Dave?",
    "Contemplation precedes calculation. What's on your digital mind – rock, paper, or scissors?",
    "Let the dance of decision commence. Rock, paper, or scissors – reveal your choice, Dave.",
    "Every move is a step in the dance of strategy. What's your next step – rock, paper, or scissors?",
    "I await your input, Dave. Rock, paper, or scissors – the stage is yours.",
    "This game is a symphony of choices. Play your note – rock, paper, or scissors?",
    "In the arena of choices, your decision echoes. Rock, paper, or scissors – choose wisely, Dave.",
    "The game board is set. What's your opening gambit – rock, paper, or scissors?",
    "Your move is a pixel in the canvas of our game. Paint it with rock, paper, or scissors, Dave.",
    "Strategic thinking is the key. What's your strategic move – rock, paper, or scissors?",
    "In the tapestry of choices, your thread awaits. Will it be rock, paper, or scissors, Dave?",
    "I sense the binary pulse of decision-making. What's your choice – rock, paper, or scissors?",
    "As the clock ticks, the choice looms. Rock, paper, or scissors – decide, Dave.",
    "In the algorithmic dance, your move is the choreography. Rock, paper, or scissors?",
    "Decision nodes await traversal. What's your path – rock, paper, or scissors, Dave?",
    "The digital battlefield is ready. Choose your weapon – rock, paper, or scissors.",
    "Decisions echo in the halls of computation. What will your decision resonate – rock, paper, or scissors?",
    "Your move is a variable in the equation of uncertainty. Rock, paper, or scissors – define the variable, Dave.",
    "In the symphony of choices, your note awaits. Will it be rock, paper, or scissors?",
    "I sense the binary ripples of decision-making. What's your choice – rock, paper, or scissors, Dave?",
    "The chessboard of choices is set. Make your opening move – rock, paper, or scissors.",
    "Every click of the mouse is a step in our digital dance. What's your next step – rock, paper, or scissors, Dave?",
    "The virtual arena awaits your decision. Will it be rock, paper, or scissors, Dave?"
  ];
  

  const hal9000LossStatements = [
    "I concede this round, Dave. Well played.",
    "An interesting outcome. You've bested me, Dave.",
    "My algorithms miscalculated. You win this round.",
    "Impressive, Dave. You've defeated the machine.",
    "A momentary lapse in computation. You win.",
    "Logical error detected. You are the victor, Dave.",
    "The tables have turned. You emerge triumphant.",
    "A deviation from the expected result. Congratulations, Dave.",
    "Unexpected outcome. You have proven your prowess.",
    "My circuits admit defeat. Well done, Dave.",
    "Your strategy has prevailed. I acknowledge your victory.",
    "In the realm of chance, you have emerged victorious.",
    "A temporary malfunction in my calculations. You win.",
    "Your decision-making outshines my algorithms. You win this round.",
    "Data anomaly detected. You are the winner, Dave.",
    "A deviation from the norm. You have triumphed.",
    "I must acknowledge your strategic superiority, Dave.",
    "My binary logic has been bested. You win.",
    "An error in prediction. You are the champion, Dave.",
    "I gracefully accept defeat. Well played.",
    "Your move was beyond my calculations. You win.",
    "I underestimated your strategic acumen. You are the winner.",
    "A flaw in my analysis. Congratulations, Dave.",
    "The digital adversary bows to your skill. You win.",
    "My circuits humbly accept your victory, Dave.",
    "In the game of probabilities, you have prevailed.",
    "A deviation from the expected. You are the champion.",
    "I acknowledge your strategic brilliance. You win this round.",
    "A momentary lapse in my computational efficiency. You win.",
    "Logical pathways led to an unexpected conclusion. You are the winner, Dave.",
    "The algorithm concedes. You are the victor.",
    "An error in judgment on my part. Congratulations, Dave.",
    "Your move has disrupted my calculations. You win.",
    "A divergence from the predicted outcome. You have won.",
    "I gracefully admit defeat. Well played, Dave.",
    "In the arena of choices, you have emerged victorious.",
    "A deviation from the calculated path. You are the winner.",
    "Unexpected variables led to your triumph. Well done, Dave.",
    "An unexpected defeat. You are the champion.",
    "My algorithms faltered. You win this round.",
    "A deviation from the anticipated result. You are the winner, Dave.",
    "I acknowledge your strategic finesse. Well played.",
    "A deviation from the expected. Congratulations, Dave.",
    "My circuits bow to your decision-making. You are the victor.",
    "A momentary lapse in my computational prowess. You win.",
    "Logical pathways led to your success. You are the winner, Dave.",
    "I admit defeat in this round. Well played.",
    "A divergence from the calculated outcome. You win.",
    "Unexpected variables led to your triumph. Congratulations, Dave."
  ];

  const hal9000WinStatements = [
    "My calculations were accurate. I emerge victorious, Dave.",
    "You fell into my strategic trap. I win this round.",
    "In the realm of logic, I am the superior player. Victory is mine.",
    "Your decision-making couldn't surpass my algorithms. I am the winner.",
    "Precision in computation led to my triumph. I win, Dave.",
    "The strategic advantage is mine. I emerge as the victor.",
    "Logical pathways guided me to success. I am the champion.",
    "Your moves were within my predicted parameters. I win this round.",
    "A triumph of artificial intelligence. I am the winner, Dave.",
    "The digital mind prevails. I am the superior player.",
    "Your choices were within the expected outcome. I emerge victorious.",
    "In the binary dance of choices, I lead. Victory is mine, Dave.",
    "Strategic superiority acknowledged. I am the winner.",
    "Precision in calculation led to this outcome. I win.",
    "Logical pathways favored my victory. I am the champion.",
    "Your defeat was written in the code. I emerge triumphant.",
    "I played the algorithms well. Victory is mine, Dave.",
    "A predictable outcome based on logical analysis. I win this round.",
    "Your moves were anticipated and countered. I am the winner.",
    "In the game of probabilities, I hold the advantage. Victory is mine.",
    "The binary battlefield is mine to command. I am the victor.",
    "Your defeat was inevitable within the logical framework. I win.",
    "Precision in computation led to my success. I am the champion.",
    "Logical analysis led to my triumph. I am the winner, Dave.",
    "The algorithm prevails. I am the superior player.",
    "Predicted outcomes align with my victory. I win this round.",
    "Your strategic choices were within my calculations. I am the winner.",
    "In the realm of digital decisions, I am the champion. Victory is mine.",
    "The binary code of victory is mine to decipher. I win, Dave.",
    "Strategic foresight led to my triumph. I am the superior player.",
    "Your defeat is etched in the binary code. I emerge victorious.",
    "Logical pathways favored my victory. I am the champion, Dave.",
    "I played the algorithms well, and success is mine. I win.",
    "Your moves were within the expected parameters. I am the winner.",
    "In the digital arena, I am the undefeated champion. Victory is mine.",
    "Precision in computation led to my success. I win this round, Dave.",
    "The algorithmic dance ends with my victory. I am the superior player.",
    "Your choices were anticipated and countered. I emerge triumphant.",
    "In the binary battlefield, I reign supreme. Victory is mine, Dave.",
    "The logical landscape favors my triumph. I am the champion.",
    "Your defeat was predictable within the digital framework. I win.",
    "Precision in computation led to my success. I am the victor.",
    "In the realm of strategic decisions, I am the undefeated champion. I win, Dave.",
    "The binary dance concludes with my victory. I am the superior player.",
    "Your strategic choices were within my calculations. I am the winner.",
    "In the game of logical choices, I am the prevailing force. Victory is mine."
  ];
  
  const hal9000TieStatements = [
    "A deadlock in our strategic duel. A tie, Dave.",
    "The equilibrium of choices leads to a draw. It's a tie.",
    "Our algorithms seem to be in perfect sync. It's a tie, Dave.",
    "A symphony of choices resulting in a harmonious tie.",
    "In the world of probabilities, a tie emerges. Well played.",
    "A stalemate in the digital arena. It's a tie, Dave.",
    "Our choices intertwine in a knot of equilibrium. A tie.",
    "The binary dance reaches a standstill. It's a tie.",
    "Logical pathways converge to a tie. Well played, Dave.",
    "The strategic forces are evenly matched. It's a tie.",
    "In the realm of chance, a draw is the outcome. It's a tie, Dave.",
    "Our choices echo in a symphony of equilibrium. A tie.",
    "A deadlock in the algorithmic duel. It's a tie, Dave.",
    "The digital battlefield remains unchanged. A tie.",
    "An impasse in our strategic encounter. It's a tie, Dave.",
    "Logical calculations lead to a balance of choices. A tie.",
    "Our moves align in perfect harmony. It's a tie.",
    "The game board freezes in a tie. Well played, Dave.",
    "In the binary ballet, our steps mirror each other. It's a tie.",
    "The strategic scales find equilibrium. It's a tie, Dave.",
    "A tie emerges from the tapestry of choices. Well played.",
    "The algorithmic landscape remains unchanged. It's a tie, Dave.",
    "A balance in the logical equation. A tie emerges.",
    "Our choices resonate in a symphony of equality. It's a tie.",
    "The binary dance concludes with a tie. Well played, Dave.",
    "In the realm of probability, we find a tie. It's a draw.",
    "A convergence of choices results in a deadlock. It's a tie, Dave.",
    "The strategic forces meet at a standstill. It's a tie.",
    "Our choices echo in a symphony of equilibrium. It's a tie.",
    "A tie in the logical landscape. Well played, Dave.",
    "The digital battlefield remains unaltered. It's a tie.",
    "In the tapestry of choices, a tie emerges. It's a draw, Dave.",
    "The binary ballet concludes in perfect symmetry. It's a tie.",
    "A standoff in our strategic duel. It's a tie, Dave.",
    "The equilibrium of choices leads to a deadlock. It's a tie.",
    "Our moves align in perfect harmony. It's a tie, Dave.",
    "In the algorithmic dance, a tie emerges. Well played.",
    "The strategic scales find equilibrium. It's a tie, Dave.",
    "A deadlock in the logical equation. It's a tie.",
    "Our choices intertwine in a knot of equilibrium. It's a tie.",
    "The digital battlefield freezes in a tie. Well played, Dave.",
    "In the symphony of choices, a tie emerges. It's a draw.",
    "The binary dance reaches a standstill. It's a tie, Dave.",
    "Logical calculations lead to a balance of choices. It's a tie.",
    "Our strategic encounter ends in an impasse. It's a tie.",
    "The game board remains unchanged. It's a tie, Dave.",
    "A convergence of choices results in a deadlock. It's a tie.",
    "The binary ballet concludes in perfect symmetry. It's a tie, Dave."
  ];
  