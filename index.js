const browserify = require('./tasks/browserify');
const build = require('./tasks/build');
const bundle = require('./tasks/bundle');
const clean = require('./tasks/clean');
const copy = require('./tasks/copy');
const examples = require('./tasks/examples');
const less = require('./tasks/less');
const minify = require('./tasks/minify');
const mocha = require('./tasks/mocha');
const prependHeaders = require('./tasks/prependHeaders');
const config = require('./config');
const gulp = require('gulp');

module.exports = {

    init: function(opts) {

        const c = new config(opts);

        browserify(c);
        build(c);
        bundle(c);
        clean(c);
        copy(c);
        examples(c);
        less(c);
        minify(c);
        mocha(c);
        prependHeaders(c);

        gulp.task('default', gulp.series('clean:dist', 'clean:examples', 'build', 'browserify', 'less', 'minify', 'bundle', 'prependHeaders', 'sync'));

        gulp.task('sync', gulp.parallel('copy:bundle', 'copy:css', 'copy:img'));
        
        gulp.task('test', gulp.series('mocha'));
    }

}
