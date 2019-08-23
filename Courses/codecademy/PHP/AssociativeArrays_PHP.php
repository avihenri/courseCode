<?php
//ASSOCIATIVE ARRAYS

    // Associative Arrays
        // collections of key=>.value pairs
        // key must be a string or integer
        $my_array = ["panda" => "very cute", "lizard" => "cute", "cockroach" => "not very cute"];
        $about_me = array(
            "fullname" => "Aisle Nevertell",
            "social" => 123456789
        );

        // WORKING EXAMPLE
        $php_array = array(
            "language" => "PHP",
          "creator" => "Rasmus Lerdorf",
          "year_created" => "1995",
          "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]
        );
        
        $php_short = ["language" => "PHP",
          "creator" => "Rasmus Lerdorf",
          "year_created" => "1995",
          "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]];

    // Printing Associative Arrays
        $grades = [
            "Jane" => 98,
            "Lily" => 74,
            "Dan" => 88,
        ];        
        echo $grades; // Prints: Array
        echo implode(", ", $grades); // Prints: 98, 74, 88 
        // THIS ONLY SOWS THE VALUES AND NOT THE KEYS
        print_r($grades); /*
            Array
            (
                [Jane] => 98
                [Lily] => 74
                [Dan] => 88
            )
        */

        // WORKING EXAMPLE
            $september_hits = [
                "The Sixth Sense" => "22896967",
                "Stigmata" => "18309666",
                "Blue Streak" => "19208806",
                "Double Jeopardy" => "23162542",
            ];
            echo implode($september_hits);
            print_r($september_hits);
            /* OUTPUT
            22896967183096661920880623162542Array
            (
                [The Sixth Sense] => 22896967
                [Stigmata] => 18309666
                [Blue Streak] => 19208806
                [Double Jeopardy] => 23162542
            )
            */

    // Accessing and Adding Elements
        // use the square brackets and the key
        $my_array = ["panda"=>"very cute", "lizard"=>"cute", "cockroach"=>"not very cute"];
        echo $my_array["panda"]; // Prints: very cute

        // to add we use the assignment operator ( = )
        $my_array["capybara"] = "cutest";
        echo $my_array["capybara"]; // Prints: cuteset

        // code between brackets = expressions therefore code will be evaluated before the array is accessed
        // we can use variables, functions and operators within the square brackets
        $favorites = ["favorite_food"=>"pizza", "favorite_place"=>"my dreams", "FAVORITE_CASE"=>"CAPS","favorite_person"=>"myself"];
        echo  $favorites["favorite" . "_" . "food"];  // Prints: pizza
        $key =  "favorite_place";
        echo  $favorites[$key];   // Prints: my dreams
        echo $favorites[strtoupper("favorite_case")];  // Prints: CAPS

        // WORKING EXAMPLES
        $assignment_one = ["Alex"=> 87, "Kenny"=> 91, "Natalia"=> 91, "Lily"=> 67, "Dan"=> 81, "Kat"=> 77, "Sara" => 65];
        $assignment_two = ["Alex"=> 91, "Kenny"=> 99, "Natalia"=> 100, "Lily"=> 61, "Dan"=> 88, "Kat"=> 90];        
        $assignment_three = ["Alex"=> 78, "Kenny"=> 92, "Natalia"=> 94, "Lily"=> 79, "Dan"=> 73, "Sara" => 61];        
        $student_name = "Alex";
        // Write your code below:
        $assignment_two["Sara"] = 65;
        $assignment_three["Kat"] = 97;        
        $dans_grades = [
          $assignment_one["Dan"],
          $assignment_two["Dan"],
          $assignment_three["Dan"],
        ];        
        echo $assignment_two[$student_name];

        // Changing and Removing Elements
            // SAME AS ADDING
            $new_arr = ["first" => "I am first!", "second" => "I am second!"]; 
            $new_arr["third"] = "I am third!";            
            echo $new_arr["third"]; // Prints: I am third!            
            $new_arr["third"] = "I am the *NEW* third!";            
            echo $new_arr["third"]; // Prints: I am the *NEW* third!

            // As it is the same we need to add a caution - unset() = removes given variable
            // if key doesn't exist, it will do nothing
            $nums = ["one" => 1,"two"=> 2];
            echo implode(", ", $nums); // Prints: 1, 2            
            unset($nums["one"]);            
            echo implode(", ", $nums); // Prints: 2

            // WORKING EXAMPLE
            $my_car = [
                "oil" => "black and clumpy",
                "brakes" => "new",
                "tires" => "old with worn treads",
                "filth" => "bird droppings", 
                "wiper fluid" => "full", 
                "headlights" => "bright"
              ];
              print_r($my_car);              
              // Write your code below:              
              $my_car["oil"] = "new and premium";
              $my_car["tires"] = "new with deep treads";
              unset($my_car["filth"]);
              print_r($my_car); /*
              Array
                (
                    [oil] => black and clumpy
                    [brakes] => new
                    [tires] => old with worn treads
                    [filth] => bird droppings
                    [wiper fluid] => full
                    [headlights] => bright
                )
                Array
                (
                    [oil] => new and premium
                    [brakes] => new
                    [tires] => new with deep treads
                    [wiper fluid] => full
                    [headlights] => bright
                )
              */

              // Numerical Keys

              

