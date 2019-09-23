<?php 

/*
LEARN PHP
Magic 8 Ball
The Magic 8-Ball is a popular toy used for fortune-telling or seeking advice.

In this project, you’ll be creating a function that can answer any “yes” or “no” question.
Magic 8-Ball, should I do this project?
The answers inside a standard Magic 8-Ball are:
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
Your magic8Ball() will take in any “yes” or “no” question (as a string) and give a psychic (random) answer. */

function magic8Ball() {
    echo "\nPlease state question";
    $question = readline(">> ");
    echo "\n" . $question . ". Here is your answer: ";
    $random = rand(0, 19);
    switch ($random) {
      case 0:
        echo "It is certain.";
        break;
        case 1:
        echo "It is decidedly so.";
        break;
        case 2:
        echo "Without a doubt.";
        break;
        case 3:
        echo "Yes - definitely.";
        break;
        case 4:
        echo "You may rely on it.";
        break;
        case 5:
        echo "Outlook good.";
        break;
        case 6:
        echo "Yes.";
        break;
        case 7:
        echo "Signs point to yes.";
        break;
        case 8:
        echo "Reply hazy, try again.";
        break;
         case 9:
        echo "Ask again later.";
        break;
         case 10:
        echo "Better not tell you now.";
        break;
         case 11:
        echo "Cannot predict now.";
        break;
         case 12:
        echo "Concentrate and ask again.";
        break;
         case 13:
        echo "Don't count on it.";
        break;
         case 14:
        echo "My reply is no.";
        break;
         case 15:
        echo "My sources say no.";
        break;
         case 16:
        echo "Outlook not so good.";
        break;
         case 17:
        echo "Very doubtful.";
        break;
        case 18:
        echo "As I see it, yes.";
        break;
         case 19:
        echo "Most likely.";
        break;
    }    
  }
  magic8Ball();
