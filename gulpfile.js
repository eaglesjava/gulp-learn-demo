var gulp = require('gulp');

gulp.task('hello',function(){
	console.log('您好');
});


gulp.task('default',['hello']);

