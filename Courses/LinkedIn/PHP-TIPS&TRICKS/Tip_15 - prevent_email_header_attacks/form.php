<?php
if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Comments: $comments";

    mail('me@example.com', 'Form feedback', $message, "From: $email");
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