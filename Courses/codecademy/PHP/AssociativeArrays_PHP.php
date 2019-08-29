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
            // use integers instead of strings for keys
            $num_array = [1000 => "one thousand", 100 => "one hundred", 600 => "six hundred"];
            echo $num_array[1000]; // Prints: one thousand
            // we can mix and match ordered & associated arrays
            $ordered = [99, 1, 7, 8];
            $ordered["special"] = "Cool!";
            echo $ordered[3]; // Prints: 8
            echo $ordered["special"]; // Prints: Cool!
        // WORKING EXAMPLE
        $hybrid_array = [
            "one", 2, "three", 4, 8 => "five more"
        ];
        array_push($hybrid_array, rand());
        print_r($hybrid_array);
        echo $hybrid_array[9];

    // Joining Arrays
        // use add opertor ( + )
        $giraffe_foods = ["dip"=>"guacamole", "chips"=>"corn", "entree"=>"grilled chicken"];
        $impala_foods = ["dessert"=>"cookies", "vegetable"=>"asparagus", "side"=>"mashed potatoes"];        
        $rat_foods = ["dip"=>"mashed earth worms", "entree"=>"trash pizza", "dessert"=>"sugar cubes", "drink"=>"lemon water"];        
        // Write your code below:
        $potluck = $giraffe_foods + $impala_foods;        
        print_r($potluck);        
        $rat_impala = $rat_foods + $impala_foods;        
        print_r($rat_impala);        
        $everybody =  $giraffe_foods + $impala_foods + $rat_foods;        
        print_r($everybody);
    
    // Assign by Value or by Reference
        // 2 ways to assign one variable to another
            // 1. By value = creates 2 variables that hold copies of the same value - each remain independant
            // 2. By reference = creates 2 varaiables that point to the same space in memory - not independant
            $favorites = ["food"=>"pizza", "person"=>"myself", "dog"=>"Tadpole"];
            $copy = $favorites; // by value
            $alias =& $favorites; // by ref - uses & to reference
            $favorites["food"] = "NEW!";            
            echo $favorites["food"]; // Prints: NEW!
            echo $copy["food"]; // Prints: pizza
            echo $alias["food"]; // Prints: NEW!

            // by value
            function changeColor ($arr) 
            {
              $arr["color"] = "red";    
            }
            $object = ["shape"=>"square", "size"=>"small", "color"=>"green"];
            changeColor ($object);
            echo $object["color"]; // Prints: green 
            // by reference
            function reallyChangeColor (&$arr) // & used to reference
            {
            $arr["color"] = "red";    
            }
            $object = ["shape"=>"square", "size"=>"small", "color"=>"green"];
            reallyChangeColor ($object);
            echo $object["color"]; // Prints: red

            // WORKING EXAMPLE
            $doge_meme = ["top_text" => "Such Python", "bottom_text" => "Very language. Wow.", "img" => "very-cute-dog.jpg", "description" => "An adorable doge looks confused."];
            $bad_meme = ["top_text" => "i don't know", "bottom_text" => "i can't think of anything", "img" => "very-fat-cat.jpg", "description" => "A very fat cat looks happy."];
            
            // Write your code below:
            function createMeme($meme) {
              $meme["top_text"] = "Much PHP";
              $meme["bottom_text"] = "Very programming. Wow.";
              return $meme;
            }            
            $php_doge = createMeme($doge_meme);
            print_r($php_doge);            
            function fixMeme(&$meme) {
              $meme["top_text"] = "Yo";
              $meme["bottom_text"] = "Lo";
              return $meme;
            }            
            print_r($bad_meme);
            fixMeme ($bad_meme);
            print_r($bad_meme);
            /* OUTPUT
                Array
                (
                    [top_text] => Much PHP
                    [bottom_text] => Very programming. Wow.
                    [img] => very-cute-dog.jpg
                    [description] => An adorable doge looks confused.
                )
                Array
                (
                    [top_text] => i don't know
                    [bottom_text] => i can't think of anything
                    [img] => very-fat-cat.jpg
                    [description] => A very fat cat looks happy.
                )
                Array
                (
                    [top_text] => Yo
                    [bottom_text] => Lo
                    [img] => very-fat-cat.jpg
                    [description] => A very fat cat looks happy.
                )
                */

                /*
                Review
                You learned so much in this lesson! Let’s review:

                Associative arrays are data structures in which string or integer keys are associated with values.
                We use the => operator to associate a key with its value. $my_array = ["panda"=>"very cute"]
                To print an array’s keys and their values, we can use the print_r() function.
                We access the value associated with a given key by using square brackets ([ ]). For example: $my_array["panda"] will return "very cute".
                We can assign values to keys using this same indexing syntax and the assignment operator (=): $my_array["dog"] = "good cuteness";
                This same syntax can be used to change existing elements. $my_array["dog"] = "max cuteness";
                We can remove a key=>value pair entirely using the PHP unset() function.
                Keys can be integers. In fact, ordered arrays are just arrays in which integer keys have been assigned to the values automatically.
                In PHP, associative arrays and ordered arrays are different uses of the same data type.
                The union (+) operator takes two array operands and returns a new array with any unique keys from the second array appended to the first array.
                When writing function with array parameters, we can pass the array by value or by reference depending on our intent.
                    */

        // QUIZ QUESTIONS CORRECT ANSWERS
            // 1. In PHP, arrays are always maps
            // 5 = 5
            $arr = ["hello", "there"]; 
            $arr["young"] = "wizard"; 
            $arr[] = ["you", "have"]; 
            $arr[0] = "careful"; 
            $arr[4] = "power"; 
            $arr[3] = "terrifying"; 
            $arr[] = "!";






