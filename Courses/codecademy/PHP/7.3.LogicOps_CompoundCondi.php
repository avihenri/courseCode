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

      // we can use and for && ... or for ||
      $is_admin = FALSE;
      $is_user = TRUE;
      if ($is_admin or $is_user){
        echo "You can change the password.\n";
      }


      $correct_pin = TRUE;
      $sufficient_funds = TRUE;
      if ($correct_pin and $sufficient_funds){
        echo "You can make the withdrawal.";
      }

  // Multi-File Programs: include
      // modularity = separating a program into distinct, manageable chunks
      // organised in separate files
      // the files are then included with - include 
        // one.php
        echo "How are";
        // two.php
        echo " you?";
        // index.php
        echo "Hello! ";
        include "one.php";
        include "two.php";
        // Prints: Hello! How are you?

        // sandwich example
        include "top_bread.php";
        include "mayo.php";
        include "lettuce.php";
        echo "ham";
        include "bottom_bread.php";
        /* OUTPUT:
          Toasty top bread
          Homemade mayonnaise
          Crisp, clean lettuce
          hamToasty bottom bread */

  /* Review
    Great job! You’ve learned the tools needed to craft programs with powerful decision making capabilities. Let’s review what we covered:

    By nesting conditionals within one another, we can create branching decisions.
    The logical operator || takes two different boolean values or expressions as its operands and returns a single boolean value. 
      It returns TRUE if either its left operand or its right operand evaluate to TRUE.
    The logical && operator returns TRUE only if both of its operands evaluate to TRUE. 
      It returns FALSE if either or both of its operands evaluate to FALSE.
    The logical not operator (!) takes only a right operand. It reverses the boolean value of its operand.
    The logical exclusive or operator (xor) returns TRUE only if either its left operand or its right operand evaluate to TRUE, but not both or neither.
    PHP includes alternate syntax for the || and && operators: we can use or in place of ||, and we can use and in place of &&. 
      These operators work much the same way but have different operator precedence.
    We can include code from one file inside another with include which allows us to write mode modular programs. */

