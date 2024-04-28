<?php

include '../config.php';

header("content-type:text/html;charset=utf-8");

$user_ip = $_SERVER['REMOTE_ADDR'];
$project = base64_encode($_POST['name']);

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
    die("连接失败：" . mysqli_connect_error());
}

// 构造 SQL 查询语句
$sql = "SELECT * FROM user_data WHERE ip='$project'";

// 执行查询
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $id = $row['id'];
    $data = base64_encode($_POST['data'].'30d2f82d098dd5ce23e336ebf22605e7:'.$user_ip);
    $sql = "UPDATE user_data SET data='$data' WHERE id=$id";
    mysqli_query($conn, $sql);
} else {
    $data = base64_encode($_POST['data'].'30d2f82d098dd5ce23e336ebf22605e7:'.$user_ip);
    $sql = "INSERT INTO user_data (ip, data) VALUES ('$project', '$data')";
    mysqli_query($conn, $sql);
}

mysqli_close($conn);

?>