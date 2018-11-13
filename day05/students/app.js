const express = require('express');
const app = new express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('学员列表');
    const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('wangqin');
        let result = db.collection('user').find({});
        result.toArray((err, data) => {
            res.render('list', {
                list: data
            });
            client.close();
        });
    });

});

app.post('/toAdd', (req, res) => {
    const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('wangqin');
        db.collection('user').insertOne(req.body, (err,data) => {
            if(err){
                console.log(err);
                return;
            }
            client.close();
            res.redirect('/');
        });
    });

});

app.get('/add', (req, res) => {
    //res.send('添加学员');
    res.render('add');
});

app.post('/toEdit', (req, res) => {
    const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('wangqin');
        console.log(req.body);
        let id = req.body.id;
        let obj = {
            'name': req.body.name,
            'age': req.body.age,
            'sex': req.body.sex,
            'classname': req.body.classname
        };
        console.log(id);
        console.log(obj);
        db.collection('user').updateOne({'_id': new ObjectId(id)}, {$set: obj}, (err,data) => {
            if(err){
                console.log(err);
                return;
            }
            client.close();
            res.redirect('/');
        });
    });

});

app.get('/edit', (req, res) => {
    // res.send('修改学员');
    // console.log(req.query);
    const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('wangqin');
        let result = db.collection('user').find({'_id': new ObjectId(req.query.id)});
        result.toArray((err, data) => {
            res.render('edit', {
                info: data[0]
            });
            client.close();
        });
    });
});

app.get('/delete', (req, res) => {
    res.send('删除学员');
});

app.listen('3000');
