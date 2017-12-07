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
	appName: 'index.jsx',
	destName: 'index.js'
};

gulp.task('sass', () => {
	return gulp.src(conf.srcSass + '/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(conf.destSass));
});

gulp.task('jsx', () => { 
	var bundler = watchify(
		browserify(conf.srcJsx + '/' + conf.appName, { debug: true })
		.transform(babel.configure({ presets: ['env', 'react'] }))
	);

	bundler.bundle()
		.on('error', function(err) { console.error(err); this.emit('end'); })
		.pipe(source(conf.destName))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(conf.destJs));

	return bundler;
});
gulp.task('default', ['sass', 'jsx']);