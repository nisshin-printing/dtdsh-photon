'use strict';
/**
 * タスク設定ファイル
 */
module.exports = {
	IS_PRODUCTION: false,
	dist: 'public',
	autoTest: false,
	ejs: {
		minify: {
			collapseWhitespace: true,
			conservativeCollapse: true,
			decodeEntities: true,
			html5: true,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: false,
			preserveLineBreaks: true,
			preventAttributesEscaping: false,
			quoteCharacter: "",
			removeEmptyAttributes: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}
	},
	style: {
		sass: {
			errLogToConsole: true,
			outputStyle: 'compressed',
			sourcemap: true,
			souceComments: 'normal',
			includePaths: [
				'sass',
			]
		},
		autoprefixer: {
			browsers: [
				'last 3 version',
				'ie 10',
				'Android 4.2'
			]
		},
		soucemaps: './maps'
	},
	js: {
		sourcemaps: './maps'
	},
	browserify: {
		bundleOption: {
			cache: {},
			packageCache: {},
			fullPaths: false,
			debug: true,
			entries: [
              './js/src/background.js',
              './js/src/content.js'
            ],
			extensions: 'js'
		},
		output: './js',
		filename: 'apps.js'
	},
	server: {
		baseDir: './apps',
		index: 'index.html'
	},
	path: {
		ejs: {
			src: ['ejs/**/*.ejs', '!ejs/**/_*.ejs'],
			watch: 'ejs/**/*',
			dest: './apps'
		},
		style: {
			src: ['sass/**/*.scss', '!sass/**/_*.scss'],
			watch: 'sass/**/*.scss',
			dest: 'apps/assets/css'
		},
		svg: {
			src: 'svg/**/*.svg',
			watch: 'svg/**/*.svg',
			dest: 'apps/assets/svg',
		},
		js: {
			src: ['js/*.js', '!js/src/**/*'],
			watch: 'js/**/*.js',
			dest: 'apps/assets/js'
		},
		image: {
			src: 'img/**/*',
			watch: 'img/**/*',
			dest: 'apps/assets/img/'
		}
	}
};