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
    $sql = "select * from shop_user WHERE name='$username' and  password='$password'";
    $rows = $coon -> Query($sql, 2);
    if($rows) {
      // 用户输入正确
      $arr = array("code" => "200", "msg"=>"", "data"=>array("id"=>$rows["id"], "token"=>"1234567899", "atavar"=> "http://www.aaa.com/path/a.png"));
    } else {
      // 输入错误
      $arr = array("code" => "1000", "msg" => "用户名或密码输入错误");
    }
    echo json_encode($arr);

   
  ?>