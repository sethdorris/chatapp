const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const react = require('gulp-react');
const htmlreplace = require('gulp-html-replace');

const path = {
    HTML: './index.html',
    ALL: ['']
}

gulp.task('default', () => {
    return gulp.src('./server/server.js')
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe(gulp.dest(__dirname + "/build/server"));
});