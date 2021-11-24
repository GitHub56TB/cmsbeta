<?php include "functions.php" ?>
<?php include "includes/header.php" ?>

	<section class="content">

	<aside class="col-xs-4">

	<?php Navigation();?>

	</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">

<?php

/*  Step1: Make an if Statement with elseif and else to finally display string saying, I love PHP



	Step 2: Make a forloop  that displays 10 numbers


	Step 3 : Make a switch Statement that test againts one condition with 5 cases

 */


?>
<?php if (0 > 1){
echo "0 > 1";
}
elseif (-1 > 2) {
echo "-1 > 2";
}
else { // code...
	echo "STEP 1 ==> I love PHP" . "<br>";
}
//===============
for($counter = 0; $counter < 10; $counter++){

    echo "STEP 2 ==>" . " " . $counter . "<br>" ;

}
//===============
$xxx = 1;

switch ($xxx) {
	case 'value':
		// code...
		break;
	case 1:
			// code...
			echo "STEP 3 ==>" . " " . $xxx . " Number " . "<br>" ;
			break;
	case '1':
				// code...
				echo "STEP 3 ==>" . " " . $xxx . " Text " . "<br>" ;
				break;
	case 'value':
					// code...
					echo "STEP 3 ==>" . " " . $xxx . " N/A " . "<br>" ;
					break;
	case 'value':
						// code...
						echo "STEP 3 ==>" . " " . $xxx . " N/A " . "<br>" ;
						break;
	default:
		// code...
		echo "STEP 3 ==>" . " " . $xxx . " DEFAULT " . "<br>" ;
		break;
}
?>




</article><!--MAIN CONTENT-->

<?php include "includes/footer.php" ?>
