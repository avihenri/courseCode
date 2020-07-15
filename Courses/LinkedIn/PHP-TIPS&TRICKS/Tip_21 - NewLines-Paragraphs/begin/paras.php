<?php
$content = file_get_contents('alice.txt');
$content = nl2br($content);
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
<p><?= $content; ?></p>
</body>
</html>
