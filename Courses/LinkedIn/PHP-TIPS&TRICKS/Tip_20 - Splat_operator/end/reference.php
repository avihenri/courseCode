<?php
function discount($rate, &...$prices) {
    foreach ($prices as &$price) {
        $price = $price - ($rate * $price/100);
    }
}
$tshirt = 20;
$shoes = 70;
discount(10, $tshirt, $shoes);
echo "t-shirt: $tshirt<br>";
echo "shoes: $shoes<br>";