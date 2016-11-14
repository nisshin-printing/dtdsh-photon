'use strict';

/**
 * Imageタスク&SVGタスク
 */
let gulp = require('gulp'),
	config = require('../config'),
	$ = require('./plugins');

gulp.task('svg', () => {
	return gulp.src(config.path.svg.src)
		.pipe($.plumber({
			errorHandler: (error) => {
				console.log(error.messageFormatted);
				this.emit('end');
			}
		}))
		.pipe($.imagemin())
		.pipe($.svgstore({ inlineSvg: true }))
		.pipe($.cheerio({
			run: ($) => {
				$('[fill]').removeAttr('fill');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(gulp.dest(config.dist + config.path.svg.dest))
		.pipe($.browser.stream(config.path.svg.watch));
});

gulp.task('svg2png', () => {
	return gulp.src(config.path.svg.src)
		.pipe($.plumber({
			errorHandler: (error) => {
				console.log(error.messageFormatted);
				this.emit('end');
			}
		}))
		.pipe($.svg2png())
		.pipe($.rename({
			prefix: 'icons.svg.'
		}))
		.pipe($.imagemin())
		.pipe(gulp.dest(config.dist + config.path.svg.dest))
		.pipe($.browser.stream(config.path.svg.watch));
});

gulp.task('image', () => {
	return gulp.src(config.path.image.src)
		.pipe($.plumber({
		errorHandler: $.notify.onError('<%= error.message %>')
	}))
		.pipe($.imagemin())
		.pipe(gulp.dest(config.dist + config.path.image.dest))
		.pipe($.browser.stream());
});