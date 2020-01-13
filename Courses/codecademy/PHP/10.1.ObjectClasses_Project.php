<?
/*
LEARN PHP
Going to Bed
This project provides practice for:

Creating objects from classes
Writing and using methods
Using static methods
*/

/* 
In this project we will be creating some pajamas for barnyard animals. The farmer has a special way that she likes names formatted. 
To ensure this, we are going to build our own string function similar to PHP’s built in strtolower or strtoupper.

We’re going to put this function inside of a helper class StringUtilities (making it a method). We can then add other string utilities
 or reuse this class in another project for the same farmer.
*/
class StringUtilities {
    public static function secondCase($str) {
      $str = strtolower($str);
      if (strlen($str) >=2){
      $str[1] = strtoupper($str[1]);
      }
      return $str;
    }  
  }
  
  class Pajamas {
    private $owner, $fit, $color;
    function __construct(
      $owner = "TBC",
      $fit = "good",
      $color = "black"
      ) {
      $this->owner = StringUtilities::secondCase($owner);
      $this->fit = $fit;
      $this->color = $color;
    }
    public function describe() {
      return "Owner: $this->owner,\n Fit: $this->fit,\n Colour: $this->color\n";
    }
    public function setFit($new_fit) {
      $this->fit = $new_fit;
    }
  }
  
  $chicken_PJs = new Pajamas('CHICKEN', 'great', 'tropical teal');
  echo $chicken_PJs->describe();
  $chicken_PJs->setFit('bit tight');
  echo $chicken_PJs->describe();