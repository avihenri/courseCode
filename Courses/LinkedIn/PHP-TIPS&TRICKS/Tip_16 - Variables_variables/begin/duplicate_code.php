<?php // test comment
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
        $men[$m]['name'] = $member['name'];
        $men[$m++]['age'] = $member['age'];
    } else {
        $women[$w]['name'] = $member['name'];
        $women[$w++]['age'] = $member['age'];
    }
}

echo '<pre>';
print_r($men);
print_r($women);
echo '</pre>';