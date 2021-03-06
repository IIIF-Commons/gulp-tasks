const gulp = require('gulp');
const path = require('path');

module.exports = function(config) {

    // test bundle
    // gulp.task('copy:bundle', function() {
    //     return gulp.src([path.join(config.directories.dist, config.fileNames.jsBundleOut)].concat(config.dependencies.examples)).pipe(gulp.dest(config.directories.examplesJs));
    // });

    // test unbundled js
    gulp.task('copy:bundle', function() {
        return gulp.src([path.join(config.directories.dist, config.fileNames.jsOut)].concat(config.dependencies.libs).concat(config.dependencies.examples)).pipe(gulp.dest(config.directories.examplesJs));
    });

    gulp.task('copy:css', function() {
        return gulp.src([path.join(config.directories.dist, config.fileNames.cssOut)]).pipe(gulp.dest(config.directories.examplesCss));
    });

    gulp.task('copy:img', function() {
        return gulp.src(config.sources.img).pipe(gulp.dest(config.directories.examplesImg));
    });

}