'use strict'
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('hello',function(){
	console.log('Hello!');
});




gulp.task('sprite',function(){
	var spriteData = gulp.src(['src/images/icons/*.*'])
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName:'_sprite.scss',
		imgPath:'src/images/sprite.png',
		cssFormat:'scss',
		padding:16
	}));
	var imgStream = spriteData.img.pipe(gulp.dest('app/images'));
	var cssStream = spriteData.css.pipe(gulp.dest('src/scss/components/'));
	return(imgStream, cssStream);
});