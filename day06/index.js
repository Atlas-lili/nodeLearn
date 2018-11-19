const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app = new express();
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


app.get('/', (req, res) => {
    // let city = req.cookies.citys;
    if (session.username) {
        res.send('欢迎回来'+session.username);
    } else {
        res.send('请登录');
    }
});

app.get('/login', (req, res) => {
    session.username = '张三';



    res.send('登陆');
});

app.get('/lvyou', (req, res) => {
    // let cityArr = req.cookies.citys;
    // let city = req.query.city;
    // if(!(cityArr && Array.isArray(cityArr))){
    //     cityArr = [];
    // }
    // if(!(cityArr.toString().indexOf(city)>-1)){
    //     cityArr.push(city);
    // }
    //
    // res.cookie('citys',cityArr,{maxAge:3600*1000,httpOnly:true});


    res.send('欢迎来到：'+city);
});
app.listen(3000);
