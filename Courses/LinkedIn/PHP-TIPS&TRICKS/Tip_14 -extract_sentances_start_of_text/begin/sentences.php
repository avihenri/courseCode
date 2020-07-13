<?php
$text = file_get_contents('alice.txt');

$pattern = '';
$sentences = preg_split($pattern, $text, 3);

echo '<div style="white-space: pre-line">';
print_r($sentences);
echo '</div>';