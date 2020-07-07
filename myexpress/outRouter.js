const express = require('express');

//express 路由
const router = express.Router();

router.get('/hi',(req,res)=>{
    res.send('hi router');
});

router.get('/hello',(req,res)=>{
    res.send('hello router');
});

router.post('/abc',(req,res)=>{
    res.send('abc router');
});

module.exports = router;

