var gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('default', () => {
    return gulp
    	.src('static/jsx/*.jsx')
        .pipe(babel({
            presets: ['env','react']
        }))
        .pipe(gulp.dest('static/js/react'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['default']);
});