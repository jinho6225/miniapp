<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>

	<!-- Loop -->
	<?php
	//while loop
	$index = 1;
	while ($index <= 5) {
		echo "$index <br>";
		$index++;
	}

	//for loop
	$luckyNumbers = array('a','b','c','d','e','f');
	for($i = 0; $i <= count($luckyNumbers); $i++) {
		echo "$luckyNumbers[$i] <br>";
	}
	?>

	<!-- Comment -->
	<?php
	//comment
	/*
	comment block
	this is comment block man!
	*/
	echo "comment are fun!"; //comment


	?>

  </body>
</html>