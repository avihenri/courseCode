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
    print_r(array_slice($numbers, 3)); // discards first 3 items will print 4, 5, 6
    // when you want only two items after the first 3
    $numbers = [1,2,3,4,5,6];
    print_r(array_slice($numbers, 3, 2));  // will print 4, 5
    print_r($numbers); // will print 1,2,3,4,5,6

    // array_splice - does exactly the same, however it will also remove the slice returned from the original array
    $numbers = [1,2,3,4,5,6];
    print_r(array_splice($numbers, 3, 2));
    print_r($numbers);
        // output: Array ( [0] => 4  [1] => 5) Array(  [0] => 1  [1] => 2  [2] => 3  [3] => 6)


// Arrays with keys
    // Arrays = ordered maps. Values have keys with order. Each item will increment by 1 in the index
    $phone_numbers = [
        "Alex" => "415-235-8573",
        "Jessica" => "415-492-4856",
      ];      
      print_r($phone_numbers); // prints above array
      echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n"; // Alex's phone number is 415-235-8573
      echo "Jessica's phone number is " . $phone_numbers["Jessica"] . "\n"; // Jessica's phone number is 415-492-4856

      // Add an item to array using a key - use brackers operator
      $phone_numbers = [
        "Alex" => "415-235-8573",
        "Jessica" => "415-492-4856",
      ];      
      $phone_numbers["Michael"] = "415-955-3857"; // will now be in index 2

      // array_key_exists - check if key exists in an array
      $phone_numbers = [
        "Alex" => "415-235-8573",
        "Jessica" => "415-492-4856",
      ];      
      if (array_key_exists("Alex", $phone_numbers)) {
          echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n";
      } else {
          echo "Alex's phone number is not in the phone book!";
      }      // Alex's phone number is 415-235-8573
      if (array_key_exists("Michael", $phone_numbers)) {
          echo "Michael's phone number is " . $phone_numbers["Michael"] . "\n";
      } else {
          echo "Michael's phone number is not in the phone book!";
      }     // Michael's phone number is not in the phone book!

      // array_keys - extract keys of the array
      $phone_numbers = [
        "Alex" => "415-235-8573",
        "Jessica" => "415-492-4856",
      ];      
      print_r(array_keys($phone_numbers)); // Alex & Jessica (in array form)

      // array_values - get array values
      $phone_numbers = [
        "Alex" => "415-235-8573",
        "Jessica" => "415-492-4856",
      ];      
      print_r(array_values($phone_numbers)); // prints phone numbers in array form



// Strings
      // variables that hold text
      $name = "John";
      echo $name; // John

      $name = "John";
      $introduction = "Hello $name";
      echo $introduction; // Hello John

      // Concatenating - dot operator
      $first_name = "John";
      $last_name = "Doe";
      $name = $first_name . " " . $last_name;
      echo $name; // John Doe

      // strlen func - Measures length of a string
      $string = "The length of this string is 43 characters.";
      echo strlen($string); // 43

      // substr - cuts part of a string & returns a new string
      $filename = "image.png";
      $extension = substr($filename, strlen($filename) - 3);
      echo "The extension of the file is $extension";

      // Joining & Splitting
        // Join arrays to form strings or split strings to arrays of strings
        // explode func
        $fruits = "apple,banana,orange";
        $fruit_list = explode(",", $fruits);
        echo "The second fruit in the list is $fruit_list[1]"; // The second fruit in the list is banana
        // implode func - join back to single string separated by commas
        $fruit_list = ["apple","banana","orange"];
        $fruits = implode(",", $fruit_list);
        echo "The fruits are $fruits"; // The fruits are apple,banana,orange


      // EXERCISE
      <?php
      $numbers = "38,42,58,48,33,59,87,17,20,8,98,14,62,66,14,62,97,66,74,78,66,2,79,29,72,6,3,71,46,68,48,4,12,52,66,48,14,39,63,69,81,61,21,77,10,44,39,82,19,77,100,98,53,95,30,17,30,96,68,47,81,52,82,11,13,83,10,14,49,96,27,73,42,76,71,15,81,36,77,38,17,2,29,100,26,86,22,18,38,64,82,51,39,7,88,53,82,30,98,86";
      // TODO: split the $numbers variable to an array
      // called $number_list      
      $number_list = explode(",", $numbers);      
      print_r($number_list);
      ?>
      /* Array (
    [0] => 38
    [1] => 42
    [2] => 58
    [3] => 48
    [4] => 33
    [5] => 59
    [6] => 87
    [7] => 17
    [8] => 20
    [9] => 8
    [10] => 98
    [11] => 14
    [12] => 62
    [13] => 66
    [14] => 14
    [15] => 62
    [16] => 97
    [17] => 66
    [18] => 74
    [19] => 78
    [20] => 66
    [21] => 2
    [22] => 79
    [23] => 29
    [24] => 72
    [25] => 6
    [26] => 3
    [27] => 71
    [28] => 46
    [29] => 68
    [30] => 48
    [31] => 4
    [32] => 12
    [33] => 52
    [34] => 66
    [35] => 48
    [36] => 14
    [37] => 39
    [38] => 63
    [39] => 69
    [40] => 81
    [41] => 61
    [42] => 21
    [43] => 77
    [44] => 10
    [45] => 44
    [46] => 39
    [47] => 82
    [48] => 19
    [49] => 77
    [50] => 100
    [51] => 98
    [52] => 53
    [53] => 95
    [54] => 30
    [55] => 17
    [56] => 30
    [57] => 96
    [58] => 68
    [59] => 47
    [60] => 81
    [61] => 52
    [62] => 82
    [63] => 11
    [64] => 13
    [65] => 83
    [66] => 10
    [67] => 14
    [68] => 49
    [69] => 96
    [70] => 27
    [71] => 73
    [72] => 42
    [73] => 76
    [74] => 71
    [75] => 15
    [76] => 81
    [77] => 36
    [78] => 77
    [79] => 38
    [80] => 17
    [81] => 2
    [82] => 29
    [83] => 100
    [84] => 26
    [85] => 86
    [86] => 22
    [87] => 18
    [88] => 38
    [89] => 64
    [90] => 82
    [91] => 51
    [92] => 39
    [93] => 7
    [94] => 88
    [95] => 53
    [96] => 82
    [97] => 30
    [98] => 98
    [99] => 86
) */


