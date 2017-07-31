const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://120.27.245.209:27017/king";
let ObjectId = require("mongodb").ObjectID;

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据连接成功");
    var cha = db.collection("king").find({});
    cha.each(function(i, r) {
        if (r != null) {
            console.log("数据查询成功");
            console.log(r.name, r.age, r.sex);
            db.close();
            console.log("数据库连接关闭");
        }
    })

})