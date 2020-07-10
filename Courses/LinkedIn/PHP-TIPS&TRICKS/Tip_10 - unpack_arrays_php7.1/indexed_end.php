<?php
$purchases = [
    ['T-shirt', '29.95'],
    ['Jeans', '69.50'],
    ['Sweater', '117.99']
];

echo '<ul>';
foreach ($purchases as [$item, $price]) {
    echo "<li>$item: \$$price</li>";
}
echo '</ul>';