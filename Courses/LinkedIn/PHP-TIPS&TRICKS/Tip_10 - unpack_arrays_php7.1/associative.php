<?php
$purchases = [
    ['item' => 'T-shirt', 'price' => '29.95', 'quantity' => 3],
    ['item' => 'Jeans', 'price' => '69.50', 'quantity' => 2],
    ['item' => 'Sweater', 'price' => '117.99', 'quantity' => 1]
];

echo '<ul>';
foreach ($purchases as $purchase) {
    echo '<li>' . $purchase['item'] . ': ' . $purchase['quantity'] . ' @ $' . $purchase['price'] . '</li>';
    }
echo '</ul>';