<?php
$content = file_get_contents('alice.txt');
//$content = nl2br($content);

function createParas($text) {
    $text = trim($text);
    return '<p>' . preg_replace('/[\r\n]+/', "</p>\n<p>", $text) . "</p>\n";
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Real Paragraphs</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body>
<h1>Down the Rabbit Hole</h1>
<?= createParas($content); ?>
</body>
</html>
