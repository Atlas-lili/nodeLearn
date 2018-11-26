const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const fs = require('fs');
const {promisify} = require('util');
const router = require('./helper/router');


const app = http.createServer((req, res) => {
    const filePath = path.join(conf.root,req.url);
    router(req, res, filePath);
});
app.listen(conf.port, conf.hostname, () => {
    const Url = `http://${conf.hostname}/:${conf.port}`;
    console.info('creatSuccess' + chalk.green(Url));
});
