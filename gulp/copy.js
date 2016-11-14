'use strict';
/*
 * Copy タスク
 * ファイルをただコピーする
 */
let gulp = require('gulp'),
		config = require('../config'),
		$ = require('./plugins');

gulp.task('copy', () => {
	gulp.src(config.copyfiles).pipe(gulp.dest(config.dist));
});