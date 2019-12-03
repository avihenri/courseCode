<?php 
/*
This lesson will cover the following PHP loop types:
- while
- do … while
- for
- foreach 
*/


// While loop. This type of loop continues to iterate as long as its conditional is true.
    // This code outputs the numbers from 1-10
    $count = 1;
    while ($count < 11)
    {
    echo "The count is: " . $count . "\n";
    $count += 1;
    }
    // WORKING EXAMPLE - modulo operator
    $count = 1;
    while ($count < 101) {
      if ($count % 33 === 0) {
        echo $count . " is divisible by 33\n";
      }
      $count++;
    }
    /* OUTPUT:
    33 is divisible by 33
    66 is divisible by 33
    99 is divisible by 33 */

// DO ... WHILE
    // Similar to while loop
    // Will execute once outide of conditional check then will do conditional check like while loop
    // requires semicolon at the end
    // use this loop if you need the code block to execute at least once
    $count = 1;
    do {
      echo "The count is: " . $count . "\n";
      $count += 1;
    } while ($count < 11);
    // EXAMPLE - guess the number
    do {
      $guess = readline("\nGuess the number\n");
    } while ($guess != "42");
    echo "\nYou correctly guessed 42!";
    // WORKING EXAMPLE - PLANT GROWTH
    $plant_height = 35;
    do {
      echo "The plant is " . $plant_height . " tall.\n";
      if ($plant_height >= 30) {
        echo "And can produce fruit.\n";
      }
      $plant_height++;
    } while ($plant_height <= 30);
    // The plant is 35 tall.
    // And can produce fruit.

// FOR LOOP
    // Executes code a specific number of times
    // 3 expressions - 1) evaluated once at first iteration, initailises count; 
    //                  2) evaluated before each iteration, if true code execute otherwise it terminates;
    //                  3) evaluted after each iteration, can increment/decrement depeding on what is required
    // In our counting to 10 example, the syntax becomes:
    for ($count = 1; $count < 11; $count++)
    {
      echo "The count is: " . $count . "\n";
    }
    // After 10 iterations, the value of the $count variable is 11. This makes the second expression FALSE and the loop execution terminates.

// FOREACH LOOP
    // Iterates over an array
    // counting to 10 example becomes:
    $counting_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    foreach ($counting_array as $count) {
      echo "The count is: " . $count . "\n";
    }
    // arrays with keys and values:
    $details_array = ["color" => "blue", "shape" => "square"];
    foreach ($details_array as $detail) {
      echo "The detail is: " . $detail . "\n";
    }
    /* OUTPUT:
    The detail is: blue
    The detail is: square */  
    // Get access to the keys as well as the values:
    $details_array = ["color" => "blue", "shape" => "square"];
    foreach ($details_array as $attribute => $detail) {
      echo "The " . $attribute . " is: " . $detail . "\n";
    }
    /* OUTPUT:
      The color is: blue
      The shape is: square */
    //EXAMPLE
    $scores = [
      "Alice" => 99,
      "Bob" => 95,
      "Charlie" => 98,
      "Destiny" => 91,
      "Edward" => 88
    ];
    
    foreach ($scores as $score) {
      echo "Someone received a score of $score.\n";
    }
    
    foreach ($scores as $name => $score) {
      echo "$name received a score of $score.\n";
    }

// BREAK & CONTINUE
    // Break can be used on any loop to terminate it
    // example with our while loop
    $count = 1;
    while ($count < 11)
    {
      echo "The count is: " . $count . "\n";
      if ($count === 5) {
        break; // The code will now count from 1 to 5 and then stop
      }
      $count += 1;
    }
    
    // continue ends the current iteration early and not the entire loop
    $count = 1;
    while ($count < 11)
    {
      if ($count === 5) {
        $count += 1; // ($count += 1;) before continue to avoid being caught in an infinite loop.
        continue;
      }
      echo "The count is: " . $count . "\n";
      $count += 1;
    }

    // EXAMPLE
    for ($i = 10; $i >= 0; $i--) {
      if ($i === 6) {
        continue;
      }
      if ($i === 2) {
        echo "Ready!\n";
      } elseif ($i === 1) {
        echo "Set!\n";
        break;
      } elseif ($i === 0) {
        echo "Go!\n";
      } else {
        echo $i . "\n";
      }
    } 
    /*10
    9
    8
    7
    5
    4
    3
    Ready!
    Set! */

    /*
      Review
      Now you have the ability to repeat execution of code blocks as necessary in your PHP programs.

      Here is a summary of the topics covered in this lesson:

      while loops execute only as long as their conditional evaluates to TRUE.
      do…while loops always execute at least once and then continue executing while their conditional is TRUE.
      for loops contain 3 expressions and are frequently used to execute a code block a specific number of times.
      The first expression is executed prior to the first iteration.
      The second expression is evaluated prior to each iteration. If TRUE, the code block executes. Otherwise, the loop terminates.
      The third expression is evaluated after each iteration.
      foreach loops are used for iterating over the elements of an array. The key and value of each element is available in the code block.
      break is used to end execution of a loop early.
      continue is used to end execution of a loop iteration early and continues to the next iteration. */