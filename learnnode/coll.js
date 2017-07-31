var http = require('http');
var url = 'http://www.imooc.com/learn/348';
const cheerio = require('cheerio');

function huoqu(html) {
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter')
    var courseData = []
    chapters.each(function(item) {
        var chapter = $(this)
        var chapterTitle = chapter.fin
    })
}
http.get(url, function(res) {
    var html = ''
    res.on('data', function(data) {
        html += data
    })
    res.on('end', function() {
        console.log(html)
    })
}).on('error', function() {
    console.log('获取数据出错！')
})