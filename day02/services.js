const http = require('http');
const url = require('url');
const fs = require('fs');
const c_ty = require('content-type');
let app = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        let thisurl = (req.url === '/') ? '/index.html' : req.url;
        let pathName = url.parse(thisurl, true).pathname;
        let start = pathName.lastIndexOf('.');
        let fileType = pathName.substring(start);
        fs.readFile('./static' + pathName, (err,data) => {
            if(err){
                if(err.errno === -4058) {
                    console.log('404NotFound');
                    fs.readFile('./static/404.html', (err,result) => {
                        c_ty.contentTypeis(fileType, (txt) => {
                            res.writeHead(404, {'Content-Type': `${txt}; charset="utf-8"`});
                            res.write(result);
                            res.end();
                        })
                    })
                }else{
                    console.log(err);
                    res.end();
                }
            }else{
                c_ty.contentTypeis(fileType, (txt) => {
                    res.writeHead(200, {'Content-Type': `${txt}; charset="utf-8"`});
                    res.write(data);
                    res.end();
                });
            }
        })
    }
});
app.listen(3000, '127.0.0.1');
