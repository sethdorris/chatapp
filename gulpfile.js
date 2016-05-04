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
    return browserify('./client/app.js', { debug: true })
                    .transform(babelify, {
                        presets: ['es2015', 'react', 'stage-2', 'stage-3'],
                        plugins: ['transform-runtime','transform-regenerator']})
                    .bundle()
                    .pipe(source('app.js'))
                    .pipe(gulp.dest(__dirname + "/build/client"));
});

gulp.task('copy', () => {
    return gulp.src(['index.html', 'main.css'])
            .pipe(gulp.dest('./build'))
});

gulp.task('default', ['server-to-es2015', 'client-transform', 'copy']);