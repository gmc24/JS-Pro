var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');

gulp.task('hello', function () {
    console.log('hello');
});

gulp.task('sass-compile', function () {
    return gulp.src('app/scss/style2.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});