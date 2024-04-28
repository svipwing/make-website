<?php
header("content-type:text/html;charset=utf-8");

include '../config.php';

echo '<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">';

if(isset($_POST['password'])){
    if(md5($_POST['password'])==$adminPassword){
        echo '<center><h1>Welcome！</h1>';
    }else{
        echo <<<EOF
<center>
<h1>密码错误</h1>
<form method="post" action="admin.php"> 
   <p>密码: <input type="text" name="password"></p>
   <input type="submit" value="验证密码" class="btn">
</from>
</center>
EOF;

        exit();
    }
}else{
    echo <<<EOF
<center>
<h1>请输入密码</h1>
<form method="post" action="admin.php"> 
   <p>密码: <input type="text" name="password"></p>
   <input type="submit" value="验证密码" class="btn">
</from>
</center>
EOF;

    exit();
}

$conn = mysqli_connect($dbhost, $dbuser, $dbpass);

if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}

mysqli_query($conn , "set names utf8");
 
$sql = 'SELECT id,ip,data
        FROM user_data';
 
mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );

if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

echo '<h2>admin后台</h2>';

echo '<table class="table table-bordered"><tr><td>编号</td><td>名称</td><td>IP</td><td>积木</td></tr>';

while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    echo "<tr><td> {$row['id']}</td> ".
         "<td>".htmlentities(base64_decode($row['ip']))."</td> ".
         "<td>".htmlentities(explode("30d2f82d098dd5ce23e336ebf22605e7:", base64_decode($row['data']))[1])."</td> ".
         "<td>".htmlentities(substr(explode("30d2f82d098dd5ce23e336ebf22605e7:", base64_decode($row['data']))[0],0,20))."</td> ".
         "</tr>";
}

echo '</table></center>';

mysqli_free_result($retval);
mysqli_close($conn);
?>