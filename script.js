//have two vars for the ai's choice and for for the player's choice
let aiChoice;
let playerChoice;

//have 2 constants for the html ai choice and player choice boxes
const playerChoiceBox = document.querySelector(".playerChoice");
const aiChoiceBox = document.querySelector(".aiChoice");

//have 3 constants each with the button and the option they represent
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

//make a string array with the 3 possible choices {"rock"} {"paper"} {"scissors"}
let possibleChoices = ["Rock", "Paper", "Scissors"];

//make two ints for both the player and the ai's score
let aiScore = 0;
let playerScore = 0 ;

//have 2 constants for the player and ai's html score elements
const aiScoreBox = document.querySelector(".aiScoreBox");
const playerScoreBox = document.querySelector(".playerScoreBox");




//make a function called aiChoiceRandomiser
function aiChoiceRandomiser()
{
    //make a var that is randomly assigned a number between 1 to 3
    let randomNumber = Math.floor(Math.random() * 3);
    //depending on the number assign the ai a choice, either rock or paper or scizzors
    aiChoice = possibleChoices[randomNumber];
    aiChoiceBox.textContent = possibleChoices[randomNumber];
 
}


rockButton.addEventListener('click', function(e)
{
    
    playerChoice = possibleChoices[0];
    
    playerChoiceBox.textContent = possibleChoices[0];
    battle(1, playerChoice);
})
paperButton.addEventListener('click', function(e)
{
    playerChoice = possibleChoices[1];
    playerChoiceBox.textContent = possibleChoices[1];
    battle(1, playerChoice);
})
scissorButton.addEventListener('click', function(e)
{
    playerChoice = possibleChoices[2];
    playerChoiceBox.textContent = possibleChoices[2];
    battle(1, playerChoice);
})

//make a function called battle
function battle(rounds, playerchoice)
{
    //make a for loop that repeats the process of the game
    for(let i = 0; i < rounds; i++)
    {
        aiChoiceRandomiser()
        victoryDecider(playerchoice,aiChoice)
    }
    if(aiScore == 5)
    {
        aiScoreBox.textContent = "WINNER";
        aiScoreBox.style.fontSize = "50px";
        aiScore = 0;
        playerScore = 0;
    }
    else if(playerScore == 5)
    {
        console.log("player won")
        playerScoreBox.textContent = "WINNER";
        playerScoreBox.style.fontSize = "50px";
        playerScore = 0;
        aiScore = 0;
    }
    else
    {
        aiScoreBox.style.fontSize = "150px";
        playerScoreBox.style.fontSize = "150px";
        aiScoreBox.textContent = aiScore;
        playerScoreBox.textContent = playerScore;
    }
   
    
    
    
}


//make a function called victoryDecider that takes 2 inputs, the ai one and player one
function victoryDecider(playerChoice, aichoice)
{
    
    

    //make a if statement if both the player and the ai chose the same
    if(playerChoice == aichoice)
    {
        aiScore += 0;
        playerScore += 0;
        
        
    }

    //make an if/else statement for all choices(or find a better way to do it)
    if(playerChoice != aichoice)
    {

        if(playerChoice == possibleChoices[0] && aichoice == possibleChoices[1])
        {
            aiScore += 1;
            
        }

        else if(playerChoice == possibleChoices[1] && aichoice == possibleChoices[0])
        {
            playerScore += 1;
            
        }

        else if(playerChoice == possibleChoices[0] && aichoice == possibleChoices[2])
        {
            playerScore += 1;
            
        }

        else if(playerChoice == possibleChoices[2] && aichoice == possibleChoices[0])
        {
            aiScore += 1;
            
        }

        else if(playerChoice == possibleChoices[1] && aichoice == possibleChoices[2])
        {
            aiScore += 1;
            
        }

        else if(playerChoice == possibleChoices[2] && aichoice == possibleChoices[1])
        {
            playerScore += 1;
           
        }

    }
   



}














