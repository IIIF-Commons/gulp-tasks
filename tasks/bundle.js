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

    gulp.task('bundle:typings', function(cb) {
        return gulp.src(config.dependencies.typings.concat([
                path.join(config.directories.typings, config.fileNames.dtsBundleOut), // include optional typings/name.d.ts for customisations
                path.join(config.directories.dist, config.fileNames.dtsOut)
            ]))
            .pipe(concat(config.fileNames.dtsBundleOut))
            .pipe(gulp.dest(config.directories.dist));
    });
    
}