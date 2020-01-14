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

// 1. Use $incomeSegments to calculate Bob’s $netIncome after this set of taxes.
$netIncome = ($incomeSegments[0][0] * $incomeSegments[0][1]) + ($incomeSegments[1][0] * $incomeSegments[1][1]) + ($incomeSegments[2][0] * $incomeSegments[2][1]);
print_r("Net Income: " . $netIncome . "\n");

// 2. Social security tax -   Subtract $socialSecurity from $netIncome
$annualIncome = $netIncome - $socialSecurity;
print_r("Annual Income: " . $annualIncome . "\n");

// 3. Annual Expenses (car & vacations)
$annualIncome -= $annualExpenses["vacations"];
$annualIncome -= $annualExpenses["carRepairs"];
print_r("Annual income after deducting Annual Expenses: £" . $annualIncome . "\n");

// 4 & 5. Montly Expenses (rent, Utilities, Health In)
$monthlyIncome = $annualIncome / 12;
print_r($monthlyIncome . "\n");
$monthlyIncome -= $monthlyExpenses["rent"];
$monthlyIncome -= $monthlyExpenses["utilities"];
$monthlyIncome -= $monthlyExpenses["healthInsurance"];
print_r("Monthly income after monthly expesnes: £" . $monthlyIncome . "\n");

// 6 & 7. Weekly Expenses
$weeklyIncome = $monthlyIncome / 4.33;
print_r("Weekly Income: " . $weeklyIncome . "\n");
$weeklyExpenses = [
  "gas" => 25,
  "food" => 90,
  "entertainment" => 47
];
$weeklyIncome -= $weeklyExpenses["gas"];
$weeklyIncome -= $weeklyExpenses["food"];
$weeklyIncome -= $weeklyExpenses["entertainment"];
print_r("Weekly income after deducting weekly expenses: £" . $weeklyIncome . "\n");

$annualSavings = $weeklyIncome * 52;
print_r("Annual savings will be: " . $annualSavings . "\n");

/* outputs:
Gross Salary: 48150
Net Income: 38353.5
Annual Income: 35368.2
Annual income after deducting Annual Expenses: £33368.2
2780.6833333333
Monthly income after monthly expesnes: £880.68333333333
Weekly Income: 203.39107005389
Weekly income after deducting weekly expenses: £41.391070053888
Annual savings will be: 2152.3356428022
*/