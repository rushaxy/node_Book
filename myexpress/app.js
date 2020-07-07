/*
    Express之HelloWorld
*/
// const express = require('express');
// const app = express();

// // 绑定路由
// app.get('/', function(req, res) {
//     // 响应请求
//     res.send('Hello World rusha!');
// });

// var server = app.listen(3000, "localhost", function() {
//     // 监听的域名或者IP
//     var host = server.address().address;
//     // 监听的端口
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// });

// console.info(server);




const app = require('express')();

app.get('/',(req,res)=>{
	res.send('ok');
});
var server = app.listen(3000,'localhost',()=>{
	const host = server.address().address;
	const port = server.address().port;
	console.info('listening at http://%s:%s', host, port);
});








