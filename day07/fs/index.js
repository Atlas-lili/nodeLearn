const fs = require('fs');
// fs.readFile('../path/index.js', 'utf8', (err,data) => {
//    if(err) throw err;
//    console.log(data);
// });

// fs.writeFile('./a.js', 'var a = 1;', {encoding: 'utf8'}, (err,data) => {
//     if(err) throw err;
//     console.log('success');
// });
// const bf1 = Buffer.from('let a = 1;');
// fs.writeFile('./a.js', bf1, (err,data) => {
//     if(err) throw err;
//     console.log('success');
// });

// fs.stat('./a.js', (err, stats) => {
//     if(err) {
//         console.log(err);
//         console.log('文件夹不存在');
//         return;
//     }
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats);
// });

// fs.rename('./a.js','b.js', err => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.unlink('./b.js', err => {
//     if (err) throw err;
//     console.log('success');
// });

// fs.readdir('../', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// fs.mkdir('../newone', err => {
//     if(err) throw err;
// });
// fs.rmdir('../newone', err => {
//     if (err) throw err;
// });


// fs.watch('./', {recursive: true}, (eventType, filename) => {
//     console.log(eventType, filename);
// });


// const rs = fs.createReadStream('./index.js');
// rs.pipe(process.stdout);

// const ws = fs.createWriteStream('./a.js');
// let timer = setInterval(() => {
//     let i = parseInt(Math.random()*10);
//     if(i >= 9){
//         clearInterval(timer);
//         ws.end();
//     }else{
//         ws.write(i + '');
//     }
// });
// ws.on('finish', () => {
//     console.log('over');
// });

const {promisify} = require('util');
const read = promisify(fs.readFile);
read('a.js','utf8').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

async function test () {
    try{
        const data = await read('a.js','utf8');
        console.log(data.toString());
    } catch (e) {
        console.log(e);
    }
}
test ();
