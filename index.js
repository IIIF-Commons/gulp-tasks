'use strict';

const browserify = require('./browserify');
const build = require('./build');
const config = require('./config');
const gulp = require('gulp');
const utils = require('gulp-utils');

var tasks = {
    browserify: function(config) {
        return through.obj(function(file, encoding, cb) {
            var bundle = browserify(config)
                .require(file, {entry: file.path})
                .bundle();

            file.contents = bundle;
            this.push(file);
            cb();
        });
    },
    mount: function(connect, dir) {
        return connect.static(path.resolve(dir));
    },
    minify: function(file, dest) {
        return new Promise(function(resolve, reject) {
            gulp.src(file)
                .pipe(rename(function(path) {
                    path.extname = ".min" + path.extname;
                }))
                .pipe(uglify({
                    mangle: false
                }))
                .pipe(gulp.dest(dest))
                .on('end', function() {
                    resolve();
                });
        });
    },
    prependHeader: function(header, file, dest){
        return new Promise(function(resolve, reject) {
            return gulp.src(file)
                    .pipe(insert.prepend(header))
                    .pipe(gulp.dest(dest))
                    .on('end', function() {
                        resolve();
                    });
        });
    }
};

module.exports = utils;