// 简单实例
/*
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
var a = 0;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log("我收到了一个请求");
    a++;
    res.setHeader('Content-Type', 'text/stark');
    res.end(a.toString() + 'Hello World stark \n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
// 路由实例
/*
const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const hostname = '192.168.3.21';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    console.log("接收一个请求");
    if (req.url == '/stark') {
        // 设置http返回的内容
        res.end("{ username: 'stark', age: '18' }");
    } else if (req.url == '/hehe') {
        res.end("你呵呵啥！！！呵呵");
    } else if (req.url == '/hello') {
        fs.readFile('index.html', function(err, data) {
            res.end(data);
        })
    } else if (req.url == '/img') {
        fs.readFile('h6.jpg', function(err, data) {
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(data);
        })
    } else {
        res.end('hi，body，没有这个网址');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
//req参数
/*
const http = require('http');
const server = http.createServer(function(req, res) {
    // HTTP请求头
    console.log(req.headers);
    console.log(req.headers['user-agent']);

    // HTTP版本号

    console.log(req.httpVersion);

    // 请求类型， get post
    console.log(req.method);

    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    if (req.method.toLocaleLowerCase() == 'get') {
        res.end("对不起，你无权查看！2222");
    } else if (req.method.toLocaleLowerCase() == "post") {
        res.end("你可以尽情的查看信息了");
    }

    console.log(req.url);
    res.end('stark');
})

server.listen(3000, "localhost");


console.log("服务器正运行在3000端口");
*/
// res参数
/*
var http = require('http');

var server = http.createServer(function(req, res) {
    // res.statusCode = 266;
    // res.setHeader('Content-Type', 'text/plain');

    res.writeHead(269, { "Content-Type": "text/plain" })

    res.write("<h1>hehe </h1>");
    // res.write("<h1>2333</h1>");
    // res.write("<h1>4444 </h1>");
    res.end('111');
})

server.listen(3000, "localhost");
console.log("服务器已经运行在3000端口");
*/

// URL模板
/*
var url = require('url');
var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

console.log(obj);
*/

// querstring模块
/*
var querstring = require('querystring');
var obj = querstring.parse('username=stark&age=18&hobby=lanqiu');
console.log(obj);
*/

// URL和querstring结合使用
/*
var url = require('url');
var querstring = require('querystring');

var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

let query = obj.query;

var obj1 = querstring.parse(query);
console.log(obj1);
*/

// Path模块
/*
var http = require('http');

var path = require('path');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" })
    res.end("你访问的页面是" + path.extname(req.url));
    console.log(req);
})

server.listen(3000, "localhost");
console.log("服务器已经运行");
*/

// fs模板

var fs = require("fs");

fs.readFile("./static/1.md", function(err, data) {
    if (err) throw err;
    console.log(data.toString());
})


fs.writeFile("./static/2.md", "第一次写东西好激动", function(err) {
    if (err) throw err;
    // console.log(data.toString());
})

fs.appendFile('./static/2.md', '呵呵我又来了', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});