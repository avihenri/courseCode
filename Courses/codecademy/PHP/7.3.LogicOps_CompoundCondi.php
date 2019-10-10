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
