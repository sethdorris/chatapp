const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src('./app/index.js')
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe(gulp.dest(__dirname));
});