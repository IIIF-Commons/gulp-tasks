const gulp = require('gulp');
const utils = require('gulp-utils');
const path = require('path');

gulp.task('prependHeaders', function(cb){
    Promise.all([
        utils.prependHeader(config.header, path.join(config.directories.dist, config.fileNames.dtsOut), config.directories.dist),
        utils.prependHeader(config.header, path.join(config.directories.dist, config.fileNames.jsOut), config.directories.dist),
        utils.prependHeader(config.header, path.join(config.directories.dist, config.fileNames.jsMinOut), config.directories.dist)
    ]).then(function(){
        cb();
    });
});