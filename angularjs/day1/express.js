var express=require('express');
var app=express();

var server=app.listen(3001,function(){
	console.log('start');
	console.log(server);
})