const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const rename = require('gulp-rename');

module.exports = function(config) {

    gulp.task('less', function() {
        return gulp.src(config.sources.css)
            .pipe(less(Object.assign({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            }, config.less)))
            .pipe(rename(config.fileNames.cssOut))
            .pipe(gulp.dest(config.directories.dist));
  });

}