var gulp = require('gulp');
var mocha = require('gulp-mocha');
const path = require('path');

module.exports = function(config) {

    gulp.task('mocha', function () {
      return gulp.src(path.join(config.directories.tests + '*.js'))
        .pipe(mocha({ reporter: 'list' }));
    });

}
