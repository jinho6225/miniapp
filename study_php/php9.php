<!doctype html>
<html>
  <head>
	<meta charset="utf-8">
    <title>PHP Test</title>
  </head>
  <body>

	<!-- Classes & Object -->
	
	<?php 
	class Book{
		var $title;
		var $author;
		var $pages;

	//Constructors 
		function __construct($aTitle, $aAuthor, $aPages) {
			$this->title = $aTitle;
			$this->author = $aAuthor;
			$this->pages = $aPages;

		}
	}

	$book1 = new Book("Harry Potter", "Jinho", 400);
	$book2 = new Book("반지의제왕", "Mike", 700);

	echo $book1 -> title;
	echo "<br>";
	echo $book1 -> author;
	echo "<br>";
	echo $book1 -> pages;
	echo "<br>";

	$book1->title = "Hunger game";
	echo $book1 -> title;
	echo "<br>";

	?>



  </body>
</html>