<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>

	<!-- Array -->
	<?php 
	// 	$friends = array("Kevin", "Karen", "Oscar", "Jim");
	// 	$friends[1] = "Dwight";
	// 	$friends[4] = "angela";
	// 	$friends[10] = "kelly";
	// 	echo $friends[4];
	// 	echo "<br>";
	// 	echo count($friends);
	// ?>

	<!-- Checkboxes -->
	<!-- <form action="index.php" method="post">
		Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
		Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
		Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
		<input type="submit" >
	</form> -->
	<?php 
	// 	$fruites = $_POST["fruits"];
	// 	echo $fruites[0];
	// ?>

		<!-- Associative Arrays -->
	<form action="index.php" method="post">
		<input type="text" name="student" >
		<input type="submit" >
	</form>
	
	<?php 
		$grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
		echo $grades["Jim"];
		echo "<br><hr>";
		$grades["Jim"] = "F";
		echo $grades["Jim"];
		echo "<br><hr>";
		echo count($grades);

		echo "<br><hr>";
		echo $grades[$_POST["student"]]
	?>

  </body>
</html>