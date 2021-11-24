<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

		<aside class="col-xs-4">

	<?php Navigation();?>


		</aside><!--SIDEBAR-->


		<article class="main-content col-xs-8">



		<?php

		/* Step 1: Make 2 variables called number1 and number2 and set 1 to value 10 and the other 20:

		  Step 2: Add the two variables and display the sum with echo:


		  Step3: Make 2 Arrays with the same values, one regular and the other associative

		  Step4: Make a constant and set it to the value of PHP. and use an echo to print it out


			 */
$number1 = 10;
$number2 = 2;

echo ($number1 + $number2) . "<br>";

$numberList = array(267,8765,345,'5345', 345, '<h1>Hello</h1>');
$names = array("first_name" => 'Edwin', "Last_Name" => 'Diaz' );

$test = array(1,2,3,4, 5, 6);
$test1 = $arrayName = array('one' => 1,'two' => 2, 3 => 'THREE', '4' => ", (Using Just the Number 4 to Display)" );

 echo $numberList[5];
 echo $names['first_name'] . " " . $names['Last_Name'] . "<br>";

echo $test1['one'] . " " . $arrayName['two'] . "  " . $test1[3]  . "  " . $test1[4];


		?>



		</article><!--MAIN CONTENT-->

<?php include "includes/footer.php" ?>
