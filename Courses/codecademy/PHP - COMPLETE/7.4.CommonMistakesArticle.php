<?php
// Common Mistakes with Conditionals

    // Mistake 1: Not treating expressions as distinct:
        // Let’s say we want to print something if our variable $num is equal to 1 or 2 or 3. Why doesn’t the following code work?
        $number = 5;
        if ($number === 1 || 2 || 3) // = FALSE || TRUE || TRUE
        {
        echo "Your number is 1, 2, or 3";
        } else {
        echo "Your number is NOT 1, 2, or 3";
        }
        // you need to treat each expression separately, like below..
        $number = 5;
        if ($number === 1 || $number === 2 || $number === 3)
        {
        echo "Your number is 1, 2, or 3";
        } else {
        echo "Your number is NOT 1, 2, or 3";
        }
    
    // Mistake 2: Omitting Parentheses:
        // operator precedence - https://www.php.net/manual/en/language.operators.precedence.php 
        TRUE || FALSE && FALSE; // Evaluates to: TRUE
        TRUE || FALSE and FALSE; // Evaluates to: FALSE        
        $my_bool = TRUE and FALSE; // $my_bool is TRUE
        // should use parentheses
        (TRUE || FALSE) && FALSE; // Evaluates to: FALSE
        (TRUE || FALSE) and FALSE; // Evaluates to: FALSE        
        $my_bool = (TRUE and FALSE); // $my_bool is FALSE
        // Example
        $withdrawal = 120; 
        $balance = 110;
        if (!$balance < $withdrawal){
             echo "Success";
             $balance -= $withdrawal;
        } else {
          echo "Insufficient Funds";
        } 
        // The expression !$balance is converted to the falsy numeric value of 0, therefore the expression !$balance < $withdrawal returns TRUE.
        $withdrawal = 120; 
        $balance = 110;
        if (!($balance < $withdrawal)){ // wrap the expression in parentheses.
            echo "Success";
            $balance -= $withdrawal;
        } else {
        echo "Insufficient Funds";
        } 
        // And check out the following broken code:
        // if ($age < 0) || ($age > 120) { // if statement not in parentheses
            // echo "That's an invalid age!";
        // }
        if ( ($age < 0) || ($age > 120) ) {
            echo "That's an invalid age!";
          }
    
    // Mistake 3: Not thinking like a computer:
    if ($response !== "yes" || $response !== "no"){
        echo "You must type either yes or no";
      }
        /*
         We wrote the code the way we might say it, “If the response isn’t yes or no…” But the expression $response !== "yes" || $response !== "no" 
         will always evaluate to TRUE even when the $response was actually "yes" or "no"! If the $response was "no", for example, the expression 
         will evaluate as TRUE || FALSE which evaluates to TRUE.
         */
      // fix with &&
      if ($response !== "yes" && $response !== "no"){
        echo "You must type either yes or no";
      }