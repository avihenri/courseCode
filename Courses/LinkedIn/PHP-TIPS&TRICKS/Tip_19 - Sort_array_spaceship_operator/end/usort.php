<?php
$members = [
    ['first_name' => 'Tom', 'last_name' => 'Barker'],
    ['first_name' => 'David', 'last_name' => 'Phillips'],
    ['first_name' => 'Peter', 'last_name' => 'Johnson'],
    ['first_name' => 'Angela', 'last_name' => 'Phillips'],
    ['first_name' => 'Jodie', 'last_name' => 'Barker'],
    ['first_name' => 'Diana', 'last_name' => 'Johnson']
];

usort($members, function ($a, $b) {
    return [$a['last_name'], $a['first_name']] <=> [$b['last_name'], $b['first_name']];
});

foreach ($members as $member) {
    echo implode(' ', $member) . '<br>';
}