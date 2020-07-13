<?php
$text = file_get_contents('alice.txt');

function getSentences($text, $num_sentences = 2) {
    // Regex has non-capturing group and Unicode flag for curly quotes
    $pattern = '/([.?!](?:["\'\x{2019}\x{201D}]|&rdquo;|&rsquo;)?\)?\s)/u';
    // Split the text using the regex
    $sentences = preg_split($pattern, $text, $num_sentences + 1, PREG_SPLIT_DELIM_CAPTURE);
    // If text left over, assign last array element to $remainder
    // Otherwise, set to an empty string
    if (count($sentences) > $num_sentences * 2) {
        $remainder = array_pop($sentences);
    } else {
        $remainder = '';
    }
    // Join the extracted sentences and punctuation
    $result[0] = implode('', $sentences);
    $result[1] = $remainder;
    return $result;
}

echo '<pre>';
print_r(getSentences($text, 3));
echo '</pre>';