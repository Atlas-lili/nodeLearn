const express = require('express');
const app = new express();

function findInDB (callback) {
    const MongoClient = require('mongodb').MongoClient;
    const dbUrl = 'mongodb://127.0.0.1:27017/mongoTest';
    MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err,client) => {
        if(err){
            console.log(err);
            return;
        }
        const db = client.db('mongoTest');
        let result = db.collection('user').find({});
        result.toArray((err, data) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
            callback(data);
        })

    })
}
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/news', (req, res) => {
// //     console.log(req.query);// 获取get传值
// //     res.send('Hello News!');
// // });
// // app.get('/shop/:aid', (req, res) => {// 动态路由
// //     console.log(req.params);
// //     res.send('Hello News!')
// // });
findInDB((info) => {
    app.get('/news', (req, res) => {
        res.render('home',{
            name: 'news',
            list: [1,2,3,4,5],
            list01: info
        })
    });
});

app.get('/shop/:aid', (req, res) => {// 动态路由

});



app.listen(3000, () => console.log('Example app listening on port 3000!'));
