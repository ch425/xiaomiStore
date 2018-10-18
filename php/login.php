<?php
	$username = $_POST['user-inp'];
	$userpwd = $_POST['pwd-inp'];
	$conn = new mysqli("localhost","root","","user_info","3306");
	if(!$conn){
		echo "连接失败";
	}
	
	//	设置字符集
	$conn -> query("SET CHARACTER SET 'utf8'");//读库 
    $conn -> query("set names 'utf8'"); //写库
	// 	从数据库中查找所有的数据
    $selectsql = "select password from userinfo_db where name = '$username'";
    
     // 执行sql语句
    $result = $conn -> query($sql);
     // 找到返回关联数组， 找不到返回null, 是一条数据
    $rows = $result -> fetch_assoc();
    // var_dump($rows);
    if($result -> num_rows > 0) {
        echo "1";
    }else{
        echo "0";
    }
?>