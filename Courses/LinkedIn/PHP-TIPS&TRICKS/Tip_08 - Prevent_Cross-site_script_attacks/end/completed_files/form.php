<?php
$thispage = '/phptips/form.php';
if ($_SERVER['PHP_SELF'] !== $thispage) {
    header('Location: http://localhost/phptips/missing.php');
    exit;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PHP_SELF XSS</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>
<h1>Prevent XSS with Form</h1>
	<?php
	if (isset($_POST['name'])) {
		echo '<p>Hi, ' . htmlentities($_POST['name']) . '!</p>';
	}
	?>
<form method="post"  action="<?= $thispage; ?>">
    <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
    </p>
    <p>
        <input type="submit" name="submit" id="submit" value="Submit">
    </p>
</form>
</body>
</html>