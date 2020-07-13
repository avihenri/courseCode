<?php
$members = [
    ['name' => 'Angela', 'age' => 54, 'gender' => 'f'],
    ['name' => 'Bob', 'age' => 25, 'gender' => 'm'],
    ['name' => 'Carol', 'age' => 42, 'gender' => 'f'],
    ['name' => 'Danielle', 'age' => 33, 'gender' => 'f'],
    ['name' => 'Eddie', 'age' => 45, 'gender' => 'm'],
    ['name' => 'Frank', 'age' => 37, 'gender' => 'm'],
    ['name' => 'Georgina', 'age' => 29, 'gender' => 'f'],
];

$men = [];
$women = [];
$m = $w = 0;

foreach ($members as $member) {
    if ($member['gender'] == 'm') {
        $array = 'men';
        $i = 'm';
    } else {
        $array = 'women';
        $i = 'w';
    }
    $$array[$$i]['name'] = $member['name'];
    $$array[$$i++]['age'] = $member['age'];
}

echo '<pre>';
print_r($men);
print_r($women);
echo '</pre>';
