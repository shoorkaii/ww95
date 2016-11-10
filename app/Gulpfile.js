/**
 * Created by reza on 11/10/16.
 */

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var DIR_NAME = path.resolve(__dirname , '../');


var sassOptions = {
    errLogToConsole : true,
    outputStyle : 'compressed'
};

var autoprefixerOption = {
  browsers:['last 2 versions', '> 1%', 'firefox >= 3', 'safari >= 4', 'IE >= 6']
};

gulp.task('hello', function () {
    console.log('Hello World from Gulp :))');
});

gulp.task('path', function () {

    console.log(DIR_NAME);
});

gulp.task('sass', function () {
    return watch(DIR_NAME + '/*.scss', function () {
        console.log('sass watcher ...');

        gulp.src(DIR_NAME + '/style.scss')
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(autoprefixer(autoprefixerOption))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(DIR_NAME + '/css'));
    });

});

gulp.task('default', ['sass'], function () {

});