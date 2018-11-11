const express = require('express');
const app = new express();
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
app.get('/news', (req, res) => {
    res.render('home',{
        name: 'news',
        list: [1,2,3,4,5]
    })
});
app.get('/shop/:aid', (req, res) => {// 动态路由

});



app.listen(3000, () => console.log('Example app listening on port 3000!'));
