<!doctype html>
<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
	<!-- getting user input -->
	<form action="index.php" method="get">
		Name: <input type="text" name="name">
		<br>
		Age: <input type="number" name="age">

		<input type="submit">
	</form>
	<br>
	Your name is <?php echo $_GET["name"] ?>
	<br>
	Your age is <?php echo $_GET["age"] ?>
  </body>
</html>