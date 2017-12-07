'use strict';

const gulp       = require('gulp');
const babel      = require("babelify");
const sass       = require('gulp-sass');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

const conf = {
	srcSass: 'static/style/sass',
	destSass: 'static/style',

	srcJsx: 'static/jsx',
	destJs: 'static/js/react',

	appName: 'index.js'
};

gulp.task('sass', () => {
	return gulp.src(conf.srcSass + '/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(conf.destSass));
});

gulp.task('jsx', (cb) => { 
	var bundler = browserify(conf.srcJsx + '/index.jsx', { debug: true })
					.transform(babel.configure({ presets: ['env', 'react'] }));

	return bundler.bundle()
		.on('error', (err) => { console.error(err); this.emit('end'); })
		.pipe(source(conf.appName))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(conf.destJs));
});
gulp.task('default', ['sass', 'jsx']);