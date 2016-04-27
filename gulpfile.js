const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const babel = require('gulp-babel');

gulp.task('server-to-es2015', () => {
    return gulp.src('./server/server.js')
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe(gulp.dest(__dirname + "/build/server"));
});

gulp.task('client-transform', () => {
    var bundlesur = browserify('./client/app.js')
                    .transform(babelify, { presets: ['es2015', 'react', 'stage-2'] })
                    .bundle()
                    .pipe(source('app.js'))
                    .pipe(gulp.dest(__dirname + "/build/client"));
});

gulp.task('copy', () => {
    gulp.src('index.html')
        .pipe(gulp.dest('./build'))
});

/* gulp.task('lint', () => {
    return gulp.src(['./client/*.js', './server/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
}) */

gulp.task('default', ['server-to-es2015', 'client-transform', 'copy']);