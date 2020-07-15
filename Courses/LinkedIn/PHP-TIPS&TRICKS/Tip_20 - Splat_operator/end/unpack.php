<?php
function process_row($city, $tempF) {
    // Convert Fahrenheit to Celsius
    $tempC = round(($tempF-32)/9*5);
    // Display result
    echo "$city: {$tempF}F ({$tempC}C)<br>";
}

// Process CSV file
$file = fopen('./weather.csv', 'r');
// Ignore the first row of column headings
$first_row = fgetcsv($file);
// Loop through the rest of the CSV file
while(!feof($file)) {
    // Get the current line as an array
    $row = fgetcsv($file);
    if($row) {
        // Output the current row
        process_row(...$row);
    }
}
fclose($file);

