<?php
if(isset($_POST['submit2'])) {

$lname = $_POST['lname'];
$username = $_POST['username'];
$password = $_POST['password'];

echo "<br>" . "You Hit the Second Submit!!!!!" . "<br>";

echo $lname . "<br>";
echo $username . "<br>";
echo $password. "<br>" . "<br>";
echo $_POST['submit2'] . "<br>";

}

 ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

  <?php
  // https://www.w3schools.com/tags/tag_form.asp
  // HTML <form> Tag
   ?>


  <h1>The form element - W3schools</h1>
  <p>From // https://www.w3schools.com/tags/tag_form.asp ==> // HTML Tag√.</p>

  <form action="/action_page.php">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>

    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>

    <input type="submit" value="Submit">
  </form>

  <p>Click the "Submit" button and the form-data will be sent to a page on the
  server called "action_page.php".</p>
<br><br>


<h1>The form element - PHP Training</h1>
<p>From PHP Training - Forms Section.</p>
<br>

<?php
// <form action="form_process.php" method="post">
?>

  <form action="34_form_external_w3.php" method="post">

  <input type="text" name="username" placeholder="Enter Username">
  <input type="password"  name="password" placeholder="Enter Password"><br><br><br>

  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" placeholder="Last Name"><br><br>

  <input type="submit" name="submit2">


  </form>

</body>
</html>
