<?php

// HTML - PHP Calculator
// Apply your understanding of handling HTML forms in PHP to create a calculator.

/*
You are going to build a calculator to do addition and division of two integer numbers.
Each calculator will appear as a separate form for the user on the initial page, which will be 
contained in index.php.
Begin by creating the two forms. Give each one a heading stating what the calculator will do. 
Be sure to include two number inputs for each form and a submit button.
*/

// index.php

// <html>
// <body>
// <!--Your code goes here-->
//   <h2> Addition Calculator </h2>
// <form action="addition.php" method="GET">  
//   First Num: <input type="number" name="firstNum"> <br>
//   Second Num: <input type="number" name="secondNum"> <br>
//   <button type="submit" >Go</button><br>
// </form>
  
//     <h2> Division Calculator </h2>
// <form action="division.php" method="GET">  
//   Numerator: <input type="number" name="numerator"><br>
//   Denominator: <input type="number" name="denominator"><br>
//   <button type="submit" >Go</button><br>
// </form>
  
// <a href="index.php">Reset</a>
// </body>
// </html>

// // addition.php

// <html>
// <body>
// <!--Your code goes here-->
// <?="The sum of ${_GET['firstNum']} and ${_GET['secondNum']} is:"?>
<!-- // <h4><?=$_GET['firstNum']+$_GET['secondNum']?></h4>
// <a href="index.php">Reset</a>
// </body>
// </html> -->

<!-- //  division.php -->

<html>

<body>
    <!--Your code goes here-->
    <?=$_GET['numerator']+$_GET['denominator']; ?>
    <?="${_GET['numerator']} divided by ${_GET['denominator']} is:"?>
    <h4><?=$_GET['numerator']+$_GET['denominator']?></h4>
    <a href="index.php">Reset</a>
</body>

</html>