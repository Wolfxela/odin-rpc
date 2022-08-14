//have two vars for the ai's choice and for for the player's choice
let aiChoice
let playerChoice
//make a string array with the 3 possible choices {"rock"} {"paper"} {"scissors"}
let possibleChoices = ["Rock", "Paper", "Scissors"]
//make two ints for both the player and the ai's score
let aiScore = 0
let playerScore = 0 
//make an int to decide how many rounds we want to play
let roundAmmount = parseInt(prompt("how many rounds do you want to have?", "1")) 

battle(roundAmmount)

//make a function called aiChoiceRandomiser
function aiChoiceRandomiser()
{
    //make a var that is randomly assigned a number between 1 to 3
    let randomNumber = Math.ceil(Math.random() * 3);

    //depending on the number assign the ai a choice, either rock or paper or scizzors
    if(randomNumber == 1)
    {
        aiChoice = possibleChoices[0]
    }

    else if(randomNumber == 2)
    {
        aiChoice = possibleChoices[1]
    }

    else
    {
        aiChoice = possibleChoices[2]
    }

}




//make a function called playerInputChecker 
function playerInputChecker()
{
    //make sure to put all this in a for loop that only ends when the player has a correct input
    for(let i = 0; i < 2; i++)
    {

    //have a var called tempvar to store the player's input in and make a prompt for the player to input their choice
    let tempvar = prompt("please write your option between rock, paper or scissors")

    //cut the answer into 2 variables be sure to capitalise the first letter and lowercase the rest
    let firstLetter = tempvar.slice(0,1).toUpperCase();
    let restOfWord = tempvar.slice(1,).toLowerCase();

    //then combining them together once they have been worked on
    tempvar = firstLetter + restOfWord;

    //check if the player input is the same as either rock or paper or scizzors with a for loop
    if(tempvar == possibleChoices[0])
    {
        playerChoice = tempvar;
        break
    }
    else if(tempvar == possibleChoices[1])
    {
        playerChoice = tempvar;
        break
    }
    else if(tempvar == possibleChoices[2])
    {
        playerChoice = tempvar;
        break
    }

    //if input is not any of those return a error and ask the player to input again
    console.log("your answer was not valid")

    i -= 1
    }
}

//make a function called victoryDecider that takes 2 inputs, the ai one and player one
function victoryDecider(playerchoice, aichoice)
{

    //make a if statement if both the player and the ai chose the same
    if(playerChoice == aichoice)
    {
        aiScore += 1;
        playerScore += 1
        console.log("It's a draw!")
    }

    //make an if/else statement for all choices(or find a better way to do it)
    if(playerChoice != aichoice)
    {

        if(playerChoice == possibleChoices[0] && aichoice == possibleChoices[1])
        {
            aiScore += 1;
            console.log("Ai wins!")
        }

        else if(playerChoice == possibleChoices[1] && aichoice == possibleChoices[0])
        {
            playerScore += 1;
            console.log("You win!")
        }

        else if(playerChoice == possibleChoices[0] && aichoice == possibleChoices[2])
        {
            playerScore += 1;
            console.log("You win!")
        }

        else if(playerChoice == possibleChoices[2] && aichoice == possibleChoices[0])
        {
            aiScore += 1;
            console.log("Ai wins!")
        }

        else if(playerChoice == possibleChoices[1] && aichoice == possibleChoices[2])
        {
            aiScore += 1;
            console.log("Ai wins!")
        }

        else if(playerChoice == possibleChoices[2] && aichoice == possibleChoices[1])
        {
            playerScore += 1;
            console.log("You win!")
        }

    }
    //at the end display both choices to the player and say victory or defeat
    console.log("The ai chose: " + aichoice)
    console.log("You chose: " + playerChoice)



}
//make a function called battle
function battle(rounds)
{
    //make a for loop that repeats the process of the game
    for(let i = 0; i < rounds; i++)
    {
        aiChoiceRandomiser()
        playerInputChecker()
        victoryDecider(playerChoice,aiChoice)
    }

    //let the player know of both scores trough console.log
    console.log("The ai scores: " + aiScore)
    console.log("You scored: " + playerScore)

    //decide who wins and console.log the winner
    if(aiScore > playerScore)
    {
        console.log("The Ai wins with a score of: " + aiScore)
    }

    else if(playerScore > aiScore)
    {
        console.log("You win with a score of: " + playerScore)
    }

    else
    {
        console.log("it's a draw!")
    }

}













