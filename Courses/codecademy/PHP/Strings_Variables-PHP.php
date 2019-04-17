<?php 
// PHP STRINGS AND VARIABLES
    // Strings 

        //  Escape Sequences
        echo "She said "hi" to the dog."; //syntax error, unexpected 'hi' (T_STRING)
        echo "She said \"hi\" to the dog."; // Prints: She said "hi" to the dog.

        echo "1. Go to gym";
        echo "\n2. Cook dinner"; // new line
        echo "\n3. Learn to have \"fun\""; // usuing quotes in a string

        // String Concatenation
        echo "one" . "two"; // Prints: onetwo
        echo "one " . "two"; // Prints: one two
        echo "one" . " " . "two" . " " . "three"; // Prints: one two three

    // Variables

        // EXAMPLE
        $my_name = "Aisle Nevertell";
        // We refer to a variable by using the dollar sign followed by the variable’s name.
        
        $dog_name = "Tadpole";
        echo "My dog is named " . $dog_name;  // Prints: My dog is named Tadpole

        $dog_name = "Tadpole";
        $favorite_food = "salmon";
        $color = "brown";        
        echo "I have a " . $color . " dog named " . $dog_name . " and her favorite food is " . $favorite_food . ".";
        // Prints: I have a brown dog named Tadpole and her favorite food is salmon.