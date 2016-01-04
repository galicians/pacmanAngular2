var gulp = require('gulp');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();
require('es6-promise').polyfill();


gulp.task('watch-sass', function() {
	gulp.watch('app/**/*.scss', ['styles'])
})

gulp.task('styles', function() {
    log('Compiling SASS --> CSS');

    return gulp
        .src(config.sass)
        .pipe($.plumber())
        .pipe($.sass()).on('error', sass.logError)
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.cssDestination));
});


function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}