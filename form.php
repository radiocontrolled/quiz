<?php 



  include "toJson.php";
  
  error_reporting(E_ALL); ini_set('display_errors', 1);

  $link = mysqli_connect("localhost", "root", "root", "quiz");

  if (!$link) {
    die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
  }

  $update = "INSERT INTO `quiz`.`answers` (`name`) VALUES ('" . mysqli_real_escape_string($link, $_POST['author']) .  "')";

  mysqli_query($link, $update);

  updateJson();
  
  mysqli_close($link);

?>
