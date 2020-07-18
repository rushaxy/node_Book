/**
 * 工具类
 */
const fs = require('fs');
const path = require('path');
const data = require('../data.json');

// 自动生成图书编号（自增）
exports.maxBookCode = ()=>{
    let arr = [];
    data.forEach((item)=>{
        arr.push(item.id);
    });
    return Math.max.apply(null,arr);
}
// 把内存数据写入文件
exports.writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname,'../','data.json'),JSON.stringify(data,null,4),'utf8',(err)=>{
        if(err){
            res.send('server error');
        }
        // 文件写入成功之后重新跳转到主页面
        res.redirect('/');
    });
}
