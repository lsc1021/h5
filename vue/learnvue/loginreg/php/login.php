<?php
	//保证返回的格式是json格式
	header("Content-type:text/json");
	//获取用户名和密码
	require_once("Mysql.php");
	$user = $_POST["username"];
	$pass = $_POST["password"];
	$sql = "select * from userinfo where username = '{$user}'";
	//执行sql语句
	$res = excute($sql);
	$result = $res->fetch_assoc();
	$info="";
	$userinfo="";
	$webinfo="";
	if($result){
		//存在该用户

		if($result["password"] == $pass){
			$userinfo = array("err"=>0,"msg"=>"登录成功","uinfo"=>$result);
		}else{
			$userinfo = array("err"=>1,"msg"=>"密码错误");
		}
	}else{
		$userinfo = array("err"=>2,"msg"=>"该用户不存在，请注册后，再登录哦～");
	}
	$info=array("userinfo"=>$userinfo,"webinfo"=>$webinfo);
	
	echo json_encode($info);
	
?>