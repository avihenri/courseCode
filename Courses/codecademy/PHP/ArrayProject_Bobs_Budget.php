<?php

/*

Bob just got a new job and needs help figuring out his budget!
He has a salary, annual expenses, monthly expenses, and weekly expenses. He wants to know how much of his salary he can plan to save over the course of a year.
The offer letter from his job has a salary listed before taxes of 48,150. We have stored this value in $grossSalary.
Where Bob lives, there is a progressive tax system. He pays 12% (keeps 88%) on the first 9,700, 22% (keeps 78%) on the next 29,775, 
and pays 24% (keeps 76%) on the remainder of his salary. This data is stored in $incomeSegments.
$incomeSegments is an array that contains an array for each income segment with the amount being taxed and the percent that he gets to keep.

*/

$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Write your code below: