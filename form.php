<?php 


  error_reporting(E_ALL); ini_set('display_errors', 1);

  $link = mysqli_connect("localhost", "root", "root", "quiz");

  if (!$link) {
    die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
  }

  $ans = $_POST["author"];

  $update = "INSERT INTO `quiz`.`answers` (`name`) VALUES ('" . mysqli_real_escape_string($link, "$ans") .  "')";

  mysqli_query($link, $update);

  $result = mysqli_query($link, "SELECT * FROM `answers`");

    $arr = array();

    while($row = mysqli_fetch_array( $result )) {
      $arr[] = $row;
      print_r($row);
      echo "<br/>";
    }

    //write to json file
    $fp = fopen('data.json', 'w');
    fwrite($fp, json_encode($arr));
    fclose($fp);

  mysqli_close($link);



?>
