const https = require('https');
const cheerio = require('cheerio');
const MongoClient = require('mongodb').MongoClient; // mongodb://127.0.0.1:27017/mongoTest
const dbUrl = 'mongodb://127.0.0.1:27017/mongoTest';
const Url = 'https://www.jianshu.com'

function insertOneToDB(arr) {
    MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
        if(err){
            console.log(err);
        } else {
            let db = client.db("mongoTest");

            arr.forEach((item,index) => {
                db.collection('user').insertOne(item, (err,result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log('添加成功');
                        client.close();
                        if(index === arr.length-1) {
                            console.log('wangcheng');
                            return;
                        }
                    }
                })
            });
        }
    });

}





https.get(Url,(response) => {
    let str = '';
    response.on('data', (chunk) => {
        str += chunk;
    });
    response.on('end', () => {
        const $ = cheerio.load(str,{decodeEntities: false});
        let arr = [];
        $('#list-container ul li .content .title').each((index,item) => {
            let obj = Object.create(null);
            obj = {
                'title': $(item).text(),
                'href': $(item).attr('href')
            };
            arr.push(obj);
        });
        insertOneToDB(arr);

    })
});



