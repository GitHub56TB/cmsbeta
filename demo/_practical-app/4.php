<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

		<?php Navigation();?>


	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">


	<?php

/*  Step1: Define a function and make it return a calculation of 2 numbers

	Step 2: Make a function that passes parameters and call it using parameter values


 */

function FunctionName1($v1 = 0, $v2 = 0)
{
	// code...
	echo $v1 + $v2 . "<br>";
	return $v1 + $v2;

}

FunctionName1();
FunctionName1(5,6);

?>





</article><!--MAIN CONTENT-->


<?php include "includes/footer.php" ?>
