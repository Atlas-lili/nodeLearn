const MongoClient = require('mongodb').MongoClient; // mongodb://127.0.0.1:27017/wangqin
const dbUrl = 'mongodb://127.0.0.1:27017/';
MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
    } else {
        let db = client.db("wangqin");
        // 增加
        // db.collection('user').insertOne({'name': 'node', 'age': 10}, (err,result) => {
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log(result)
        //         client.close();
        //     }
        // })
        // 修改
        // db.collection('user').updateOne({'name': 'nodejs'}, {$set: {'name': 'node'}}, (err) => {
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log('修改成功');
        //         client.close();
        //     }
        // });
        // 删除
        // db.collection('user').deleteMany({'name': 'node'}, (err) => {
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log('删除成功');
        //         client.close();
        //     }
        // });


    }
});
