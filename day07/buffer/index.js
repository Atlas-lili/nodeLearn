// console.log(Buffer.alloc(10));
// console.log(Buffer.alloc(10, 0xf));
// console.log(Buffer.allocUnsafe(10));
// console.log(Buffer.from('上海'));
// console.log(Buffer.from('aaa', 'base64'));

// const buf1 = Buffer.alloc(10);
// console.log(buf1.fill(12,2,4));
// const buf2 = Buffer.from('上海');
// const buf3 = Buffer.from('上海');
// const buf4= Buffer.from('上海1');
// console.log(buf2.equals(buf3));
// console.log(buf2.equals(buf4));
// console.log(buf3.indexOf('海'));
// console.log(buf3.length);
// console.log(buf3.toString());
// console.log(buf5);
const buf1 = Buffer.from('上海欢迎你');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
for (let i = 0;i < buf1.length;i+=5) {
    let buf2 = Buffer.alloc(5);
    buf1.copy(buf2,0,i);
    console.log(buf2.toString());
}
for (let i = 0;i < buf1.length;i+=5) {
    let buf2 = Buffer.alloc(5);
    buf1.copy(buf2,0,i);
    console.log(decoder.write(buf2));
}
