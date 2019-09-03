<?php>
/*
World Traveler
Hello there, friend! We’re exhausted having just returned to New York City from a whirlwind of world travel. 
We’re bringing all our international currency to the bank to be exchanged for USD. Our travels have made us 
wise and weary, and we want to ensure we’re being treated fairly. Can you help?
*/


$riel = 2103942;
$kyat = 19092;
$krones = 109;
$lek = 9094;

echo "To start you had $riel riel, $kyat kyat, $krones krones and $lek lek";

$riel_rate_usd = 0.00025;
$kyat_rate_usd = 0.00066;
$krones_rate_usd = 0.12;
$lek_rate_usd = 0.0091;

$usd_riel = $riel * $riel_rate_usd;
$usd_kyat = $kyat * $kyat_rate_usd;
$usd_krones = $krones * $krones_rate_usd;
$usd_lek = $lek * $lek_rate_usd;

echo "\n";
echo "Reil in dollars = $usd_riel";
echo "\n";
echo "Kyat in dollars = $usd_kyat";
echo "\n";
echo "Krones in dollars = $usd_krones";
echo "\n";
echo "Lek in dollars = $usd_lek";
echo "\n";


$final_amount = $usd_riel + $usd_kyat+ $usd_krones + $usd_lek;
echo $final_amount;

