<h1>Welcome to the Repetitive Cafe</h1>
<?php 
  $drinks = ['Mango smoothie' => 4.00, 'strawberry smoothie' => 4.00, 'Water' => 1.00, ' Cola' => 2.00, 'Fanta' => 2.00];
$pastries = ['Jam', 'Apricot', 'Chocolate', 'Plain', 'Almond'];
?>
<h3>Drinks!</h3>
<ul>
<?php 
  foreach ($drinks as $drink => $price):?>
  <li> <?="$drink: £$price"?> </li>
    <?php endforeach; ?>
</ul> 
<h3>Pastries! ($2 each)</h3> 
<ul>
<?php for($i=0; $i<count($pastries); $i++):?>
<li><?=$pastries[$i]?></li>
<?php endfor;?>
</ul>