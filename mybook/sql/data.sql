 -- 图书管理项目 json transform sql

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
;   
insert into book (name,author,category,description) values ('三国演义','罗贯中','文学','一个杀伐纷争的年代');
insert into book (name,author,category,description) values ('水浒传','施耐庵','文学','108条好汉的故事');
insert into book (name,author,category,description) values ('西游记','吴承恩','文学','佛教与道教的斗争');
insert into book (name,author,category,description) values ('红楼梦','曹雪芹','文学','一个封建王朝的缩影');
insert into book (name,author,category,description) values ('天龙八部','金庸','文学','武侠小说');