// const {normalize} = require('path');
// console.log(normalize('/jkj//klk/bin'));
// console.log(normalize('/jkj//klk/../bin'));

// const {join} = require('path'); // 内部也会调用normalize
// console.log(join('sds','sfdsf','d'));

// const {resolve} = require('path');
// console.log(resolve('./'));


// const {basename, dirname, extname} = require('path');
// console.log(basename('hjkhk/ddd/a.txt')); // 文件名
// console.log(dirname('hjkhk/ddd/a.txt')); // 路径
// console.log(extname('hjkhk/ddd/a.txt')); // 后缀名

// const {parse, format} = require('path');
// console.log(parse('klk/sdd/cccc/d.json')); /*
// { root: '',
//   dir: 'klk/sdd/cccc',
//   base: 'd.json',
//   ext: '.json',
//   name: 'd' } */
// const obj = parse('klk/sdd/ccc/d.json');
// console.log(format(obj)); // klk/sdd/ccc\d.json

const {sep, delimiter, win32, posix} = require('path');
console.log('sep: ', sep);
console.log('win23 sep: ', win32.sep);
console.log('posix sep: ', posix.sep);
console.log('PATH: ', process.env.PATH);
console.log('delimiter: ', delimiter);
console.log('posix delimiter: ', posix.delimiter);
