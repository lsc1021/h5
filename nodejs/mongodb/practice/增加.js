const MongoClient = require("mongodb").MongoClient;

let url = "mongodb://120.27.245.209:27017/king";
let ObjectId = require("mongodb").ObjectID;

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据库连接成功");
    var data = [{ "name": "你猜", "age": "特别大", "sex": "不男不女" }, { "name": "king", "age": "20", "sex": "男" }];
    db.collection("king").insert(data, function(err, result) {
        if (err) {
            console.log("数据插入失败");
            return;
        }
        console.log("数据插入成功");
        db.close();
        console.log("数据库连接关闭");
    })
})