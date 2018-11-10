const https = require('https');
const cheerio = require('cheerio');
const url = 'https://www.jianshu.com';
https.get(url,(respones) => {
    var str = '';
    respones.on('data', (chunk) => {
        str += chunk
    });
    respones.on('end', () => {
        // console.log(str);
        let arr = []
        const $ = cheerio.load(str, {decodeEntities: false});
        $('#list-container ul li .content .title').each((key, value) => {
            let obj = {};
            obj.title = $(value).html();
            obj.href = url + $(value).attr('href');
            arr.push(obj);
        });
        console.log(arr)
    })
});
