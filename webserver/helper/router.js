const fs = require('fs');
const {promisify} = require('util');
const path = require('path');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const Handlebars = require('handlebars');
const mimeFun = require('./mime');
const conf = require('../config/defaultConfig');
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');

const tlppath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tlppath);
const template = Handlebars.compile(source.toString());



module.exports = async function (req, res, filePath) {
    try {
        const stats = await stat(filePath);
        if (stats.isFile()) {
            const ContentType = mimeFun(filePath);
            res.setHeader('Content-Type', ContentType);
            if (isFresh(stats, req, res)) {
                res.statusCode = 304;
                res.end();
                return;
            }


            const {code, start, end} = range(stats.size, req, res);
            let rs;
            if (code === 200) {
                res.statusCode = code;
                rs = fs.createReadStream(filePath);
            } else {
                res.statusCode = code;
                rs = fs.createReadStream(filePath, {start, end});
            }
            if (filePath.match(conf.compresss)) {
                rs = compress(rs, req, res);
            }
            rs.pipe(res);
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const dir = path.relative(conf.root,filePath);
            const data = {
                title: path.basename(filePath),
                dir: dir ? `/${dir}` : '',
                files: files.map(file => {
                    return {
                        file,
                        icon: mimeFun(file)
                    }
                })
            };
            res.end(template(data));
        }
    } catch (e) {
        console.error(e);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 NOT FOUND');
    }
};
