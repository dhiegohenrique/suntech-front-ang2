var gulp = require('gulp');
var runSequence = require('run-sequence');
var jsonMinify = require('gulp-json-minify');
var gulpCopy = require('gulp-copy');

gulp.task('jsonMinify', function() {
    return gulp.src('dist/assets/i18n/*.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('dist/assets/i18n'));
});

gulp.task('copyProject', function() {
    var sources = [
        'package.json'
    ];

    return gulp.src(sources)
        .pipe(gulpCopy('dist', { prefix: 0 }));
});

gulp.task('default', function(callBack) {
    return runSequence('jsonMinify', 'copyProject', callBack);
});