<?php
include '../config.php';

header("content-type:text/html;charset=utf-8");

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
    die("连接失败：" . mysqli_connect_error());
}

$sql = "CREATE TABLE user_data (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ip VARCHAR(30) NOT NULL,
    data TEXT NOT NULL
)";

if (mysqli_query($conn, $sql)) {
    echo "数据表创建成功";
} else {
    echo "数据表创建失败: " . mysqli_error($conn);
}

mysqli_close($conn);

?>