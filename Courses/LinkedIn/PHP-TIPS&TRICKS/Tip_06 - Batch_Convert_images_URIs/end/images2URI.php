<?php
function images2URI(array $images, $outputFile, $overwrite = false) {
    // Initialize errors array
    $errors = [];
    // Set write mode for output file
    $mode = $overwrite ? 'w' : 'a';
    // Open output file for writing
    $data_uris = fopen($outputFile, $mode);
    // Process input file(s)
    foreach ($images as $image) {
        // Get MIME type
        $mime = getimagesize($image)['mime'];
        // Acceptable MIME types
        $ok = ['image/gif', 'image/jpeg', 'image/png'];
        // Make sure the file is an image
        if (in_array($mime, $ok)) {
            // Get the image data
            $data = file_get_contents($image);
            // Identify the image being converted
            $output = basename($image) . PHP_EOL . '+++++++++++++++' . PHP_EOL;
            // Build the data URI
            $output .= "data:$mime;base64," . base64_encode($data);
            // Write the current data URI and two line breaks to the output file
            fwrite($data_uris, $output . PHP_EOL . PHP_EOL);
        } else {
            $errors[] = $image;
        }
    }
    // Close the output file
    fclose($data_uris);
    echo 'Processing complete.';
    if ($errors) {
        echo "<br>Couldn't process " . implode(', ', $errors);
    }
}

images2URI(['images/france.gif', 'images/germany.png'], 'data_uris.txt');