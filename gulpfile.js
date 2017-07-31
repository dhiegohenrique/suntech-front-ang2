var gulp = require('gulp');
var runSequence = require('run-sequence');
var jsonMinify = require('gulp-json-minify');

gulp.task('jsonMinify', function() {
    return gulp.src('dist/assets/i18n/*.json')
        .pipe(jsonMinify())
        .pipe(gulp.dest('dist/assets/i18n'));
});

gulp.task('default', function(callBack) {
    return runSequence('jsonMinify', callBack);
});