<?php

$sendOutputToNodejs = "<html>
<body>
<h1> This html is sent from PHP to NodeJS! </h1>
<h2> Testing for Prototype </h2>";

$sendOutputToNodejs .= "This is the Output from the PHP script:: <br/><br/>";
$sendOutputToNodejs .= " First Name:" . $argv[1] . "<br/><br/>";
$sendOutputToNodejs .= " Last Name:" . $argv[2] . "<br/><br/>";

$sendOutputToNodejs .= "</body></html>";

echo $sendOutputToNodejs;
// save the script as hellp.php
?>
