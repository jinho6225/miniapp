<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
	<?php 

		//working with string
		$phrase = "Jinho Myung - Software Engineer";

		echo substr($phrase, 14, 8);

		//strtolower
		//strtoupper
		//strlen
		//str_replace
		//echo str_replace("Software Engineer", "Web Developer", $phrase);
		// substr($phrase, 14, 8) => Software
		
		//working with numbers

		// echo 40.998;
		// echo -40 + 40;
		echo 10 % 3; // 1

		$num = 10;
		$num++;
		$num += 10;
		echo $num;

		echo abs(-100);
		echo max(2, 4, 1, 99, 921);
		//abs
		//pow
		//sqrt
		//max
		//min
		//round //ceil //floor 

	?>
  </body>
</html>