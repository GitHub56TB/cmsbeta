<?php include "functions.php" ?>
<?php include "includes/header.php" ?>
	<section class="content">

		<aside class="col-xs-4">
		<?php Navigation();?>


		</aside><!--SIDEBAR-->


<article class="main-content col-xs-8">


	<?php


/*  Step1: Use a pre-built math function here and echo it


	Step 2:  Use a pre-built string function here and echo it


	Step 3:  Use a pre-built Array function here and echo it

 */

echo rand(1, 3);
echo "<br>";

?>



<?php
// Example #3 Building a UTF-8 string from individual bytes


echo "https://www.php.net/manual/en/function.chr.php";
echo "<br>";
echo "<br>";
echo "// Example #3 Building a UTF-8 string from individual bytes";
echo "<br>";


$str = chr(240) . chr(159) . chr(144) . chr(152);
echo $str;
echo "<br>";
?>

<?php
// Assumes the string will be used as ASCII or an ASCII-compatible encoding
echo "// Assumes the string will be used as ASCII or an ASCII-compatible encoding";
echo "<br>";
$str = "The string ends in escape: ";
$str .= chr(27); /* add an escape character at the end of $str */

/* Often this is more useful */

$str = sprintf("The string ends in escape: %c", 27);
?>


<?php
$os = array("Mac", "NT", "Irix", "Linux");
if (in_array("Irix", $os)) {
    echo "Got Irix";
}
if (in_array("mac", $os)) {
    echo "Got mac";
}
?>




</article><!--MAIN CONTENT-->
<?php include "includes/footer.php" ?>
