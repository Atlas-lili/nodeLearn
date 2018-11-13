const express = require('express');
const app = new express();
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017/mongoTest';
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.set('view engine', 'ejs');
app.use((req, res, next) => {
    var d = new Date();
    console.log(d);
    next();
});
app.use(express.static('public'));
app.get('/', (req, res) => {
    // res.send('首页');
    res.render('home');
});
app.get('/news', (req, res) => {
    // res.send('新闻');
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('mongoTest');
        let result = db.collection('user').find({});
        result.toArray((err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(data);
            client.close();
            res.render('news', {
                list: data
            });
        })
    });
});
app.post('/video', (req, res) => {
    // res.send('视频');
    res.render('video');
    console.log(req.body);
});
app.get('/image', (req, res) => {
    // res.send('图片');
    res.render('image');
});
app.use((req, res) => {
    res.status(404).send('不存在');
});
app.listen(3000);
