<?php 
/*
FizzBuzz
FizzBuzz is one of the most commonly used interview questions for applicants to programming positions. Each interviewer has their own variant, but the prompt is usually something like:

Write code that prints the numbers from 1 to 100 (inclusive), except for these cases:
- If a number is a multiple of 3, write "Fizz".
- If a number is a multiple of 5, write "Buzz".
- If a number is a multiple of both 3 and 5, write "FizzBuzz".
Despite the order that the interviewer introduces the various conditions, you actually need to check for numbers divisible by 15 first. 
If you check first for divisible by 3, you will print "Fizz" and skip past the elseif check for 15.
Remember to use the modulo operator (%) to check if a number is divisible by another. The modulus is 0 when two numbers are divisible.
*/

// WHILE LOOP SOLUTION
$counter = 1;
while ($counter < 100) {
  if ($counter % 15 === 0) {
    echo "FizzBuzz\n";
  } elseif ($counter % 3 === 0) {
    echo "Fizz\n";
  } elseif ($counter % 5 === 0) {
    echo "Buzz\n";
  } else {
     echo $counter . "\n";
  }   
    $counter += 1;
}

// FOR & FOREACH LOOP SOLUTION
$output = [];
for ($i = 1; $i < 100; $i++) {
  if ($i % 15 === 0) {
    array_push($output, "FizzBuzz");
  } elseif ($i % 3 === 0) {
    array_push($output, "Fizz");
  } elseif ($i % 5 === 0) {
   array_push($output, "Buzz");
  } else {
     array_push($output, $i);
  }  
  foreach ($output as $value) {
    echo $value . "\n";
  }
}

// BREAK & CONTINUE SOLUTION
foreach ($output as $value) {
    if ($value === "Fizz") {
      continue;
    } elseif ($value === "FizzBuzz") {
      echo $value . "\n";
      break;
    }
      echo $value . "\n";
}


