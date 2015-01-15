// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

// Lint Task
gulp.task('lint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(compass({
            css: 'src/css',
            sass: 'src/scss'
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('src/dist/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
