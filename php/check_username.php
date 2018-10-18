<?php
    // 获取用户名
    header("Content-Type: application/json");

    header("Access-Control-Allow-Origin:*");

    // 引用另外一个文件
    include "connect_db.php";
    $username = $_GET["username"];
    // 链接数据库
    $coon = new db();
    $sql = "select * from shop_user WHERE name='$username'";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      $arr = array("code" => "1000", "msg"=>"用户名称已经存在,请在登录界面登录");
    } else {
      $arr = array("code" => "200", "msg" => "");
    }
    echo json_encode($arr);

   
  ?>