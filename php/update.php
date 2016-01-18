<?php
    $id = $_POST["id"];
    $field = $_POST["field"];
    $val = $_POST["val"];
        
    include("connect.php");

    $req = "UPDATE `poemes` SET `" .$field ."` = '" . $val . "' WHERE id = " . $id;
    echo $req;
    $result = mysqli_query($connect,$req);
    //echo $result;

    mysqli_close($connect);
?>

