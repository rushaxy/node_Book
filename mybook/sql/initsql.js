/*
    把data.json文件中的数据拼接成insert语句
*/
const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'../','data.json'),'utf8',(err,content)=>{
    if(err) return;
    let list = JSON.parse(content);
    let arr = [' -- 图书管理项目 json transform sql','\r\n',createTable];
    list.forEach((item)=>{
        let sql = `insert into book (name,author,category,description) values ('${item.name}','${item.author}','${item.category}','${item.desc}');`;
        arr.push('\r\n');
        arr.push(sql);
    });
    fs.writeFile(path.join(__dirname,'data.sql'),arr.join(''),'utf8',(err)=>{
        console.log('init data finished!');
    });
});


const createTable = 
`
-- 创建数据表 book
-- ----------------------------
-- Table structure for book
-- ----------------------------
drop table if exists book;
CREATE TABLE book (
    id  int(20) NOT NULL AUTO_INCREMENT COMMENT '图书id号' ,
    name  varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '书名' ,
    author  varchar(40) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '作者' ,
    category  varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '分类' ,
    description  varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '描述' ,
    create_time  datetime NULL DEFAULT NULL COMMENT '创建时间' ,
    modified_time  datetime NULL DEFAULT NULL COMMENT '修改时间' ,
    PRIMARY KEY (id)
    )
    ENGINE=InnoDB
    DEFAULT CHARACTER SET=utf8 COLLATE=utf8_unicode_ci
    AUTO_INCREMENT=9
    ROW_FORMAT=DYNAMIC
;   `;




// 