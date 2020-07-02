<?php
$info = getimagesize('./hoover.jpg');
//print_r($info);

//$width = $info[0];
//echo $width;
$width = getimagesize('./hoover.jpg')[0];
$mime = getimagesize('./hoover.jpg')['mime'];
echo $mime;