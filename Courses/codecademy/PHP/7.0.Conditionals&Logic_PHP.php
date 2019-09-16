<?php

// BOOLEANS AND COMPARISON OPERATORS
// Introduction
    // If Statements
        // The parentheses hold the condition we want the computer to check. 
        // If the condition is true, the code inside the code block ({ }) will run; if it’s not true, the code will not run.
        // hyperlink example:
        $is_clicked = TRUE;
        if ($is_clicked) {
        $link_color = "purple";
        echo $link_color;
        }

        // with an else statement
        $is_clicked = FALSE;
        if ($is_clicked) {
        $link_color = "purple";
        echo $link_color;
        } else {
        $link_color = "blue";
        echo $link_color;
        }

        // WORKING EXAMPLE - write a function that changes a check box depending on whether the answer given was correct or incorrect.

        $learner_one = ["is_correct"=>FALSE, "box"=>["shape"=>"none", "color"=>"none"]];   
        $learner_two = ["is_correct"=>TRUE, "box"=>["shape"=>"none", "color"=>"none"]];        
        
        function markAnswer($value, &$arr) {
        if ($value) {
            $arr["shape"] = "checkmark";
            $arr["color"] = "green";
        } else {
            $arr["shape"] = "x";
            $arr["color"] = "red";
        }
        }
        markAnswer($learner_one["is_correct"], $learner_one["box"]);
        markAnswer($learner_two["is_correct"], $learner_two["box"]);
        print_r($learner_one);
        print_r($learner_two);
        /*OUTPUT:
                    Array
            (
                [is_correct] => 
                [box] => Array
                    (
                        [shape] => x
                        [color] => red
                    )

            )
            Array
            (
                [is_correct] => 1
                [box] => Array
                    (
                        [shape] => checkmark
                        [color] => green
                    )

        )
        */

    // Comparison Operators
        // expressions that evaluate to TRUE & FALSE 
        // < less than
        // <= less than or equal to
        // > greater than
        // >= greater than or equal to
        
        function chooseCheckoutLane($num) {
            if ($num <= 12) {
              return "express lane";
            } else {
              return "regular lane";
            }
          }
          function canIVote($age) {
            if ($age >= 18) {
              return "yes";
            } else {
              return "no";
            }
          }
          echo chooseCheckoutLane(8) . "\n"; // express lane
          echo chooseCheckoutLane(14). "\n"; // regular lane
          echo canIVote(15). "\n"; // no
          echo canIVote(30). "\n"; // yes

    // Identical and Not Identical Operators
        // === Identical operator - returns true if left operand is exactly the same the right 
        $greeting = "hello";
        $greeting === "hello"; // Evaluates to: TRUE
        "hello" === "hel" . "lo";   // Evaluates to: TRUE
        $greeting === "HELLO"; // Evaluates to: FALSE - not exactly the same
        // !== not identical operator - returns true if two operators are different & false if they are the same
        $num = 5;
        $num !== 5; // Evaluates to: FALSE
        10 !== 10; // Evaluates to: FALSE
        $num !== 20; // Evaluates to: TRUE        
        $greeting = "hello";
        "hello" !== "hello"; // Evaluates to: FALSE
        $greeting !== "HELLO"; // Evaluates to: TRUE
        // == equals operator - similar to identical but less trict so "hello" & "HELLO" would be true (hard to predict results)
        function agreeOrDisagree($str1, $str2) {
            if ($str1 === $str2) {
              return "You agree!";
            } else {
              return "You disagree!";
            }
          }
          echo agreeOrDisagree("Yup", "nope") . "\n"; // You disagree!
          echo agreeOrDisagree("Hello", "HELLO") . "\n"; // You disagree!
          echo agreeOrDisagree("nope", "nope") . "\n"; // You agree!
          
          function checkRenewalMonth($renewal) {
            $curMonth = date("F");
            if ($curMonth === $renewal) {
              return "Time to renew";
            } else {
              return "Welcome!";
            }
          }          
          echo checkRenewalMonth("April") . "\n"; // Welcome!
          echo checkRenewalMonth("June") . "\n"; // Welcome!
          echo checkRenewalMonth("September") . "\n"; // Time to renew

    // Elseif Statements
        /*
          Consider letter grades on a school assignment:
            If the grade is less than 60, it’s an F
            Or else, if the grade is less than 70, it’s a D.
            Or else, if the grade is less than 80, it’s a C.
            Or else, if the grade is less than 90, it’s a B.
            Or else, it’s an A.
        */
        $grade = 88;
        if ($grade < 60) {
        echo "You got an F";
        } elseif ($grade < 70) {
        echo "You got a D";
        } elseif ($grade < 80) {
        echo "You got a C";
        } elseif ($grade < 90) {
        echo "You got a B";
        } else {
        echo "You got an A";
        }

  

