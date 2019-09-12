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