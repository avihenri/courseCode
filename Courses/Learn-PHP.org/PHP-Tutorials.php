<?php

// Variables and Types

    $x = 1;
    $y = "foo";
    $z = True;

    // Types = integers, floats, strings & boolean (null)

    // Operators
        // Add + Subtract - divide / concatenate .

    // Strings
        // use double quotes ""
        $name = "Jake";
        echo "Your name is $name";    // prints out Your name is Jake

/*
Exercise
    Part 1
    Define the variables name and age so that a line would be printed out saying the following sentence:
    Hello Jake. You are 20 years old.
    Notice that the code contains a special character sequence at the end called a newline - \n. 
    This sequence will cause the next line printed out to be printed out on the next line. For web development, 
    this is not important, since we use HTML tags for this purpose.

    Part 2
    Sum up the variables x and y and put the result in the sum variable.
*/
    // Part 1: add the name and age variables.
    $name = "Avril";
    $age = 30;
    echo "Hello $name. You are $age years old.\n"; // Hello Avril. You are 30 years old.
    // Part 2: sum up the variables x and y and
    // put the result in the sum variable.
    $x = 195793;
    $y = 256836;
    $sum = $x + $y;
    echo "The sum of $x and $y is $sum." // The sum of 195793 and 256836 is 452629.

    ?>