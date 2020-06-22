<?php
$width = 3264;
$height = 4928;
$new_height = 350;

// Calculate scaling ratio
$ratio = $new_height/$height;
// Calculate scaled width
$new_width = $width * $ratio;
echo $new_width;

