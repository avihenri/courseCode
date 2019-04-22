<!DOCType HTML>


<!-- // Working with Forms -->
<?php
if (isset($_POST['submit'])) {
    // process form
    printf("Username: = '%s'\n Password: '%s'\n Gender: '%s'\n Language(s): '%s'\n Comments: '%s'\n T&amp;C: '%s'\n", 
    htmlspecialchars($_POST['name']),
    htmlspecialchars($_POST['password']), 
    htmlspecialchars($_POST['gender']),
    htmlspecialchars($_POST['color']), 
    htmlspecialchars($_POST['comments']),
    htmlspecialchars(implode('', $_POST['languages'])),
    htmlspecialchars($_POST['comments']),
    htmlspecialchars($_POST['tc']) // takes a string (placeholders)
);}
?>
    <!-- // Can be Post or Get -->
    <form method="POST" action="">
        Username: <input type="text" name="name"><br>
        Password: <input type="password" name="password"><br>
        Gender: 
        <input type="radio" name="gender" value="f"> Female
        <input type="radio" name="gender" value="m"> Male<br>
        Favourite colour: 
        <select name="color" id="color">
        <option value="#f00">red</option>
        <option value="#0f0">green</option>
        <option value="#00f">blue</option>
        </select><br>
        Lanuages spoken:
        <select name="languages[]" multiple size="3">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
        </select><br>
        Comments: <textarea name="comments"></textarea><br>
        <input type="checkbox" name="tc" value="ok">I accept the T&amp;C <br>
        <input type="submit" name="submit" value="Submit">
    </form>