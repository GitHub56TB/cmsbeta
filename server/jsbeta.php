<?php

if (isset($_POST['submit2'])) {

  $lname = $_POST['lname'];
  $username = $_POST['username'];
  $password = $_POST['password'];

  echo "<br>" . "You Hit the Second Submit!!!!!" . "<br>";

  echo $lname . "<br>";
  echo $username . "<br>";
  echo $password . "<br>" . "<br>";
  echo $_POST['submit2'] . "<br>";
}
