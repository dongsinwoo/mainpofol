// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require("express");

// express는 함수이므로, 변환값을 변수에 저장한다.
var app = express();

app.listen(3000, function(){
    console.log("start!! express")
});


// resquest와  response라는 인자를 사용해서 콜백함수를 만든다.
// localhost:3000 브라우저에 res.send() 내부의 문자열이 띄워짐
app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('public'))
