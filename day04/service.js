const http = require('http');
const url = require('url');
const fs = require('fs');
const staticLoad = require('./modules/static-load').staticLoad;
const router = require('./modules/router');
http.createServer((req, res) => {
    const URL = url.parse(req.url,true);
    const PathName = URL.pathname;
    staticLoad(PathName, req, res);
    const RouterName = PathName.substring(1); 
    if(router[RouterName]) {
        router[RouterName](req,res);
    }else {
        console.log('路由不存在');
    }
}).listen(3000);
