<template>
  


<div class="wrap">
			<div class="content">
				<div class="title">
					<!--"<a href =\"list.html?"+item.cat.id+"\">" + item.cat_id+ "</a>";-->
				
				</div>
				<div>
					<label>用户名</label>
					<input type="text" name="username" id="username" value="" placeholder="请输入您的用户名" />
				</div>
				<div>
					<label>密码</label>
					<input type="password" name="" id="password" value="" placeholder="请输入您的密码" />
				</div>
				<input type="button" name="loginbtn" id="loginbtn" value="登录" @click="Regin()"/>

			</div>
		</div>
        </template>
      <script>
var config = { //初始化websql数据库的参数信息
			name: 'user',
			version: '2.0',
			desc: 'aaa',
			size: 10 * 20 * 1024,
		};
var db = window.openDatabase(config.name , config.version, config.desc, config.size);
	var sql = 'create table if not exists LOGS(id INTEGER PRIMARY KEY ASC, name TEXT, password TEXT, note_date TEXT)';
			db.transaction(function(tx) {
				tx.executeSql(sql, null, function(tx, rs) {
					console.log('执行sql成功');
				});
			});
  export default {
    name: 'login',
     methods:{
      Regin(){
         var name, age, passoword
            name = document.getElementById("username").value;
            passoword = document.getElementById("password").value;
            console.log(name)
            console.log(passoword)
            var values = [name, passoword];
            if(values[0].length != 0 || values[1].length != 0 ){
             	db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM LOGS WHERE NAME ='+name, [], function(tx, results) {
								if(results.rows.length!==0){
									console.log(results.rows[0].password)
								if(results.rows[0].password==password){
									console.log("登陆成功")
								}
								}else{
								console.log("没有这个用户名")
								}
                     
                });
              })
            }
     } 
  }}
</script>