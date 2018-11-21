const express = require('express');
const app = new express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const fs = require('fs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/public', express.static('public'));

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

    var form = new multiparty.Form();
    form.uploadDir = 'public/upload';
    form.parse(req, function(err, fields, files) {
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields: fields, files: files}));
        let obj = {
            name: fields.name[0],
            age: fields.age[0],
            sex: fields.sex[0],
            classname: fields.classname[0],
            pic: files.pic[0].path
        };
        const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {

            let db = client.db('wangqin');
            db.collection('user').insertOne(obj, (err,data) => {
                if(err){
                    console.log(err);
                    return;
                }
                client.close();
                res.redirect('/');
            });
        });

    });

});

app.get('/add', (req, res) => {
    //res.send('添加学员');
    res.render('add');
});

app.post('/toEdit', (req, res) => {

    var form = new multiparty.Form();
    form.uploadDir = 'public/upload';
    form.parse(req, function(err, fields, files) {

        const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
            let db = client.db('wangqin');
            let id = fields.id[0];
            let obj = {
                name: fields.name[0],
                age: fields.age[0],
                sex: fields.sex[0],
                classname: fields.classname[0],
            };
            if(files.pic[0].originalFilename) {
                obj.pic = files.pic[0].path;
            } else {
                fs.unlink('./'+files.pic[0].path, (err) => {
                    if (err) return console.log(err);
                    console.log('文件删除成功');
                })
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
    const dbUrl = 'mongodb://127.0.0.1:27017/wangqin';
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, (err, client) => {
        let db = client.db('wangqin');
        db.collection('user').deleteOne({'_id': new ObjectId(req.query.id)},(err, data) => {
            if(err){
                console.log(err);
                return;
            }
            client.close();
            res.redirect('/');
        });
    });
});

app.listen('500');
