<?php
    $nom = $_POST["nom"];
    $json = $_POST["json"];
        
    include("connect.php");

    $req = "INSERT IGNORE INTO `poemes` SET `NOM` =" . "'" . $nom ."'" .",`JSON` =" . $json;
    echo $req;
    $result = mysqli_query($connect,$req);
    //echo $result;

    mysqli_close($connect);
?>

