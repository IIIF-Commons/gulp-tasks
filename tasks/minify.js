const gulp = require('gulp');
const utils = require('gulp-utils');
const path = require('path');

gulp.task('minify', function(cb){
    Promise.all([
        utils.minify(path.join(config.directories.dist, config.fileNames.jsOut), config.directories.dist)
    ]).then(function(){
        cb();
    });
});