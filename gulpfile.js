const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task("default", () => {
	gulp.src( "./static/jsx/*.jsx" ).pipe( babel({ plugins: ['transform-react-jsx'] }) ).pipe( gulp.dest("./static/js/react/") );
	console.log('gulp');
});