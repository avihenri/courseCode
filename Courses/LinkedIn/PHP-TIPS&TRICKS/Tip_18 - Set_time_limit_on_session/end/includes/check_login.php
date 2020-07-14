<?php
$limit = 5;
session_start();
if (!isset($_SESSION['authenticated'])) {
    // Redirect if not logged in
    header('Location: http://localhost/phptips/login.php');
    exit;
} elseif ($_SESSION['authenticated'] + $limit < time()) {
    $expired = true;
    require 'logout.php';
} else {
    $_SESSION['authenticated'] = time();
}