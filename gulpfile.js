'use strict';

const gulp         = require('gulp');
const babel        = require("babelify");
const sass         = require('gulp-sass');
const browserify   = require('browserify');
const source       = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');
const sourcemaps   = require('gulp-sourcemaps');
const coffeescript = require('gulp-coffeescript');
const cleanCSS     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');

const conf = {
	srcSass: 'static/style/sass',
	destSass: 'static/style',

	srcJsx: 'static/jsx',
	destJsx: 'static/js/react',

	srcCoffee: 'static/coffee',
	destCoffee: 'static/js/coffee',

	srcJS: 'static/js',
	destJS: 'static/js',

	appName: 'index.js'
};

gulp.task('compile-sass', () => {
	return gulp.src(conf.srcSass + '/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(conf.destSass));
});

gulp.task('compile-jsx', () => { 
	var bundler = browserify(conf.srcJsx + '/index.jsx', { debug: true })
					.transform(babel.configure({ presets: ['env', 'react'] }));

	return bundler.bundle()
		.on('error', (err) => { console.error(err); this.emit('end'); })
		.pipe(source(conf.appName))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(conf.destJsx));
});

gulp.task('compile-coffeescript', () => {
	return gulp.src(conf.srcCoffee + '/*.coffee')
		.pipe(coffeescript({bare: true}).on('error', (err) => { console.log(err); }))
		.pipe(uglify())
		.pipe(gulp.dest(conf.destCoffee));
});

gulp.task('default', ['compile-sass', 'compile-jsx', 'compile-coffeescript']);