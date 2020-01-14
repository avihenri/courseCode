<?php
/*
Collecting input from users is necessary, but nefarious users can use this as an opportunity to mess with things.
Just like the parents of Bobby Tables.
We’ve made a form for a user to create a profile on our site. We want to collect the user’s name, character, email and birth year. 
Our users have been having a field day with this and we need to clean up our form.

Let’s begin!
*/

$name = "";
$character = "";
$email = "";
$birth_year = 1969;
$validation_error = "";
$existing_users = ["admin", "guest"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $raw_name = trim(htmlspecialchars($_POST["name"]));
  if (in_array($raw_name, $existing_users)) {
    echo $validation_error .= "This name is taken. <br>";
  } else {
    $name = $raw_name;
  }
  $character = $_POST["character"];
  $email = $_POST["email"];
  $birth_year = $_POST["birth_year"];
}
?>
<h1>Create your profile</h1>
<form method="post" action="">
<p>
Select a name: <input type="text" name="name" value="<?php echo $name;?>" >
</p>
<p>
Select a character:
  <input type="radio" name="character" value="wizard" <?php echo ($character=='wizard')?'checked':'' ?>> Wizard
  <input type="radio" name="character" value="mage" <?php echo ($character=='mage')?'checked':'' ?>> Mage
  <input type="radio" name="character" value="orc" <?php echo ($character=='orc')?'checked':'' ?>> Orc
</p>
<p>
Enter an email:
<input type="text" name="email" value="<?php echo $email;?>" >
</p>
<p>
Enter your birth year:
<input type="text" name="birth_year" value="<?php echo $birth_year;?>">
</p>
<p>
  <span style="color:red;"><?= $validation_error;?></span>
</p>
<input type="submit" value="Submit">
</form>
  
<h2>Preview:</h2>
<p>
  Name: <?=$name;?>
</p>
<p>
  Character Type: <?=$character;?>
</p>
<p>
  Email: <?=$email;?>
</p>
<p>
  Age: <?=date("Y")-$birth_year;?>
</p>