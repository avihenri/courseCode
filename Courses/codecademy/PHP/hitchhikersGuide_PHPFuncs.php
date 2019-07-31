<?php
/*
LEARN PHP
The Hitchhiker's Guide to PHP Math Functions https://www.php.net/docs.php
Each step of the project provides a math operation that can be completed using built-in PHP functions. 
Use the documentation to find them and apply them correctly to get the answer. */

// octdec ( string $octal_string ) : number - converts octal number to decimal
    $initial = '555';
    $a = octdec($initial);
    echo $a . "\n"; // 365

// deg2rad ( float $number ) : float - converts degrees to radian
    $b = deg2rad($a);
    echo $b . "\n"; // 6.3704517697793

// cos ( float $arg ) : float -    
    $c = cos($b);
    echo $c . "\n"; // 0.99619469809175

// round ( float $val [, int $precision = 0 [, int $mode = PHP_ROUND_HALF_UP ]] ) : float
    $d = round($c, 3);
    echo $d . "\n"; // 0.996

// log ( float $arg [, float $base = M_E ] ) : float 
    $e = log($d);
    echo $e . "\n"; //-0.0040080213975388

// abs ( mixed $number ) : number
    $f = abs($e);
    echo $f . "\n"; //  0.0040080213975388

// acos ( float $arg ) : float
    $g = acos($f);
    echo $g . "\n"; // 1.5667882946663

// rad2deg ( float $number ) : float
    $h = rad2deg($g);
    echo $h . "\n"; // 89.770356674879

// floor ( float $value ) : float
    $i = floor($h);
    echo $i . "\n"; // 89

// subtract 47 from $i
    $j = $i - 47;
    echo $j; // 42