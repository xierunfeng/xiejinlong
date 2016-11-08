var gulp=require('gulp');
//文件操作模块
var fs=require('fs');
//本地服务器 编译响应
var connect=require('gulp-connect');
var respond=require('gulp-respond');

var uglify=require('gulp-uglify');//压缩js
var concat=require('gulp-concat');//合并js;
//已angular单独模块进行压缩。
var ngAnnotate=require('gulp-ng-annotate');
var ngmin=require('gulp-ngmin');


var clean=require('gulp-clean');//清理
var minifyCss=require('gulp-minify-css');//压缩css
var minifyHtml=require('gulp-minify-html');//压缩html
var rename=require('gulp-rename');//把html重新命名

var rev=require('gulp-rev');//对代码加密;
var revCollector=require('gulp-rev-collector');//替换方法;


gulp.task('clean',function(){
	return gulp.src(['./src/js/app/','./src/css/build/'])
				.pipe(rename(function(path){
					path.basename='build'
				}))
				.pipe(clean('./src/'))
});

gulp.task('miniJs',['miniCss'],function(){
	return gulp.src(['src/js/app.js','src/js/config.js','src/js/controller.js','src/js/directive.js'])
		.pipe(ngAnnotate())
		.pipe(ngmin())
		.pipe(uglify())//压缩
		.pipe(concat('ng.min.js'))
		.pipe(rev())//加密
		.pipe(gulp.dest('src/js/app'))//输出地址
		.pipe(rev.manifest('miniJs.json'))//生成JSON
		.pipe(gulp.dest('./src/'))//输出加密

});

gulp.task('minifyHtml',['miniJs'],function(){
	return gulp.src('./src/index.html')

		.pipe(minifyHtml())
		.pipe(rename(function(path){
			path.basename='build'
		}))
		.pipe(gulp.dest('./src/'))
})

gulp.task('miniCss',['clean'],function(){
	return gulp.src('./src/css/*.css')
		.pipe(minifyCss())//压缩css;
		.pipe(concat('all.min.css'))//合并
		.pipe(rev())//加密;
		.pipe(gulp.dest('./src/css/build/'))
		.pipe(rev.manifest('miniCss.json'))//生成加密文件；
		.pipe(gulp.dest('./src/'))
})

//用加密的替换;
gulp.task('rev',['minifyHtml'],function(){
	return gulp.src(['./src/build.html','./src/miniJs.json','./src/miniCss.json'])
		.pipe(revCollector())
		.pipe(gulp.dest('./src/'))
})
gulp.task('watch',function(){
	gulp.watch(['./src/js/*.js','./src/css/*.css','./src/*.html'],['rev'])
})

gulp.task('connect',function(){

	connect.server({
		root:['src','../bower_components'],
		port:8008,
		livereload:true,
		middleware:function(){
			return [function(req,res,next){
				//console.log('开始操作');
				next();
			},function(req,res){
				var path=req.url.split('?').shift();
				path=path=='/'?'/build.html':path;
				url='src'+path;
				//console.log(url);
				if(!fs.existsSync(url)){
					url='bower_components'+path;
					//console.log(url);
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

gulp.task('serve',['rev','connect','watch']);