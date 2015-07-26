var gulp = require('gulp');

//1、创建任务

/*gulp.task('hello',function(){
	console.log('您好');
});


gulp.task('default',['hello']);*/

//2、复制单个文件

gulp.task('copy-index',function(){
	return gulp.src('index.html').pipe(gulp.dest('dist'));
});
