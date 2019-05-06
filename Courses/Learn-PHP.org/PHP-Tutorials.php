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


// Simple arrays
    // start at 0
    // can ontain other arrays or objects as members
    $odd_numbers = [1,3,5,7,9];
    $first_odd_number = $odd_numbers[0];
    $second_odd_number = $odd_numbers[1];

    echo "The first odd number is $first_odd_number\n";
    echo "The second odd number is $second_odd_number\n";

    // To add to the list we can assign the array with index 5 (the 6th variable):
    $odd_numbers = [1,3,5,7,9];
    $odd_numbers[5] = 11;
    print_r($odd_numbers);

    // To Delete - use unset func
    $odd_numbers = [1,3,5,7,9];
    unset($odd_numbers[2]); // will remove the 3rd item (5) from the list
    print_r($odd_numbers);

    // To return how many members in an array - use count func
    $odd_numbers = [1,3,5,7,9];
    echo count($odd_numbers);

    // reset func - gets first memeber of array (It also resets the internal iteration pointer).
    $odd_numbers = [1,3,5,7,9];
    $first_item = reset($odd_numbers);
    echo $first_item;
    // index syntax to get a memeber
    $odd_numbers = [1,3,5,7,9];
    $first_item = $odd_numbers[0];
    echo $first_item;

    // end func - gets last memeber
    $odd_numbers = [1,3,5,7,9];
    $last_item = end($odd_numbers);
    echo $last_item;  

   // We can also use the count function to get the number of elements in the list, and then use it to refer to the last variable in the array. 
   // Note that we subtract one from the last index because indices are zero based in PHP, so we need to fix the fact that we don't count variable number zero.
    $odd_numbers = [1,3,5,7,9];
    $last_index = count($odd_numbers) - 1;
    $last_item = $odd_numbers[$last_index];
    echo $last_item;

// Stack and queue functions
    // Arrays can be used as stacks and queues as well.

    // array_push - pushes memeber to the end of an array
    $numbers = [1,2,3];
    array_push($numbers, 4); // now array is [1,2,3,4];

    // array_pop - delete from the end
    $numbers = [1,2,3,4];
    array_pop($numbers); // now array is [1,2,3];

    // array_unshift - to push to the beginning of array
    $numbers = [1,2,3];
    array_unshift($numbers, 0); // now array is [0,1,2,3];

    // array_shift to delete from the beginning
    $numbers = [0,1,2,3];
    array_shift($numbers); // now array is [1,2,3];

// Concatenating arrays
    // array_merge - to concatenate two arrays
    $odd_numbers = [1,3,5,7,9];
    $even_numbers = [2,4,6,8,10];
    $all_numbers = array_merge($odd_numbers, $even_numbers);

// Sorting arrays
    // sort fun 
    $numbers = [4,2,3,1,5];
    sort($numbers);
    print_r($numbers);
    // rsort func (reverse)

// Advanced array functions
    // array_slice - returns a new array that contains a certain part of a specific array from an offset.
    $numbers = [1,2,3,4,5,6];
    print_r(array_slice($numbers, 3)); // discards first 3 items
    // when you want only two items after the first 3
    $numbers = [1,2,3,4,5,6];
    print_r(array_slice($numbers, 3, 2)); 

    // array_splice - does exactly the same, however it will also remove the slice returned from the original array
    $numbers = [1,2,3,4,5,6];
    print_r(array_splice($numbers, 3, 2));
    print_r($numbers);


// Arrays with keys







// Strings







// For Loops






// While Loops







// Functions







// Objects



    ?>