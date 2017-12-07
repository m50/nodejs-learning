'use strict';

const gulp       = require('gulp');
const babel      = require("babelify");
const sass       = require('gulp-sass');
const browserify = require('browserify');
const watchify   = require('watchify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

const conf = {
	srcSass: 'static/style/sass',
	destSass: 'static/style',

	srcJsx: 'static/jsx',
	destJs: 'static/js/react',

	appName: 'app.js'
};

gulp.task('sass', () => {
	return gulp.src(conf.srcSass + '/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(conf.destSass));
});

gulp.task('jsx', (cb) => { 
	// var bundler = watchify(
	// 	browserify(conf.srcJsx + '/index.jsx', { debug: true })
	// 	.transform(babel.configure({ presets: ['env', 'react'] }))
	// );

	var bundler = browserify(conf.srcJsx + '/index.jsx', { debug: true })
					.transform(babel.configure({ presets: ['env', 'react'] }));

	bundler.bundle()
		.on('error', (err) => { console.error(err); this.emit('end'); })
		.pipe(source(conf.appName))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(conf.destJs));
});
gulp.task('default', ['sass', 'jsx']);