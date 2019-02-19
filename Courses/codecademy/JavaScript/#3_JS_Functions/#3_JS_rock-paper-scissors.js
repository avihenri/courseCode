// Rock, Paper, or Scissors
    /* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

    The possible outcomes are:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.
    If there's a tie, then the game ends in a draw.
    Our code will break the game into four parts:

    Get the user's choice.
    Get the computer's choice.
    Compare the two choices and determine a winner.
    Start the program and display the results. */

    const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
          return userInput;
        } else {
          console.log('Sorry, wrong input');
        }
      };
      
      function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3)
        switch(randomNumber) {
          case 0:
            return 'rock';
            break;
          case 1:
            return 'paper';
            break;
          case 2:
            return 'scissors';
            break;
        }
      }  
      
      function determineWinner(userChoice, computerChoice) {
        if (userChoice === 'bomb') {
      return 'You win!';
      }
        if (userChoice === computerChoice) {
          return 'Its a tie!'
        } 
        if (userChoice === 'rock') {
          if (computerChoice === 'paper') {
            return 'Computer wins!';
          } else {
            return 'You win!'
          }
        }
        if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
            return 'Computer wins!';
          } else {
            return 'You win!';
          }
        }
        if (userChoice === 'scissors') {
          if (computerChoice === 'paper') {
            return 'Computer wins!';
          } else {
            return 'You win!';
          }
        }
      }
      
      const playGame = () => {
        const userChoice = getUserChoice('bomb');
        const computerChoice = getComputerChoice();
        console.log('You: ' + userChoice);
        console.log('Computer: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
      }
      
      playGame();
      
      
      /* Refactered
      function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
return 'You win!';
}
  if (userChoice === computerChoice) {
    return 'Its a tie!'
  } 
  if (userChoice === 'rock' && computerChoice === 'paper') {  
      return 'Computer wins!';
    } else {
      return 'You win!'
    }
  if (userChoice === 'paper' && computerChoice === 'scissors') {    
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
      */
      