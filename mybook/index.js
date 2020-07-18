/*
    图书管理系统-入口文件
*/
const express = require('express');
const path = require('path');
const router = require('./router.js');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();



// error ruturn to client  handle
var httpError = require('http-errors');
//cookie configuration
var cookieParser = require('cookie-parser');
//  日志打印
var logger = require('morgan');




// 启动静态资源服务
app.use('/www',express.static('public'));

// 设置模板引擎
// 设置模板的路径
app.set('views',path.join(__dirname,'views'));
// 设置模板引擎
app.set('view engine','art');
// 使express兼容art-template模板引擎
app.engine('art', require('express-art-template'));

// 处理请求参数
// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }));
// 处理json格式的参数
app.use(bodyParser.json());


app.use(cookieParser());
app.use(logger('dev'));



// 启动服务器功能
// 配置路由
// app.use(router);
app.use('/', router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(httpError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// 监听端口
// app.listen(3000,()=>{
    // console.log('running...');
// });