// For Loops
    // For loops are simple loops which helps us iterate over an iterable variable by using an index. 
    // There are two types of for loops - a simple (C style) for loop, and a foreach loop.
    // For loop
        // iterate over an array using index
        $odd_numbers = [1,3,5,7,9];
        for ($i = 0; $i < count($odd_numbers); $i=$i+1) { // i being index
            $odd_number = $odd_numbers[$i];
            echo $odd_number . "\n";
        }
        /* 
            The first line of the for loop defines 3 parts:
            1. The initialization statement - in our case, we initialize the iterator variable $i to 0.
            2. The condition statement - this statement gets evaluated in every loop. The loop stops when this condition is unmet. 
               This will happen when the iterator variable $i will be larger than the length of the array.
            3. The increment statement - this statement is executed every iteration to increase the index variable by the needed amount. 
                Usually, we will increase $i by 1. There are two shorter ways of increasing a variable by 1 as well. We can use $i+=1 or $i++ as well.
        */

    // Foreach loop
        // iterates on all members of an array or object
        $odd_numbers = [1,3,5,7,9];
        foreach ($odd_numbers as $odd_number) {
          echo $odd_number . "\n";
        }
            // instead of iterating as an index, get the item from the array directly into the array variable
        // array with keys
        $phone_numbers = [
            "Alex" => "415-235-8573",
            "Jessica" => "415-492-4856",
          ];          
          foreach ($phone_numbers as $name => $number) {
            echo "$name's number is $number.\n";
          }
          /* Alex's number is 415-235-8573.
            Jessica's number is 415-492-4856. */

        // EXERCISE
        <?php
        $even_numbers = [2,4,6,8,10,12,14,16,18,20];        
        foreach ($even_numbers as $even_numbers) {
             echo $even_numbers . "\n";
        }
        ?>
        /* OUTPUT 
        2
        4
        6
        8
        10
        12
        14
        16
        18
        20 */


        // DIFFERENCE BETWEEN FOR & WHILE LOOPS
            /* The main difference between for loops and while loops is that for loops are used to iterate over an array or an object, 
            and a while loop will execute an unknown amount of times, depending on variable conditions (for example, until a user has 
            entered the correct input). */

