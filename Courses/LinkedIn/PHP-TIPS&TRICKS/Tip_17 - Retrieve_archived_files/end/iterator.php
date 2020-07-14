<?php
$files = new FilesystemIterator('files');
$files = new RegexIterator($files, '/\.(?!(jpg|png|gif)$)/i');
$now = new DateTime();

foreach ($files as $file) {
    $modified = new DateTime('@' . $file->getMTime());
    if ($modified->diff($now)->days > 182) {
        echo $file->getFilename() . ': ' . $modified->format('F j, Y') . '<br>';
    }
}