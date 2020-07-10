<?php
//$date = (new DateTime('+ 12 months'))->format('Y-m-d');
//$date = (new DateTime('last day of this month + 12 months'))->format('Y-m-d');
//$date = (new DateTime('last day of this month + 3 months'))->format('Y-m-d');
//$date = (new DateTime('last day of this month + 27 months'))->format('Y-m-d');
//echo $date;

$thanksgiving_ca = (new DateTime('second Monday of October 2018'))->format('Y-m-d');
echo $thanksgiving_ca;