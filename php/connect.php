<?php
    //phpinfo();
    ini_set('display_errors','on');
    error_reporting(E_ALL);

    //IDENTIFICATION
    $hostname ="localhost";
    $port="3306";
    $username ="root";
    $password="";
    $dbname="separation";

    //CREATE CONNECTION
    $connect= mysqli_connect($hostname, $username, $password, $dbname);

    /*if(mysqli_connect_errno()){
            printf("Connect error : %s\n", mysqli_connect_error());
            exit();
    }
    */

    //CHOOSE DB
    if (!$connect){
        die("Connection failed: " . mysqli_connect_error());
    }
    //echo "Connected successfully";
?>

