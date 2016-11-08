var gulp=require('gulp');
var fs=require('fs');
//开启服务器;
var connect=require('gulp-connect');//连接;
var respond=require('gulp-respond');//应答;


gulp.task('connect',function(){
	var params={};
	connect.server({
		root:['src','./bower_components'],
		port:8008,
		livereload:true,
		middleware:function(){
			return [function(req,res,next){
				console.log('开始操作');
				next();
			},function()(req,res){
				var path=req.url.split('?').shift();
				path=path=='/'?'/index.html':path;
				url='src'+path;
				console.log(url);
				if(!fs.existsSync(url)){
					url='bower_components'+path;
					console.log(url);
				}
				gulp.src(url)
					.pipe(respond(res));
			}]  

		}
	});
});


gulp.task('test',function(){
	console.log('这是 test task');
})

gulp.task('serve',['test','connect']);