<!doctype html>
<html>
  <head>
	<meta charset="utf-8">
    <title>PHP Test</title>
  </head>
  <body>

	<!-- including HTML -->
	<?php include "header.html" ?>
	<p> Hello Wrold </p>

	<?php include "footer.html" ?>


	<!-- including PHP -->
	<?php 
		$title = "My First Post";
		$author = "Jinho";
		$wordCount = 500;
		include "article-header.php";
	?>


	<!-- including PHP -->
	<?php 
		include "useful-tools.php";
		sayHello("jinho");
	?>

  </body>
</html>