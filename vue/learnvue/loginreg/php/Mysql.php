<?php
	$mysqli = new mysqli("localhost","root","root","user");
	if(!$mysqli){
		echo "数据库链接失败".$mysqli->connect_error;
		exit();
	}
	//封装执行sql语句的方法
	function excute($sql){
		//声明全局变量
		global $mysqli;
		//设置数据的编码格式为utf8编码
		$mysqli->query("set names utf8");
		//开始执行sql语句
		$res = $mysqli->query($sql);
		return $res;
	}
	
?>