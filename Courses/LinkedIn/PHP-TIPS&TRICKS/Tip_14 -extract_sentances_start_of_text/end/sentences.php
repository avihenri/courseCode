<?php
$text = file_get_contents('alice.txt');

$pattern = '/([.!?]["\']?\)?\s)/';
$sentences = preg_split($pattern, $text, 3, PREG_SPLIT_DELIM_CAPTURE);

echo '<div style="white-space: pre-line">';
print_r($sentences);
echo '</div>';