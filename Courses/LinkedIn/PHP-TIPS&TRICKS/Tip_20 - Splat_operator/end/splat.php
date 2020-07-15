<?php
function average(...$vals) {
    return round(array_sum($vals)/count($vals), 1);
}
echo average(4, 6, 8, 9);