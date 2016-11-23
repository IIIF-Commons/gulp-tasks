const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const rename = require('gulp-rename');
 
gulp.task('less', function() {
  return gulp.src(config.sources.css)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(rename(config.fileNames.cssOut))
    .pipe(gulp.dest(config.directories.dist));
});