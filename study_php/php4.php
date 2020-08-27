<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>

	<!-- URL Parameters -->
	<form action="index.php" method="get">
		Name: <input type="text" name="name"> <br>
		<input type="submit" >
	</form>
	<br>
	<hr>


	<!-- POST vs GET -->

	<form action="index.php" method="post">
		Password: <input type="password" name="password"> <br>
		<input type="submit" >
	</form>
	<br>
	<hr>
	<?php 
		echo $_GET["name"];
	
		echo $_POST["password"];
	?>

  </body>
</html>