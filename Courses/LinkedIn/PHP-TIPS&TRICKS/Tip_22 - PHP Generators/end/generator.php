<?php
function counter($num) {
    $i = 1;
    $total = 0;
    while ($i <= $num) {
//        if ($i == 10) return;
        $total += $i;
        yield $i++;
    }
    return $total;
}

$count = counter(10);

foreach ($count as $num) {
    echo "$num ";
}
echo 'Total: ' . $count->getReturn();