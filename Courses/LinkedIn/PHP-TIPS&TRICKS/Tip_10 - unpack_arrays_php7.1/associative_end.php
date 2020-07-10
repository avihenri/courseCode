<?php
$purchases = [
    ['item' => 'T-shirt', 'price' => '29.95', 'quantity' => 3],
    ['item' => 'Jeans', 'price' => '69.50', 'quantity' => 2],
    ['item' => 'Sweater', 'price' => '117.99', 'quantity' => 1]
];

echo '<ul>';
foreach ($purchases as ['price' => $price, 'item' => $item]) {
    echo "<li>$item:  \$$price</li>";
}
echo '</ul>';