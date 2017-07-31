<?php
	header("Content-type:text/json");
	
	require_once("Mysql.php");
	//接收前端传输的用户名和密码

	$user = $_POST["username"];
	
	$pass = $_POST["password"];

	$sql = "select * from userinfo where username='{$user}'";
	$res = excute($sql);
	$result = $res->fetch_assoc();
	if($result){
		$info = array("err"=>1,"msg"=>"用户已存在");
	}else{
		$sql = "insert into userinfo (username,password) values ('{$user}','{$pass}')";
		$res = excute($sql);
		if($res){
			$info = array("err"=>0,"msg"=>"用户注册成功");
		}else{
			$info = array("err"=>1,"msg"=>"用户注册失败","sql"=>$res);
		}
	}
	echo json_encode($info);
	
?>