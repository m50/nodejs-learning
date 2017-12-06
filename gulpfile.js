const gulp       = require('gulp');
// const babel      = require("gulp-babel");
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

// gulp.task('default', () => {
//     return gulp
//     	.src(conf.srcJsx)
//         .pipe(babel({
//             presets: ['react', 'env']
//         }))
//         .pipe(gulp.dest(conf.destJsx));
// });

function compile(watch) {
  var bundler = watchify(
    browserify(conf.srcJsx + '/' + conf.appName, { debug: true })
      .transform(babel.configure({ presets: ['es2015', 'react'] }))
    );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source(conf.destName))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(conf.destJs));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('->bundling...');
      rebundle();
      console.log('->Done');
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('sass', function () {
  return gulp.src(conf.srcSass + '/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(conf.destSass));
});
gulp.task('sass:watch', function () {
  gulp.watch(conf.srcSass + '/**/*.scss', ['sass']);
});

gulp.task('build', function() { return compile(); });
gulp.task('watch', ['sass:watch'], function() { return watch();  });
gulp.task('default', ['watch', 'sass']);