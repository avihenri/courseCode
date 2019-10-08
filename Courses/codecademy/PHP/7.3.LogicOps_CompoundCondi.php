<?php

// LOGICAL OPERATORS AND COMPOUND CONDITIONS
// Nested Conditional Statements
// We wrote some code to illustrate our decision-making process when taking an elevator. Read through the code to make sense of the process:

  $is_elevator_here = true;
  $elevator_direction = "down";
  $my_direction = "up";
  $is_button_pushed = false;

  if ($is_elevator_here){
      if ($elevator_direction === $my_direction){
        echo "I'm in the elevator.";
      } else {
          if ($is_button_pushed){
            echo "I'm waiting...!";
          } else {
              echo "I'm pushing the button.";
          }
     }
  } else {
      if ($is_button_pushed){
          echo "I'm waiting...";
      } else {
          echo "I'm pushing the button.";
      }
   }