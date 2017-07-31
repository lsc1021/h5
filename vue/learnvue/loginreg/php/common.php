<?php
	header("Access-Control=Allow-Origin:*");//允许跨域
	//请求方式兼容
	if($_GET){
		$type = $_GET["type"];
	}else{
		$type = $_POST["type"];	
	}
	switch($type){
		case "login":
			require_once("login.php");
			break;
		case "regist":
			require_once("register.php");
		default:
			break;
	}
	

	
?>