<!-- INTRODUCTION TO PHP -->
<!-- How is PHP used in HTML? -->

    <!-- The start of in-line PHP is denoted with <?php // and the end is denoted with ?>. -->

    <!-- echo -->
        <?php echo "<p>hello</p>"; ?; // is the same as html <p>hello</p>

// PHP Comments
    // single line or with a #
    # see
    
    /* or multi-line */

// Todo: Learn PHP
    /*
    The todo list example is frequently used when demonstrating a web framework or technology. 
    It provides a way to exhibit how the CRUD (Create, Read, Update, Delete) behaviors are 
    implemented using a specific technology.

    Within a todo app, the functionality is typically:
        Add new items to the list (Create)
        View the existing list (Read)
        Change the completion status of each item (Update)
        Remove items from the list (Delete)
    */

    // EXAMPLE: todo App
    <?php
    require 'vendor/autoload.php';
    # This logic handles connecting to the database, where we store our todo status
    $pdo = new \PDO("sqlite:" . "db/sqlite.db");
    
    # This PHP logic handles user actions
    # New TODO
    if (isset($_POST['submit'])) 
    {
      $description = $_POST['description'];
      $sth = $pdo->prepare("INSERT INTO todos (description) VALUES (:description)");
      $sth->bindValue(':description', $description, PDO::PARAM_STR);
      $sth->execute();
    }
    # Delete TODO
    elseif (isset($_POST['delete']))
    { 
      $id = $_POST['id'];
      $sth = $pdo->prepare("delete from todos where id = :id");
      $sth->bindValue(':id', $id, PDO::PARAM_INT);
      $sth->execute();
    }
    # Update completion status
    elseif (isset($_POST['complete']))
    {
        $id = $_POST['id'];
        $sth = $pdo->prepare("UPDATE todos SET complete = 1 where id = :id");
        $sth->bindValue(':id', $id, PDO::PARAM_INT);
        $sth->execute();
    }
    # Here is the HTML:
    ?>
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
      <title>Todo List</title>
    </head>
    
    <body class="container">
      <h1>Todo List</h1>
      <form method="post" action="">
        <input type="text" name="description" value="">
        <input type="submit" name="submit" value="Add">
      </form>
      <h2>Current Todos</h2>
      <table class="table table-striped">
        <thead><th>Task</th><th></th><th></th></thead>
        <tbody>
    
    <?php
      # Entering PHP mode, 
    $sth = $pdo->prepare("SELECT * FROM todos ORDER BY id DESC");
    $sth->execute();
    
    foreach ($sth as $row) {
      # Exiting PHP Mode
        ?> 
    <tr>
      <td>
          <!-- This is PHP shorthand for inserting dynamic text into HTML -->
          <?=htmlspecialchars($row['description'])?></td>
      <td>
        <?php # Here we are mixing HTML and PHP to get the desired document
    if (!$row['complete']) {
            ?>
        <form method="POST">
          <button type="submit" name="complete">Complete</button>
          <input type="hidden" name="id" value="<?=$row['id']?>">
          <input type="hidden" name="complete" value="true">
        </form>
        <?php
    } else {
            ?>
        Task Complete!
        <?php
    }
        ?>
      </td>
      <td>
        <form method="POST">
          <button type="submit" name="delete">Delete</button>
          <input type="hidden" name="id" value="<?=$row['id']?>">
          <input type="hidden" name="delete" value="true">
        </form>
      </td>
    </tr>
    <?php
    }
    ?>
        </tbody>
      </table>
    </body>
    </html>
    /*
    Todo List 
        Current Todos
        Task		
        clean	|Complete| |Delete| (buttons)
    */
/* Review
In the next lesson, you’ll start creating your own PHP code. Take a second and review what you already know about PHP:

Despite its age, PHP is still a commonly used technology in web development.
PHP is designed to interact with HTML to generate dynamic websites.
Embedding PHP in HTML is done by placing PHP code between <?php and ?> tags.
Every statement in PHP must be terminated with a semicolon ;.
PHP files have a .php extension and the file always starts with the opening PHP tag <?php. The closing tag is implied and left out by convention.
Whitespace is generally ignored when executing PHP code.
Keywords are not case sensitive in PHP. As a convention, use the standard casing.
Single line comments are made in PHP using # or //. Multi-line comments are placed between /* and */

