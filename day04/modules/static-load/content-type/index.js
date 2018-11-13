const fs = require('fs');
exports.contentTypeis = function (ty,fn) {
    fs.readFile('./modules/static-load/content-type/mime.json', (err, data) => {
        if(err){
            return 'err';
        }else{
            let allTY = JSON.parse(data.toString());
            if(fn){fn(allTY[ty]);}
            return allTY[ty];
        }
    })
};
