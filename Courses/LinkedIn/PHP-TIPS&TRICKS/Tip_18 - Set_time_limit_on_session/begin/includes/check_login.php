<?php
session_start();
if (!isset($_SESSION['authenticated'])) {
    // Redirect if not logged in
    header('Location: http://localhost/phptips/login.php');
    exit;
}