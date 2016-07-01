var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('scripts', function() {
  return gulp.src([
        'public/themes/baun/js/jquery.min.js',
        'public/themes/baun/js/jquery.plugin.min.js',
        'public/themes/baun/js/bootstrap.min.js',
        'public/themes/baun/js/smooth-scroll.min.js',
        'public/themes/baun/js/skrollr.min.js',
        'public/themes/baun/js/spectragram.min.js',
        'public/themes/baun/js/scrollReveal.min.js',
        'public/themes/baun/js/isotope.min.js',
        'public/themes/baun/js/lightbox.min.js',
        'public/themes/baun/js/scripts.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify('all.js'))
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
    return gulp.src([
        'public/themes/baun/css/line-icons.min.css',
        'public/themes/baun/css/elegant-icons.min.css',
        'public/themes/baun/css/lightbox.min.css',
        'public/themes/baun/css/bootstrap.min.css',
        'public/themes/baun/css/theme.css',
        'public/themes/baun/css/custom.css',
        ])
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('public/themes/baun/css'))
});

gulp.task('default', function() {

});
