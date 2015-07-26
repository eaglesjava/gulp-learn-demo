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

//3、复制多个文件 | globs
gulp.task('img',function(){
	//复制多个文件
	//return gulp.src('img/*.jpg').pipe(gulp.dest('dist/img'));
	
	//globs
	//return gulp.src('img/*.{jpg,png}').pipe(gulp.dest('dist/img'));
	//return gulp.src('img/*').pipe(gulp.dest('dist/img'));
	//return gulp.src('img/*/*').pipe(gulp.dest('dist/img'));
	return gulp.src('img/**/*').pipe(gulp.dest('dist/img'));
	
});






