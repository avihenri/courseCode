<?php

/*
In this project, you’ll create a number guessing game. 
Your program will generate a random number between 1 and 10. 
You’ll run the game 10 times and tell the user some information about their guessing abilities. 


In this program, we’ll see how often the player can guess a randomly generated number. 
After several rounds, we’ll tell the player what percentage of the time they guessed correctly 
and whether they had a tendency to guess too high or too low.
*/


$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "You need to guess a number between 1 and 10. After several rounds you will be told a percentage of how many you got correct. You will be informed whether you tend to guess too high or too low.";

function guessNumber() {
  global $guess_high, $guess_low, $correct_guesses, $play_count;
  $play_count++;
  $randomNum = rand(1, 10);
  echo "\nGuess a number between 1 and 10.\n";
  $guess = readline(">> ");
  $guess = intval($guess); // or $guess = intval(readline(">> "));
  
}