var gulp = require('gulp');
var mocha = require('gulp-mocha');
var path = require('path');

module.exports = function(config) {

    gulp.task('mocha', function () {
      return gulp.src(path.join(config.directories.tests, '*.js'))
        .pipe(mocha({ compilers: ['ts:ts-node/register','tsx:ts-node/register'], reporter: 'list' }));
    });

}
