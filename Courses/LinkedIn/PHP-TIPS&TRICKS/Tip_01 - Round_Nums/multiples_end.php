<?php
$width = 3264;
$height = 4928;
$new_height = 350;

// Calculate scaling ratio
$ratio = $new_height/$height;
// Calculate scaled width
//$new_width = round($width * $ratio, -2);
//echo $new_width;

function roundNextMultiple($val, $multiple) {
    return ceil($val/$multiple) * $multiple;
}

echo roundNextMultiple($width * $ratio, 50);