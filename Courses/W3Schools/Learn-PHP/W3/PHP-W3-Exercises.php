<?php 
/* PHP basic [102 exercises with solution] */

    // 1. Write a PHP script to get the PHP version and configuration information.
     phpinfo();
        /*Note: phpinfo() outputs a large amount of information about the current state of PHP. 
        This includes information about PHP compilation options and extensions, the PHP version, 
        server information and environment, the PHP environment, OS version information, paths,
         master and local values of configuration options, HTTP headers, and the PHP License. */
        
    // Write a PHP script to display the following strings.
    echo "Tomorrow I'll learn PHP global variables \n";
    echo "This is a bad command : del c:\*.*" ."\n" ;
?>
<!-- // 3. $var = 'PHP Tutorial'. Put this variable into the title section, h3 tag and as an anchor text within an HTML document.- -->
<?php $var = 'PHP Tutorial';    ?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title><?php echo $var; ?> - W3resource!</title>
</head>

<body>
    <h3><?php echo $var; ?></h3>
    <p>PHP, an acronym for Hypertext Preprocessor, is a widely-used open source general-purpose scripting language. It
        is a cross-platform, HTML embedded server-side scripting language and is especially suited for web development.
    </p>
    <p><a href="https://www.w3resource.com/php/php-home.php">Go to the <?php echo $var; ?></a>.</p>
</body>

</html>

<!-- // 4. Create a simple HTML form and accept the user name and display the name through PHP echo statement. -->
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
    <form method='POST'>
        <h2>Please input your name:</h2>
        <input type="text" name="name">
        <input type="submit" value="Submit Name">
    </form>
    <?php
        //Retrieve name from query string and store to a local variable
        $name = $_POST['name'];
        echo "<h3> Hello $name </h3>";
        ?>
</body>
</html>