// While Loops
        // While loops are simple blocks that execute repeatedly until the while loop condition is not met.
        $counter = 0;
        while ($counter < 10) {
            $counter += 1;
            echo "Executing - counter is $counter.\n";
        }
        /* OUTPUT:
        Executing - counter is 1.
        Executing - counter is 2.
        Executing - counter is 3.
        Executing - counter is 4.
        Executing - counter is 5.
        Executing - counter is 6.
        Executing - counter is 7.
        Executing - counter is 8.
        Executing - counter is 9.
        Executing - counter is 10. */

        // Flow statements
            // break statement - quits loop at the middle of the block
            $counter = 0;
            while ($counter < 10) {
                $counter += 1;            
                if ($counter > 8) {
                    echo "counter is larger than 8, stopping the loop.\n";
                    break;
                }            
                if ($counter % 2 == 0) {
                    echo "Skipping number $counter because it is even.\n";
                    continue;
                }            
                echo "Executing - counter is $counter.\n";
            }
            /* OUTPUT:
                Executing - counter is 1.
                Skipping number 2 because it is even.
                Executing - counter is 3.
                Skipping number 4 because it is even.
                Executing - counter is 5.
                Skipping number 6 because it is even.
                Executing - counter is 7.
                Skipping number 8 because it is even.
                counter is larger than 8, stopping the loop. */


            // continue statement - returns to the top - re-checking the loop condition is met
            $counter = 0;
            while ($counter < 10) {
                $counter += 1;            
                if ($counter % 2 == 0) {
                    echo "Skipping number $counter because it is even.\n";
                    continue;
                }            
                echo "Executing - counter is $counter.\n";
            }
            /* OUTPUT:
            Executing - counter is 1.
            Skipping number 2 because it is even.
            Executing - counter is 3.
            Skipping number 4 because it is even.
            Executing - counter is 5.
            Skipping number 6 because it is even.
            Executing - counter is 7.
            Skipping number 8 because it is even.
            Executing - counter is 9.
            Skipping number 10 because it is even. */


/* Exercise
Use a while loop to print all odd numbers in an array. Use the continue statement to skip loops and avoid printing even numbers.
Remember - you will need to use the \n character sequence at the end of the echo statement to continue to the next line.
Tip: to test whether a number is even, check if the number modulus 2 is equal to zero ($number % 2 == 0). */
<?php
$numbers = [56, 65, 26, 86, 66, 34, 78, 74, 67, 18, 34, 73, 45, 67, 75, 10, 60, 80, 74, 16, 86, 34, 12, 23, 42, 72, 36, 3, 73, 9, 92, 81, 94, 54, 97, 74, 45, 55, 70, 94, 96, 81, 86, 86, 84, 4, 32, 8, 96, 86, 87, 18, 84, 87, 59, 48, 32, 90, 17, 22, 82, 79, 66, 28, 17, 14, 80, 83, 66, 36, 21, 89, 68, 2, 51, 65, 20, 87, 48, 5, 1, 16, 60, 53, 84, 90, 16, 2, 37, 73, 57, 70, 57, 69, 68, 1, 24, 40, 72, 97];

// TODO: Print odd numbers only
$index = 0;
while ($index < count($numbers)) {    
    $number = $numbers[ $index ];
    ++$index; 	
    if ($number % 2 == 0) {     
      continue;
    }    
    echo "$number\n";
}
?>

/* OUTPUT: 
65
67
73
45
67
75
23
3
73
9
81
97
45
55
81
87
87
59
17
79
17
83
21
89
51
65
87
5
1
53
37
73
57
57
69
1
97 */


// Functions
    // two types
        // 1. Library functions
            // part of the php library - everyone can use
        // 2. User functions
            // Your own functions - only you cna use
    
        // define a function called `sum` that will
        // receive a list of numbers as an argument.
        function sum($numbers) {
            // initialize the variable we will return
            $sum = 0;
            // sum up the numbers
            foreach ($numbers as $number) {
                $sum += $number;
            }
            // return the sum to the user
            return $sum;
        }
        // Example usage of sum
        echo sum([1,2,3,4,5,6,7,8,9,10]); // OUTPUT: 55

    // EXERCISE:
    <?php
    // Write the function squared_sum here    
    function squared_sum($numbers) {
         $sum = 0;        
        foreach ($numbers as $number) {
            $sum += $number * $number;
        }        
        return $sum;
    }    
    echo squared_sum([56, 65, 26, 86, 66, 34, 78, 74, 67, 18, 34, 73, 45, 67, 75, 10, 60, 80, 74, 16, 86, 34, 12, 23, 42, 72, 36, 3, 73, 9, 92, 81, 94, 54, 97, 74, 45, 55, 70, 94, 96, 81, 86, 86, 84, 4, 32, 8, 96, 86, 87, 18, 84, 87, 59, 48, 32, 90, 17, 22, 82, 79, 66, 28, 17, 14, 80, 83, 66, 36, 21, 89, 68, 2, 51, 65, 20, 87, 48, 5, 1, 16, 60, 53, 84, 90, 16, 2, 37, 73, 57, 70, 57, 69, 68, 1, 24, 40, 72, 97]);    
    ?> // OUTPUT: 382629


// Objects



    ?>