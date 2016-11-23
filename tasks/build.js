const c = require('./config');
const config = new c();
const concat = require('gulp-concat');
const gulp = require('gulp');
const merge = require('merge2');
const ts = require('gulp-typescript');

gulp.task('build', function() {
    const result = gulp.src(config.typescript.src)
        .pipe(ts(config.typescript.config));

    return merge([
        result.dts
            .pipe(concat(config.fileNames.dtsOut))
            .pipe(gulp.dest(config.directories.dist)),
        result.js
            .pipe(concat(config.fileNames.jsOut))
            .pipe(gulp.dest(config.directories.dist))
    ]);
});