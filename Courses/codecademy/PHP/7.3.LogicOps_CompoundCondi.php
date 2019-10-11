<?php

// LOGICAL OPERATORS AND COMPOUND CONDITIONS
// Nested Conditional Statements
// We wrote some code to illustrate our decision-making process when taking an elevator. Read through the code to make sense of the process:

  $is_elevator_here = true;
  $elevator_direction = "down";
  $my_direction = "up";
  $is_button_pushed = false;

  if ($is_elevator_here){
      if ($elevator_direction === $my_direction){
        echo "I'm in the elevator.";
      } else {
          if ($is_button_pushed){
            echo "I'm waiting...!";
          } else {
              echo "I'm pushing the button.";
          }
     }
  } else {
      if ($is_button_pushed){
          echo "I'm waiting...";
      } else {
          echo "I'm pushing the button.";
      }
   }

   // FIRST EXERCISE
    function both($first, $second) {
      if ($first) {
        if ($second) {
          return 'both';
        } else {
          return 'not both';
        }
      } else {
        return 'not both';
      }
    }
  echo both(true, false); // NOT BOTH
  echo both(true, true); // BOTH

  // The || Operator
    // takes 2 boolean values or expresion as its operands & returns a single boolean value
    // returns true if either the left or right operands are true
    TRUE || TRUE;   // Evaluates to: TRUE
    FALSE || TRUE;  // Evaluates to: TRUE    
    TRUE || FALSE;  // Evaluates to: TRUE    
    FALSE || FALSE; // Evaluates to: FALSE

    // password reset example
    $is_admin = FALSE;
    $is_user = TRUE;
    if ($is_admin || $is_user){
      echo "You can change the password";
    } // true so prints the above out

    // WORKING EXAMPLE: HUNGRY & DESSERT
    function willWeEat($meal, $hungry) {
      if ($hungry || $meal === "dessert" ) {
        return "Yum. Thanks!\n";
      } else {
        return "No thanks. We're not hungry.\n";
      }
    }
    echo willWeEat("lunch",false); // No thanks. We're not hungry.
    echo willWeEat("dessert", false); // Yum. Thanks!
    echo willWeEat("lunch", true); // Yum. Thanks!
    echo willWeEat("dessert", true); // Yum. Thanks!

    // The && Operator
      // returns true if both operands are true
      // returns false if either or both operands are false
      // higher operator precedence than the || operator - so will be evaluated first in complex statements
      TRUE && TRUE;    // Evaluates to: TRUE
      FALSE && TRUE;   // Evaluates to: FALSE
      TRUE && FALSE;   // Evaluates to: FALSE
      FALSE && FALSE;  // Evaluates to: FALSE
      TRUE || TRUE && FALSE; // Evaluates to: TRUE
      (TRUE || TRUE) && FALSE; // Evaluates to: FALSE parentheses make the || go first

      // ATM example
      $correct_pin = TRUE;
      $sufficient_funds = TRUE;
      if ($correct_pin && $sufficient_funds) {
        echo "You can make the withdrawal.";
      }

      // Happy and you know it
      function clapYourHands($happiness, $knowIt) {
        if ($happiness && $knowIt) {
          return "CLAP!";
        } else {
          return ":(";
        }
      }
      echo clapYourHands(true, true); // CLAP!
      echo clapYourHands(false, true); // :(
      echo clapYourHands(true, false); // :(


    // The Not Operator ( ! )
      // Takes only a right operand - reverses the boolean value
      // very high order precedence - use parenthese to evalute code intended
      !TRUE;    // Evaluates to: FALSE
      !FALSE;   // Evaluates to: TRUE
      !10 < 11; // Evaluates to: TRUE
      !(10 < 11);  // Evaluates to: FALSE
      !TRUE || TRUE; // Evaluates to: TRUE
      !(TRUE || TRUE); // Evaluates to: FALSE

      // LOGIN EXAMPLE
      $is_logged_in = FALSE; 
      if (!$is_logged_in){
        echo "You must log in to continue.";
      }
      // IF WE DON'T USE THE NOT OPERATOR YOU WOULD NEED TO WRITE THE BELOW FOR THE SAME AFFECT
      $is_logged_in = FALSE; 
      if ($is_logged_in){
       // Do nothing... 
      } else {
        echo "You must log in to continue.";
      }

      // DUCK, DUCK, GOOSE
      function duckDuckGoose($is_goose) {
        if (!$is_goose) {
          return "duck\n";
        } else {
          return "goose!\n";
        }
      }
      echo duckDuckGoose(false);
      echo duckDuckGoose(false);
      echo duckDuckGoose(false);
      echo duckDuckGoose(false);
      echo duckDuckGoose(false);
      echo duckDuckGoose(true);

  // The Xor Operator
      // exclusive or not
      // takes 2 different booleans or expressions & returns single boolean value
      // regular or = evaluates to TRUE if either operands are TRUE
      // xor = evaluates to True if either operand the left or the right is TRUE but not both TRUE
      TRUE xor TRUE;   // Evaluates to: FALSE
      FALSE xor TRUE;  // Evaluates to: TRUE      
      TRUE xor FALSE;  // Evaluates to: TRUE      
      FALSE xor FALSE; // Evaluates to: FALSE
      // used for either or questions like - Did you wear either glasses or contacts today?
      $is_wearing_glasses = TRUE;
      $is_wearing_contacts = TRUE;      
      if ($is_wearing_glasses xor $is_wearing_contacts){
          echo "Your vision is corrected!";
      } else {
          echo "Your vision is impaired.";
      }
      // if neither glasses or contacts = vision impaired
      // if both = vision impaired
      // if contacts =  vision corrected
      // if glasses = vision corrected

      // Pie example
      $banana_cream = ["whole milk", "sugar", "cornstarch", "salt", "egg yolks", "butter", "vanilla extract", "bananas", "heavy cream", "powdered sugar"];
      $experimental_pie = ["whole milk", "sugar", "bananas", "chicken", "salmon", "garlic"];
      
      // Write your code below:
      function eatPie($ingredients){
        if (in_array("chicken", $ingredients) xor in_array("bananas", $ingredients)){
          return "Delicious pie!";
        } else {
          return "Disgusting!";
        }
      }      
      echo eatPie($banana_cream);
      echo "\n\n";
      echo eatPie($experimental_pie);