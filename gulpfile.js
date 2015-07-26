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

//4、多个globs | 排除
gulp.task('data',function(){
	//多个globs
	//return gulp.src(['xml/*.xml','json/*.json']).pipe(gulp.dest('dist/data'));
	
	//排除
	return gulp.src(['xml/*.xml','json/*.json','!json/secret-*.json'])
		.pipe(gulp.dest('dist/data'));
});

//5、主任务
gulp.task('bulid',['copy-index','img','data'],function(){
	console.log('编译成功!');
});

//6、文件有变化时自动执行任务
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('img/*.{jpg,png}',['img']);
	gulp.watch(['xml/*.xml','json/*.json','!json/secret-*.json'],['data']);
});




