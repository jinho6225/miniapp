<!doctype html>
<html>
  <head>
	<meta charset="utf-8">
    <title>PHP Test</title>
  </head>
  <body>

	<!-- Object Function -->
	
	<?php 
	class Student{
		var $name;
		public $major;
		private $gpa;

	//Constructors 
		function __construct($name, $major, $gpa) {
			$this->name = $name;
			$this->major = $major;
			$this->setGpa($gpa);
		}

		function hasHonors() {
			if($this->gpa >= 3.5) {
				return true;
			}
			return false;
		}

		function getGpa() {
			return $this->gpa;
		}

		function setGpa($gpa) {
			//using the conditional statement
			//we can control
			if () {
				// $this->gpa = $gpa;
			} else {

			}
		}
	}

	$student1 = new Student("Jim", "Business", 2.8);
	$student2 = new Student("Pam", "Sports", 3.6);

	echo $student1 -> major;
	echo "<br>";
	echo $student1 -> getGpa();
	echo "<br>";
	$student1 -> major = "Chemical";
	$student1 -> setGpa(4.0);
	echo $student1 -> major;
	echo "<br>";
	echo $student1 -> getGpa();
	echo "<br>";

	?>



  </body>
</html>