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