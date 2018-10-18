<?php
  class db
  {
      public $host = "localhost";//定义默认连接方式
      public $account = "root";//定义默认用户名
      public $pass = "";//定义默认的密码
      public $db_name = "shop";//定义默认的数据库名
      public $port = "3306";
  //成员方法   是用来执行sql语句的方法
  //两个参数：sql语句，判断返回1查询或是增删改的返回
      public function Query($sql,$type=1) {
  //造一个连接对象，参数是上面的那四个
          $db = new mysqli($this->host,$this->account,$this->pass,$this->db_name,$this->port);
          $db->query("SET CHARACTER SET 'utf8'");//读库   
          $db->query("SET NAMES 'utf8'");//写库 
          $r = $db->query($sql);
        //   执行完sql语句, 返回的结果
        //   如果是 添加,修改,删除,返回一个布尔类型的结果
        //   如果是查询语句, 返回的是一个对象, 想返回一条数据,还是所有数据
          if($type == "1") {
             // 返回所有数据  
              $array = array();
              while($row = $r -> fetch_assoc()) {
                array_push($array, $row);
              }
            return $array;//查询语句，返回数组
          } else if ($type == "2") {
            return $r->fetch_assoc();//查询语句，返回关联数组, 一条
          }
          else {
            //    是添加或者删除或者修改语句
             return $r; 
          }
      }

  }
?>
