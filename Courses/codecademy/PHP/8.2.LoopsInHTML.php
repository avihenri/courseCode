<?php
/*
Why Use Shorthand?
Using the traditional loop syntax in PHP with brackets ({}) to open and close code blocks can be used when embedding PHP code in HTML:
*/
<ul>
<?php
for ($i = 0; $i < 2; $i++) {
?>
<li>Duck</li>
<?php
}
?>
<li>Goose</li>
</ul>

/* The readability of the above on large doc's would be hard so to help you can use a colon ( : ) instead of a bracket ( { ).
Instead of a closing bracket we use a closing keyword & a semicolon ( ; ) */

<ul>
<?php
for ($i = 0; $i < 2; $i++):
?>
<li>Duck</li>
<?php
endfor;
?>
<li>Goose</li>
</ul>

// Loop Shorthand
    // while - endwhile
    <ul>
    <?php
    $i = 0;
    while ($i < 2):
    ?>
    <li>Duck</li>
    <?php
    $i++;
    endwhile;
    ?>
    <li>Goose</li>
    </ul>
    // foreach - endforeach
    <ul>
    <?php
    $array = [0, 1];
    foreach ($array as $i):
    ?>
    <li>Duck</li>
    <?php
    endforeach;
    ?>
    <li>Goose</li>
    </ul>

// Echo Shorthand    
    $array = ["Alice", "Bob", "Charlie"];
    foreach($array as $name): ?>
    <p><?=$name?></p> // instead of <?php
    <?php endforeach; ?>


/*
Review
With the PHP shorthand you have just learned, you can now create more readable HTML files with embedded PHP loops.

Here are the key ideas from this lesson:

The PHP shorthand for loops uses a colon (:) instead of a bracket ({) to open the code block.
The shorthand uses keywords to close the code block instead of a bracket (}):
Use endfor to close a for loop
Use endforeach to close a foreach loop
Use endwhile to close a while loop
The closing keyword needs to be followed by a semicolon (;).
Make sure to re-enter PHP mode using <?php or the echo shorthand <?= before using PHP variables in the loop */