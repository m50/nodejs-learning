var gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('default', () => {
    return gulp
    	.src('static/jsx/*.jsx')
        .pipe(babel({
            presets: ['react', 'env']
        }))
        .pipe(gulp.dest('static/js/react'));
});