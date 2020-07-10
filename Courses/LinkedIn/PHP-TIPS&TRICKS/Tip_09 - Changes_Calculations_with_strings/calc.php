<?php
$max = ini_get('post_max_size');
echo $max;

function convertToBytes($val) {
    $val = trim($val);
    // Get last character and convert to lowercase
    $last = strtolower($val[strlen($val)-1]);
    if (in_array($last, array('g', 'm', 'k'))){
        // Use fall-through to calculate the number of bytes
        switch ($last) {
            case 'g':
                $val *= 1024;
            case 'm':
                $val *= 1024;
            case 'k':
                $val *= 1024;
        }
    }
    return $val;
}
