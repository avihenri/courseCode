<?php
function svg2uri(array $svgs, $outputfile, $overwrite = false) {
    // Set write mode for output file and open it
    $mode = $overwrite ? 'w' : 'a';
    $file = fopen($outputfile, $mode);
    // Process the SVGs
    foreach ($svgs as $svg) {
        // Get the SVG data
        $data = file_get_contents($svg);
        // URL-encode it
        $data = rawurlencode($data);
        // Restore permitted characters
        $data = str_replace(
            ['%09', '%20', '%3D', '%3A', '%2F', '%22', '%0A', '%0D'],
            [' ',   ' ',   '=',   ':',    '/',   "'"],
            $data
        );
        // Identify the image being converted
        $output = basename($svg) . PHP_EOL . '++++++++++++++++' . PHP_EOL;
        // Build the data URI
        $output .= 'data:image/svg+xml;utf8,' . $data;
        // Write the current data URI and two line breaks to the output file
        fwrite($file, $output . PHP_EOL . PHP_EOL);
    }
    // Close the output file
    fclose($file);
    echo 'Processing complete';
}

svg2uri(['images/car.svg', 'images/tent.svg'], 'data_uris.txt');