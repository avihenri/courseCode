<?php
function numbers() {
    yield 1;
    yield 2;
    // Delegate next set of values to another generator
    yield from letters();
    yield 3;
    yield 4;
}
function letters() {
    yield 'a';
    yield 'b';
    yield 'c';
}

$gen = numbers();

foreach ($gen as $value) {
    echo "$value ";
}