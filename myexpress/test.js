/*
    初步实现服务器功能
*/

const express = require('express');
const app = express();

// const app = require('express')();
// 

// const express = require('express');
// const app = express();
// 上面两行与下面一行代码等效
// const app = require('express')();
let server = app.get('/',(req,res)=>{
	res.send('ok');
});

server.listen(3000,()=>{
	console.info('running.......');
})
// app.get('/',(req,res)=>{
//     res.send('ok');
// }).listen(3000,()=>{
//     console.log('running...');
// });
// ----------------------------------
// let server = app.get('/',(req,res)=>{
//     res.send('abc');
// });
// server.listen(3000,()=>{
//     console.log('running...');
// });