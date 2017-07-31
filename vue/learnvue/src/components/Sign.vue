<template>
  <div class="wrap">
			<div class="content">
				<div class="content_main">
					<div class="title">
						
					</div>
					<div>
						<label>用户名</label>
						<input type="text" name="username" id="username" value="" placeholder="设置用户名或昵称" />
					</div>
					<div>
						<label>密码</label>
						<input type="password" name="" id="password1" value="" placeholder="建议至少使用两种组合" />
					</div>
					<div>
						<label>确认密码</label>
						<input type="password" name="password2" id="password2" value="" placeholder="请再输入一次密码" />
					</div>
					<input type="button" name="regist" id="registbtn" value="注册" @click="Frome()" />
				</div>
			</div>
		</div>
</template>
<script>
var config = { //初始化websql数据库的参数信息
			name: 'user',
			version: '2.0',
			desc: 'aaaaa',
			size: 10 * 20 * 1024,
		};
var db = window.openDatabase(config.name, config.version, config.desc, config.size);
	var sql = 'create table if not exists LOGS(id INTEGER PRIMARY KEY ASC, name TEXT, password TEXT, note_date TEXT)';
			db.transaction(function(tx) {
				tx.executeSql(sql, null, function(tx, rs) {
					console.log('执行sql成功');
				});
			});
    export default {
      name: 'sign',
        methods:{
        Frome(){
          var name, age, passoword;
            name = document.getElementById("username").value;
						passoword = document.getElementById("password1").value;
						console.log(name);
						console.log(password1);
            var values = [name, passoword];
            if(values[0].length != 0 || values[1].length != 0 || values[2].length != 0 ||values[3].length != 0 ){
              var sql = "INSERT INTO LOGS (name, password, note_date) VALUES (?,?,DATETIME('now', 'localtime'))"
                      db.transaction(function(tx) {
                        tx.executeSql(sql, values, function(tx, rs) {
                            var effectRow = rs.rows;
                        });
                    })
                }
            }
          }
    }    
</script>
