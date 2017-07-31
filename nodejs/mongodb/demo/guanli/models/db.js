const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://192.168.3.21:27017/student";
let ObjectId = require('mongodb').ObjectID;


exports.insertOne = function(collection, data, callback) {

    // 连接数据库
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("数据库连接失败");
            return;
        }
        console.log("数据连接成功");
        db.collection(collection).insertOne(data, function(err, result) {
            if (err) {
                console.log("数据插入失败");
                return;
            }
            console.log("数据插入成功");
            callback(err, result);
            db.close();
            console.log("数据库连接关闭");
        })
    })
}


//查询数据

exports.findAll = function(collection, callback) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("数据连接失败");

            callback(err, null);
        }
        console.log("数据库连接成功");
        var cursor = db.collection(collection).find({});
        // console.log(cursor);
        var result = [];
        cursor.each(function(err, doc) {
            if (doc != null) {
                console.log("数据查询成功");
                // console.log(doc.name, doc.age);
                // console.log(doc);
                result.push(doc);
                // db.close();
            } else {
                callback(null, result);
                db.close();
            }
        })
    })
}