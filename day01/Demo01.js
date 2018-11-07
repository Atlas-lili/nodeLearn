var http = require('http');
var url = require('url');
var util = require('foo').util;
var api = require('myapi');
var sd = require('silly-datetime');


// req获取url的信息和请求的信息
// res响应信息


// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});    // 设置HTTP头部
//   res.write('HelloWorld');
//   console.log(req.url);
//   res.end();    // 结束node.js的响应
// }).listen(3000, '127.0.0.1');
// var app = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});    // 设置HTTP头部
//     res.write('HelloWorld');
//     // 手写参数对象显示
//     // if (req.url && req.url.indexOf('?') > -1) {
//     //     var data = req.url.split('?')[1];
//     //     var obj = Object.create(null);
//     //     if (data.indexOf('&') > -1) {
//     //         data.split('&').forEach((item) => {
//     //             let key = item.split('=')[0];
//     //             let value = item.split('=')[1];
//     //             obj[key] = value;
//     //         });
//     //     } else {
//     //         let key = data.split('=')[0];
//     //         let value = data.split('=')[1];
//     //         obj[key] = value;
//     //     }
//     //     console.log(obj);
//     // }
//     //获取get传值
//     const pathname = req.url;
//     if (pathname != '/favicon.ico') {
//         const obj = url.parse(pathname, true);
//         const query = url.parse(pathname, true).query;
//         console.log(query);
//         console.log(obj);
//         console.log(url.format(obj));
//         console.log(url.resolve(pathname,'/app'));
//     }
//
//     res.end();    // 结束node.js的响应
// });
var app = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html;charset:"utf-8"'});
    var pathName = req.url;
    if (pathName != '/favicon.ico') {
        var obj = url.parse(pathName,true);
        var query = obj.query;
        for (var i in query) {
            res.write(i + " : " + query[i]);
        }
        console.log(util.sayHello(), util.add(1, 2));
        api();
        var firstT = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
        // 2015-07-06 15:10
        console.log(firstT);
        var secondT = sd.fromNow(+new Date() + 20000);
        console.log(secondT);
        res.end();
    }
});
app.listen(3000, '127.0.0.1');
