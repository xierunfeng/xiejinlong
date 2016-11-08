var express=require('express');
var app=express();

/*app.all('/',function(req,res,next){
	console.log('匹配all');
	next();//向下执行;
})*/


/*app.get('/',function(req,res,next){
	res.send('开始匹配首页');
	console.log('匹配首页')
	next()
},function(req,res){
	//res.send('匹配到index');
	console.log('匹配到index');
})


app.get('/list',function(req,res){
	res.send('hello world');
})


app.get(/a/,function(req,res){
	res.send('匹配到所有带a 的路由');
})
*/

/*app.route('/index')
	.get(function(req,res){
		res.send('get  /index')
	})
	.post(function(req,res){
		res.send('post /index')
	})
app.post('/formList',function(req,res){
	var json={code:0,msg:'请求成功'};
	res.send(json);//或者res.json(json);
	//res.send('formList页面');
})*/

/*var conf=require('./config.js')
//console.log(conf);
app.use('/bawei',conf);*/
/*app.use('/user/:id',function(req,res,next){
	console.log('time:'+new Date())
	next();
})
app.get('/user/:name',function(req,res){
	var name=req.params.name;
	res.send(name);
})*/


/*app.get('/user/:id',function(req,res,next){
	if(req.params.id==0) next('route');
	else next();
},function(req,res,next){
	res.send('this is index');
})

app.get('/user/:show',function(req,res,next){
	res.send('this is show');
})*/

app.use(express.static('.././public'))

app.use('/static',express.static('.././list'))
var server=app.listen(3001,function(){
	console.log('this is 3001');
	console.log(server.address());
})