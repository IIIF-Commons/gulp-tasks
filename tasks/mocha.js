var gulp = require('gulp');
var mocha = require('gulp-mocha');

module.exports = function(config) {

    gulp.task('mocha', function () {
      return gulp.src(config.directories.tests + '/*.js')
        .pipe(mocha({ reporter: 'list' }));
    });

}
