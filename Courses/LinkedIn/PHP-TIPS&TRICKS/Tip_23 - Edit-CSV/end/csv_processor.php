<?php
function csv_processor($csv_file) {
    if (@!$file = fopen($csv_file, 'r')) {
        echo "Can't open $csv_file.";
        return;
    }
    while (($data = fgetcsv($file)) !== false) {
        yield $data;
    }
    fclose($file);
}

$source = csv_processor('parking.csv');
if ($source->valid()) {
    $destination = fopen('processed.csv', 'w');
    $source->current();
    fputcsv($destination, ['address', 'latitude', 'longitude']);
    foreach ($source as $data) {
        if (preg_match('/(-?\d+\.\d+),\s(-?\d+\.\d+)/', $data[9], $matches)) {
            $output = [ucwords(strtolower($data[1])), $matches[1], $matches[2]];
            fputcsv($destination, $output);
        }
    }
    fclose($destination);
    echo 'Done';
}