const fs = require('fs');
const ContentTypeIs = require('./content-type').contentTypeis



exports.staticLoad = function (PathName, req, res) {
    if(PathName.lastIndexOf('.') > -1) {
        const resType = PathName.substring(PathName.lastIndexOf('.'));
        fs.readFile('./static' + PathName, (err, data) => {
            if(err){
                console.log('404不存在');
                if(resType === '.html' || resType === '.htm'){
                    fs.readFile('./static/404.html', (err, result) => {
                        if(err) {
                            console.log('404不存在');
                            return;
                        }
                        res.writeHead(200, {'ContentType': 'text/html;charset:"utf-8"'});
                        res.write(result);
                        res.end();
                    })
                }
            } else {
                let readType= ContentTypeIs(resType, (fileType) => {
                    res.writeHead(200, {'ContentType': `${fileType};charset:"utf-8"`});
                    console.log(`${fileType};charset:"utf-8"`);
                    res.write(data);
                    res.end();
                });
                if(readType === 'err'){
                    console.log('不明类型静态文件');
                }

            }
        });
        return;
    }
};
