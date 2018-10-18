<?php
    // 获取用户名
    header("Content-Type: application/json");

    header("Access-Control-Allow-Origin:*");

    // 引用另外一个文件
    include "connect_db.php";

    
    // 或去json数据, 请求主体的格式为json格式
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    // 链接数据库
    $coon = new db();
    $sql = "select * from shop_user WHERE name='$username'";
    $insert_sql = "INSERT INTO shop_user (name, `password`) values ('$username','$password')";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      // 用户名已存在
      $arr = array("code" => "1000", "msg"=>"用户名已存在,请重新输入");
    } else {
       // 用户名称不存在
      $result = $coon -> Query($insert_sql, 3);
      if($result) {
        $arr = array("code" => "200", "msg"=>"");
      } else {
        $arr = array("code" => "1000", "msg"=>"未知错误, 注册不成功");
      }
    }
    echo json_encode($arr);

   
  ?>