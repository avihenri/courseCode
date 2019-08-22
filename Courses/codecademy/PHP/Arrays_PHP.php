<?php

// ORDERED ARRAYS
    // location in a array is an index
    // ordered in ascending numaerical order starting with 0

    // Creating Arrays with array()
        // array() -> returns an array  https://www.php.net/manual/en/function.array.php
        // arguments become elements in the array
        // most useful when stored in variables
        $my_array = array(0, 1, 2);
        $string_array = array("first element", "second element");
        $mixed_array = array(1, "chicken", 78.2, "bubbles are crazy!");

        // count() - returns the number of elements in an array
            echo count($my_array); // Prints: 3
            echo count($string_array); // Prints: 2
            echo count($mixed_array); // Prints: 4

        // WORKING EXAMPLE 
        $first_array = array('string1', 1, 'string2', 3, 'string3');
        echo count($first_array);

    // Creating Arrays with Short Syntax
        // Short syntax = comma-separated elements in square brackets
        $number_array = [0, 1, 2];

        // WORKING EXAMPLE 
        $with_function = array('PHP', 'popcorn', 555.55);
        // $with_short() = ['PHP', 'popcorn', 555.55];

    // Printing Arrays
        // printing array is more complicated than other data types
        $number_array = [0, 1, 2];
        echo $number_array; // Prints: Array
        // we should use print_r() function
         print_r($number_array); /*
         Array
        (
            [0] => 0
            [1] => 1
            [2] => 2
        ) */
        // implode() -> takes 2 arguments: string to use between each element, the array to be joined together
        echo implode(", ", $number_array); // 0, 1, 2 

        // WORKING EXAMPLE
            $message = ["Oh hey", " You're doing great", " Keep up the good work!\n"];
            $favorite_nums = [7, 201, 33, 88, 91];
            // Write your code below:
            echo implode("!", $message); // Oh hey! You're doing great! Keep up the good work!
            print_r($favorite_nums);
            /* Array
            (
                [0] => 7
                [1] => 201
                [2] => 33
                [3] => 88
                [4] => 91
            ) */

    // Accessing an Element
        // variableName[index]; =  indexing an array
        $my_array = ["tic", "tac", "toe"];
        echo $my_array[1]; // Prints: tac

        $num_var = 2;
        $important_info = ["talking chicken", 181, "magnets?!", 99];
        echo $important_info[$num_var]; // Prints: magnets?!

        // WORKING EXMAPLE
        $round_one = ["X", "X", "first winner"];
        $round_two = ["second winner", "X", "X", "X"];        
        $round_three = ["X", "X", "X", "X", "third winner"];        
        // Write your code below:
        $winners = [$round_one[2], $round_two[0], $round_three[4]];
        print_r($winners);
        /*
               Array
                (
                    [0] => first winner
                    [1] => second winner
                    [2] => third winner
                ) 
        */

    // Adding and Changing Elements
        // Take the variable name and append square brackets ([]), the assignment operator (=) & element to add
        $string_array = ["first element", "second element"];
        $string_array[] = "third element";        
        echo implode(", ", $string_array);  // Prints: first element, second element, third element 

        $string_array = ["first element", "second element", "third element"];
        $string_array[0] = "NEW! different first element";
        echo $string_array[0]; // Prints: NEW! different first element"

        // WORKING EXAMPLE
        $change_me = [3, 6, 9];
        // Write your code below:
        $change_me[] = 'string';
        $change_me[] = 2;
        $change_me[1] = 'tadpole';
        print_r($change_me);
        /*
            Array
            (
                [0] => 3
                [1] => tadpole
                [2] => 9
                [3] => string
                [4] => 2
            )
        */

    // More Array Methods: Pushing and Popping
        // array_pop() = takes an array, removes the last element & returns the removed element
            $my_array = ["tic", "tac", "toe"];
            array_pop($my_array); 
            // $my_array is now ["tic", "tac"]
            $popped = array_pop($my_array); 
            // $popped is "tac"
            // $my_array is now ["tic"]

        // array_push() = takes an array & adds elements to the end of the array
            $new_array = ["eeny"];
            $num_added = array_push($new_array, "meeny", "miny", "moe"); 
            echo $num_added; // Prints: 4
            echo implode(", ", $new_array); // Prints: eeny, meeny, miny, moe 
            
        // WORKING EXAMPLE
            $stack = ["wild success", "failure", "struggle"];
            // Write your code below:            
            array_push($stack, "blocker", "impediment");
            array_pop($stack);
            array_pop($stack);
            array_pop($stack);
            array_pop($stack);
            print_r($stack);/*
                Array
                (
                    [0] => wild success
                )
            */
    
    // Shifting and Unshifting
        // array_shift() = removes the first element from an array & returns that value
            $adjectives = ["bad", "good", "great", "fantastic"];
            $removed = array_shift($adjectives); 
            echo $removed; //Prints: bad
            echo implode(", ", $adjectives); // Prints: good, great, fantastic 
        
        // array_unshift() = takes array then elements after are added to the beginning of the array
            $foods = ["pizza", "crackers", "apples", "carrots"];
            $arr_len = array_unshift($foods, "pasta", "meatballs", "lettuce"); 
            echo $arr_len; //Prints: 7
            echo implode(", ", $foods); 
            // Prints: pasta, meatballs, lettuce, pizza, crackers, apples, carrots

        // WORKING EXAMPLE
            $record_holders = [];
            // Write your code below:
            array_unshift($record_holders, "Tim Montgomery", "Maurice Greene", "Donovan Bailey", "Leroy Burrell", "Carl Lewis");
            array_shift($record_holders);
            array_unshift($record_holders, "Justin Gatlin", "Asafa Powell");
            array_shift($record_holders);
            array_unshift($record_holders, "Usain Bolt");
            print_r($record_holders);         
            /* Array
            (
                [0] => Usain Bolt
                [1] => Asafa Powell
                [2] => Maurice Greene
                [3] => Donovan Bailey
                [4] => Leroy Burrell
                [5] => Carl Lewis
            ) */
        
    // Nested Arrays
        // we can have an array of arrays
        $nested_arr = [[2, 4], [3, 9], [4, 16]];
        $first_el = $nested_arr[0][0];
        echo $first_el; // Prints: 2

        $very_nested = [1, "b", 33, ["cat", 6.1, [9, "LOST!", 6], "mouse"], 7.1];
        $very_nested[3][2][1] = "Found!";

    
        // WORKING EXAMPLE
        $treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];  
        // Write your code below:        
        echo $treasure_hunt[3][4][2][0];
        /*
        Here’s the array:
        $treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];
        The first array we need to access is ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"]. This is located at the 3rd index location. We’ll create a variable to hold it:

        $layer_one = $treasure_hunt[3];
        The second array we need to access is ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"]. This is located at the 4th index location of our current $layer_one array. We’ll create another variable to hold it:

        $layer_two = $layer_one[4];
        The third array we need to access is ["GOLD!"]. This is located at the 2nd index location of our current $layer_two array. We’ll create another variable to hold it:

        $layer_three = $layer_two[2];
        We’re so close. The actual string we’re looking for, "GOLD!", is the only element in this last array. To access it, we’ll need to access the 0th index location of this array. Let’s save this into a final variable:

        $treasure = $layer_three[0];
        Awesome! All that’s left is to print out our $treasure variable.

        Let’s see the code all together:

        $treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];

        $layer_one = $treasure_hunt[3];

        $layer_two = $layer_one[4];

        $layer_three = $layer_two[2];

        $treasure = $layer_three[0];

        echo $treasure;
        For a challenge, try to complete this task using a single line of code—using chained array indexing in place of variables. */

        /*  Review
            We covered a lot in this lesson! Great job. Take a second to review everything you learned:

            Arrays are ordered collections of data that are a type of data structure fundamental to computer science.
            In PHP, we refer to this data structure as ordered arrays.
            The location of an element in an array is known as its index.
            The elements in an ordered array are arranged in ascending numerical order starting with index zero.
            We can construct ordered arrays with a built-in PHP function: array().
            We can construct ordered arrays with short array syntax, e.g. [1,2,3].
            We can print arrays using the built-in print_r() function or by converting them into strings using the implode() function.
            We use square brackets ([]) to access elements in an array by their index.
            We can add elements to the end of an array by appending square brackets ([]) to an array variable name and assigning the value with the assignment operator (=).
            We can change elements in an array using array indexing and the assignment operator.
            The array_pop() function removes the last element of an array.
            The array_push() function adds elements to the end of an array.
            The array_shift() function removes the first element of an array.
            The array_unshift() function adds elements to the beginning of the array.
            We can use chained square brackets ([]) to access and change elements within a nested array. */