var express=require('express');
var router=express.Router();
router.get('/user/:id',function(req,res,next){
	if(req.params.id==0) next('route');
	console.log('router start');
	next();
},function(req,res,next){
	res.send('index---page'+req.params.id);
})
router.get('/user/:name',function(req,res){
	res.send('user---page'+req.params.name);
})
router.get('/list',function(req,res){
	res.send('list---page')
})

module.exports=router;