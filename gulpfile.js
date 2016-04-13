const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('server-to-es2015', () => {
    return gulp.src('./server/server.js')
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe(gulp.dest(__dirname + "/build/server"));
});

gulp.task('client-transform', () => {
    return gulp.src('./client/*.js')
                .pipe(babel({
                    presets: ['es2015', 'react']
                }))
                .pipe(gulp.dest(__dirname + "/build/client"))
});

gulp.task('copy', () => {
    gulp.src('index.html')
        .pipe(gulp.dest('./build'))
});

gulp.task('default', ['server-to-es2015', 'client-transform', 'copy']);