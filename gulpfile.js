var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    connect         = require('gulp-connect');

gulp.task('css', function () {
    gulp.src(['client/css/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/build/css'))
    .pipe(connect.reload());
});

gulp.task('server', function () {
    connect.server({
        port: 8088
//        livereload: { port: 8050 }
    });
});

gulp.task('watch', ['css'], function () {
    gulp.watch('client/css/**/*.css', ['css']);
});

gulp.task('default', ['css', 'watch', 'server']);