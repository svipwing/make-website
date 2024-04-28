<?php

include '../config.php';

header("content-type:text/html;charset=utf-8");

$user_ip = $_SERVER['REMOTE_ADDR'];
$project = base64_encode($_POST['name']);

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
    die("连接失败：" . mysqli_connect_error());
}

$sql = "SELECT * FROM user_data WHERE ip='$project'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $data = $row['data'];
    echo base64_decode($data);
} else {
    echo '404';
}

mysqli_close($conn);

?>