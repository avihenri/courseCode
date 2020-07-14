<?php
$files = scandir('files');

foreach ($files as $file) {
    echo $file . '<br>';
}