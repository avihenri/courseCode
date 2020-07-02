<?php
$width = 3264;
$height = 4928;
$new_height = 350;

// Calculate scaling ratio
$ratio = $new_height/$height;

function closestMultiple($val, $multiple) {
    return round($val/$multiple) * $multiple;
}

echo closestMultiple($width*$ratio, 50);