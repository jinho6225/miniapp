<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>

	<!-- Function -->

	<?php 
		echo "<br><hr>";
		function sayHi($name) {
			echo "Hello $name";
		}
		sayHi("Jinho");
		echo "<br><hr>";
		sayHi("Mike");
	?>

		<!-- Return statement -->

	<?php 
		echo "<br><hr>";
		function cube($num) {
			return $num * $num * $num;
		}
		$cubeResult = cube(5);
		echo $cubeResult;
		echo "<br><hr>";
		echo cube(5);
	?>


  </body>
</html>