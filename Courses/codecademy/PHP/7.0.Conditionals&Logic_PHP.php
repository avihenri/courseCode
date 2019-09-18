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

  // WORKING EXAMPLE - DNA MATCH
      function whatRelation($dnaPerc) {
        if ($dnaPerc === 0) {
          echo "not genetically related" . "\n";
        } elseif ($dnaPerc < 3) {
          echo "third cousins" . "\n";
        } elseif ($dnaPerc < 6) {
          echo "second cousins" . "\n";
        } elseif ($dnaPerc < 14) {
          echo "first cousins" . "\n";
        } elseif ($dnaPerc < 35) {
          echo  "grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings" . "\n";
        } elseif ($dnaPerc < 100) {
          echo  "parent and child or full siblings" . "\n";
        } else {
          echo "identical twins" . "\n";
        }
      }
      whatRelation(100);
      whatRelation(45);
      whatRelation(35);
      whatRelation(34);
      whatRelation(14);
      whatRelation(7);
      whatRelation(3);
      whatRelation(1);
      whatRelation(0);  
      /* OUTPUT 
      identical twins
      parent and child or full siblings
      parent and child or full siblings
      grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings
      grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings
      first cousins
      second cousins
      third cousins
      not genetically related
      */

  // Switch Statements
      if ($letter_grade === "A"){
        echo "Terrific";
      } elseif ($letter_grade === "B") {
        echo "Good";
      } elseif ($letter_grade === "C") {
        echo "Fair";
      } elseif ($letter_grade === "D") {
        echo "Needs Improvement";
      } elseif ($letter_grade === "F") {
        echo "See me!";
      } else {
        echo "Invalid grade"; 
      }
      // better for a switch
      switch ($letter_grade){
        case "A":
          echo "Terrific";
          break;
        case "B":
          echo "Good";
          break;
        case "C":
          echo "Fair";
          break;
        case "D":
          echo "Needs Improvement";
          break;
        case "F":
          echo "See me!";
          break;
        default:
          echo "Invalid grade"; 
      }

      //  WORKIG EXAMPLE - US GOV CLASSIFICATIONS OF AIR QUALITY 
        function airQuality($color) {
          switch ($color) {
              case "green":
              echo "good" . "\n";
              break;
              case "yellow":
              echo "moderate" . "\n";
              break;
              case "orange":
              echo "unhealthy for sensitive groups" . "\n";
              break;
              case "red":
              echo "unhealthy" . "\n";
              break;
              case "purple":
              echo "very unhealthy" . "\n";
              break;
              case "maroon":
              echo "hazardous" . "\n";
              break;
            default:
              echo "invalid color" . "\n";      
          } 
        }      
        airQuality("green");
        airQuality("yellow");
        airQuality("orange");
        airQuality("red");
        airQuality("purple");
        airQuality("maroon");
        airQuality("blue");
        /* OUTPUT
          good
          moderate
          unhealthy for sensitive groups
          unhealthy
          very unhealthy
          hazardous
          invalid color
          */
 
      
  // Switch Statements: Fall through
      // fall through = when no break is in places and all code is run in switch
      $letter = "a";
      switch ($letter) {
        case "a":
          echo "a";
        case "b":
          echo "b";
        case "c":
          echo "c";
        case "d":
          echo "d";
      } // OUTPUT = abcd

      switch ($day_of_week) {
        case "Monday":
        case "Tuesday":
          echo "Just getting started!";
          break;
        case "Wednesday":
          echo "Humpday!";
          break;
        case "Thursday":
        case "Friday":
          echo "Almost the weekend!";
          break;
        case "Saturday":
        case "Sunday":
          echo "Enjoy!";
          break;
      } // if $day_of_week has the value "Monday" or "Tuesday", the string "Just getting started!" will be printed.

      function returnSeason($month) {
        switch ($month) {
        case "December":
        case "January":
        case "February":
        return "winter";
        break;
        case "March":
        case "April":
        case "May":
        return "spring";
        break;
        case "June":
        case "July":
        case "August":
        return "summer";
        break;
        case "September":
        case "October":
        case "November":
        return "fall";
        break;
        default: 
        return "invalid month";
        }
      }
      
      echo returnSeason("February"); // winter
      echo "\n\n";  
      echo returnSeason("April"); // spring
      echo "\n\n";
      echo returnSeason("August"); // summer
      echo "\n\n";
      echo returnSeason("October");  // fall

  // Ternary Operator
  