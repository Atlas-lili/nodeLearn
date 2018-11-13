const http = require('http');
// const url = require('url');
/* const md = require('md5');
const fs = require('fs');
let app = http.createServer((req, res) => {
    res.writeHead(200, {'ContentType': 'text/html;charset="utf-8"'});
    // console.log(req.url);
    // console.log(md(req.url));
    // fs.stat('./node_modules', (err, state) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(`是目录：${state.isDirectory()}，是文件：${state.isFile()}`)
    // });
    // fs.mkdir('./makeByMkdir', (err) => {
    //     if(err){
    //         console.log('存在');
    //         return;
    //     }
    // });
    fs.readFile('./makeByMkdir/one.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        // console.log(data.toString());
    });
    res.end()
}).listen(3000, '127.0.0.1'); */

const fs = require('fs');
// let app = http.createServer((req, res) => {
//     res.writeHead(200, {'ContentType': 'text/html;charset="utf-8"'});
//     let pathName = req.url;
//     if (pathName != '/favicon.ico') {
        fs.readdir('./makeByMkdir',(err, data) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
            var Dir = [];
            //1.自适应函数的递归
            /* (function isDir (i) {
                if(!data[i]) {
                    console.log(Dir);
                    return;
                }
                fs.stat('./makeByMkdir/' + data[i], (errr,state) => {
                    if(errr){
                        console.log(errr);
                        return;
                    }
                    if(state.isDirectory()) {
                        Dir.push(data[i]);
                    }
                    isDir(++i)
                });
            })(0) */
            // 2.forEach
            /* data.forEach((item,key,arr) => {
                fs.stat('./makeByMkdir/' + item, (errr,state) => {
                    if(errr){
                        console.log(errr);
                        return;
                    }
                    if(state.isDirectory()) {
                        Dir.push(item);
                    }
                    if (key === arr.length-1) {
                        console.log(Dir);
                    }
                });
            }); */
            // 3.
            for(let i = 0;i <4;i++){
                setTimeout(() => {
                    console.log(i);
                },100)
            }
            for(let i = 0;i < data.length;i++){
                fs.stat('./makeByMkdir/' + data[i], (errr,state) => {
                    if(errr){
                        console.log(errr);
                        return;
                    }
                    if(state.isDirectory()) {
                        Dir.push(data[i]);
                    }
                    if(i==data.length-1) {
                        console.log(Dir);
                    }
                });
            }
        });
//     }
//     res.end()
// }).listen(3000, '127.0.0.1');


