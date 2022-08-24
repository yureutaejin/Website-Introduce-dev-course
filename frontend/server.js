const express = require('express');
const app = express();

const carrerRouter = require('./routes/carrer');
const stackRouter = require('./routes/stack')

// 정적 파일 로드
app.use(express.static('public'));

// 포트에 로드
app.listen(3000, function(){
    console.log("Listening at 3000....");
});

// 메인 페이지 로드
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
    console.log("index.html....");
});

// carrer 라우팅
app.use('/carrer', carrerRouter);

// tool 라우팅
app.use('/stack', stackRouter);

// 오류 페이지 로드
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname+'/public/html/404.html');
});