<?php
$files = new FilesystemIterator('files');

foreach ($files as $file) {
    echo $file . '<br>';
}