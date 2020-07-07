/*
    托管静态文件

    1.可以指定虚拟目录
    2.可以指定多个目录作为静态资源目录
*/
const express = require('express');
const app = express();
// 实现静态资源服务
// use方法的第一个参数可以指定一个虚拟路径


//  --1---
// let server = app.use(express.static('public'));
// 			 app.use('nihao',express.static('hello'));

// server.listen(3000,()=>{
// 	console.info('running....');
// })

// --2------------   http://localhost:3000/abc/logo.gif


app.use('/abc',express.static('public'));

app.use('/nihao',express.static('hello'));

app.listen(3000,()=>{
    console.log('running...');
});










