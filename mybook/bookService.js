/*
    业务模块
*/
const data = require('./data.json');
const path = require('path');
const fs = require('fs');

//应用工具类 处理
const unit = require('./unit/unit.js');


// 渲染主页面
exports.showIndex = (req,res) => {
    res.render('index',{list : data});
}
// 跳转到添加图书的页面
exports.toAddBook = (req,res) => {
    res.render('addBook',{});
}
// 添加图书保存数据
exports.addBook = (req,res) => {
    // 获取表单数据
    let info = req.body;
    let book = {};
    for(let key in info){
        book[key] = info[key];
    }
    book.id = unit.maxBookCode() + 1;
    data.push(book);
    // 把内存中的数据写入文件
    unit.writeDataToFile(res);
}
// 跳转编辑图书页面
exports.toEditBook = (req,res) => {
    let id = req.query.id;
    let book = {};
    data.forEach((item)=>{
        if(id == item.id){
            book = item;
            return;
        }
    });
    res.render('editBook',book);
}
// 编辑图书更新数据
exports.editBook = (req,res) => {
    let info = req.body;
    data.forEach((item)=>{
        if(info.id == item.id){
            for(let key in info){
                item[key] = info[key];
            }
            return;
        }
    });
    // 把内存中的数据写入文件
    unit.writeDataToFile(res);
}
// 删除图书信息
exports.deleteBook = (req,res) => {
    let id = req.query.id;
    data.forEach((item,index)=>{
        if(id == item.id){
            // 删除数组的一项数据
            data.splice(index,1);
        }
        return;
    });
    // 把内存中的数据写入文件
    unit.writeDataToFile(res);
}

