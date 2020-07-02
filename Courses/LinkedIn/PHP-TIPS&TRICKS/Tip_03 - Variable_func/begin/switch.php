<?php
$images = new FilesystemIterator('./images');
foreach ($images as $image) {
    // Get the current image's MIME type
    $mime = getimagesize($image)['mime'];
    // Strip off the leading 'image/'
    $mime = substr($mime, 6);
    // Create an image resource
    switch ($mime) {
        case 'gif':
            $resource = imagecreatefromgif($image);
            break;
        case 'jpeg':
            $resource = imagecreatefromjpeg($image);
            break;
        case 'png':
            $resource = imagecreatefrompng($image);
    }
    // Do something with the image resource
    // Create the filename for the output image
    $filename = $image->getPath() . '/edited_' . $image->getFilename();
    // Output the result with the correct MIME type
    switch ($mime) {
        case 'gif':
            imagegif($resource, $filename);
            break;
        case 'jpeg':
            imagejpeg($resource, $filename);
            break;
        case 'png':
            imagepng($resource, $filename);
    }
    // Free up memory by destroying the image resource
    imagedestroy($resource);
}