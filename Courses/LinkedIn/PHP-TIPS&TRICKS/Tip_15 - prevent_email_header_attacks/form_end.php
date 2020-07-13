<?php
if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $comments = $_POST['comments'];

    if ($email) {
        $message = "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Comments: $comments";

        $headers = "From: webmaster@example.com\r\nReply-to: $email";
        mail('me@example.com', 'Form feedback', $message, $headers);
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Header Injection</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Email Header Injection</h1>
<form action="form.php" method="post">
    <p>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name">
    </p>
    <p>
        <label for="email">Email address: </label>
        <input type="email" name="email" id="email">
    </p>
    <p>
        <label for="comments">Comments: </label>
        <textarea name="comments" id="comments"></textarea>
    </p>
    <p>
        <input type="submit" name="send" value="Submit">
    </p>
</form>
</body>
</html>