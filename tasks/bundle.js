const concat = require('gulp-concat');
const gulp = require('gulp');
const merge = require('merge2');
const path = require('path');

module.exports = function(config) {

    gulp.task('bundle', function(cb) {
        return merge([
            gulp.src(config.dependencies.libs.concat([path.join(config.directories.dist, config.fileNames.jsMinOut)]))
                .pipe(concat(config.fileNames.jsBundleOut))
                .pipe(gulp.dest(config.directories.dist))
        ]);
    });
    
}