<?php
$images = new FilesystemIterator('./images');
foreach ($images as $image) {
    // Get the current image's MIME type
    $mime = getimagesize($image)['mime'];
    // Strip off the leading 'image/'
    $mime = substr($mime, 6);
    echo $mime . '<br>';
    // Use $mime to create variable functions
    /*$createResource = "imagecreatefrom$mime";
    $outputImg = "image$mime";
    // Create an image resource of the right MIME type
    $resource = $createResource($image);
    $rotated = imagerotate($resource, 90, 0);
    // Output the rotated image using the right MIME type
    $outputImg($rotated, $image->getPath() . '/rotated_' . $image->getFilename());
    // Free up memory by destroying the image resources
    imagedestroy($resource);
    imagedestroy($rotated);*/
}
//echo 'Done';