<?php
    $key = $_GET["key"];
    $val = $_GET["val"];
    $req = "";

    if($key == "id"){
        $req = "SELECT `JSON` FROM `poemes` WHERE `ID` =" . $val ;
    }
    else{
        $val = "'" . $val . "'";
        $req = "SELECT `ID` FROM `poemes` WHERE `NOM` = " . $val ;
    }
    //echo $req;
    include("connect.php");
    $result = mysqli_query($connect,$req);

    while($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }

    mysqli_close($connect);
?>