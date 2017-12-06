const express = require('express');
const gulp = require('gulp');
const babel = require('gulp-babel');
var app = express();

gulp.task("default", () => {
    gulp.src( "./static/jsx/*.jsx" ).pipe( babel({ plugins: ['transform-react-jsx'] }) ).pipe( gulp.dest("src/js/react/") );
});

app.set('view engine', 'pug');
app.set('views','./views');

const rootjs = require('./routes/root.js');
const testjs = require('./routes/test.js');
const formjs = require('./routes/form.js');
const reactjs = require('./routes/react.js');
// const moviesjs = require('./routes/movies.js');
const urlshortenerjs = require('./routes/urlshortener.js');

app.use('/', rootjs);
app.use('/test', testjs);
app.use('/form', formjs);
// app.use('/movies', moviesjs);
app.use('/url', urlshortenerjs);
app.use('/react', reactjs);

app.listen(6080, '127.0.0.1', () => {
	console.log('listening on 127.0.0.1:6080');
});