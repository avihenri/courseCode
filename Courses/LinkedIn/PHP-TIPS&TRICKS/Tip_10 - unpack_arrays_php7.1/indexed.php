<?php
$purchases = [
    ['T-shirt', '29.95'],
    ['Jeans', '69.50'],
    ['Sweater', '117.99']
];

echo '<ul>';
foreach ($purchases as $purchase) {
    echo "<li>$purchase[0]: \$$purchase[1]";
}
echo '</ul>';