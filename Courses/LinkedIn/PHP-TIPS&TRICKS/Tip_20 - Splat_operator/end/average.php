<?php
function average($vals) {
    // Get the arguments as an array
    $vals = func_get_args();
    // Get the number of arguments
    $count = func_num_args();
    // Calculate the average to one decimal point
    return round(array_sum($vals)/$count, 1);
}
echo average(2, 4, 6, 8);