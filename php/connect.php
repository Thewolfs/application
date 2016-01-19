<?php
    //phpinfo();
    ini_set('display_errors','on');
    error_reporting(E_ALL);

    //IDENTIFICATION
    $hostname ="sql4.freesqldatabase.com";
    $port="3306";
    $username ="sql4103547";
    $password="jrPp2SzFYG";
    $dbname="sql4103547";

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

