const c = require('../config');
const config = new c();
const del = require('del');
const gulp = require('gulp');

gulp.task('clean:dist', function(cb) {
    return del(config.directories.dist + '/*', cb);
});

gulp.task('clean:examples', function(cb) {
    return del([
            config.directories.examplesJs + '/*',
            config.directories.examplesCss + '/*',
            config.directories.examplesImg + '/*'
        ], cb);
});