const browserify = require('./tasks/browserify');
const build = require('./tasks/build');
const bump = require('./tasks/bump');
const bundle = require('./tasks/bundle');
const clean = require('./tasks/clean');
const copy = require('./tasks/copy');
const examples = require('./tasks/examples');
const less = require('./tasks/less');
const minify = require('./tasks/minify');
const prependHeaders = require('./tasks/prependHeaders');
const config = require('./config');
const gulp = require('gulp');
const utils = require('gulp-utils');

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'clean:examples', 'build', 'browserify', 'less', 'minify', 'bundle', 'bundle:typings', 'prependHeaders', 'sync', cb);
});

gulp.task('sync', ['copy:bundle', 'copy:css', 'copy:img', 'copy:typings']);

module.exports = config;