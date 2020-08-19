<?php 
// PHP STRINGS AND VARIABLES
    // Strings 

        //  Escape Sequences
        echo "She said 'hi' to the dog."; //syntax error, unexpected 'hi' (T_STRING)
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

    // Variable Parsing
        // parsed which means the computer will read the variables as the value they hold rather than see them as just a sequence of characters
        // EXAMPLE
        $dog_name = "Tadpole";
        $favorite_food = "salmon";
        $color = "brown";        
        echo "I have a $color dog named $dog_name and her favorite food is $favor";
        // Prints: I have a brown dog named Tadpole and her favorite food is salmon.

        $toy = "frisbee";
        echo "Alex likes playing with $toys"; // WILL ERROR: as var is toy and the s needs to be added like below
        echo "Alex likes playing with ${toy}s";

    // Variable Reassignment

        // EXAMPLE
        $favorite_food = "Red curry with eggplant";
        echo $favorite_food; // Prints: Red curry with eggplant        
        // Reassign the value of $favorite_food to a new string
        $favorite_food = "Pizza"; 
        echo $favorite_food; // Prints: Pizza

    // Concatenating Assignment Operator: .=
    
        $full_name = "Aisle" . " Nevertell";
        echo $full_name; // Prints: Aisle Nevertell
        // or
        $full_name = "Aisle";
        $full_name = $full_name . " Nevertell";
        echo $full_name; // Prints: Aisle Nevertell
        // better -
        $full_name = "Aisle";
        $full_name .= " Nevertell";
        echo $full_name; // Prints: Aisle Nevertell

    // Assign by Reference: =&
        // with = operator when you assign a variable another variables value changes won't effect each other
        $first_player_rank = "Beginner"; 
        $second_player_rank = $first_player_rank; 
        echo $second_player_rank; // Prints: Beginner        
        $first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
        echo $second_player_rank; // Still Prints: Beginner
        // with =& operator, changes do effect each variable
        $first_player_rank = "Beginner";
        $second_player_rank =& $first_player_rank; 
        echo $second_player_rank; // Prints: Beginner
        
        $first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
        echo $second_player_rank; // Prints: Intermediate
       

        /* 
        Review
Awesome work! We’ve covered a lot of material in this lesson, so let’s review:

Strings are collections of text that the computer treats as a single piece of data.
A string can be any length and contain any letters, numbers, symbols, or spaces surrounded by quotation marks.
In order to include certain characters inside strings we have to use escape sequences.
An operator is a character that performs a task in our code.
We can use the concatenation operator (.) to combine two strings into one.
Variables are a fundamental programming concept which allow us to easily reuse data in our code.
We declare a variable using the dollar sign ($) followed by the variable name and then use the assignment operator (=) to give it a value.
PHP has variable parsing which allows us to include variables directly in our strings.
Once a variable has been assigned, we can change its value. This is called reassignment.
We can create an alias for a variable, instead of just a copy, using the reference assignment operator (=&).
Operations to the right of the assignment operator will be evaluated before assignment takes place.
The concatenating assignment operator (.=) is a shorthand notation for reassigning a string variable to its current value appended with another string value.
If that was a lot to take in, don’t worry about memorizing everything right away. Remember that when you want to explore more about the language, the documentation is a great place to get comfortable exploring.
*/