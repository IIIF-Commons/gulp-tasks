module.exports = function (opts) {
    this.metadata = opts.metadata;
    this.header = '// ' + this.metadata.name + ' v' + this.metadata.version + ' ' + this.metadata.homepage + '\n';
    this.dependencies = {
        // libs that MUST be included in a consuming app for this component to work
        libs: opts.libs || [],
        // libs that MAY be included in a consuming app but are used here for examples purposes
        examples: opts.examples || []
    };
    this.fileNames = {
        cssOut: this.metadata.name + '.css',
        jsOut: this.metadata.name + '.js',
        jsMinOut: this.metadata.name + '.min.js',
        jsBundleOut: this.metadata.name + '.bundle.js',
        dtsOut: this.metadata.name + '.d.ts'
    };
    this.directories = {
        dist: './dist',
        examples: './examples',
        examplesCss: './examples/css',
        examplesImg: './examples/img',
        examplesJs: './examples/js',
        tests: './tests'
    };
    this.browserify = {
        src: this.directories.dist,
        target: this.directories.dist,
        config: {
            standalone: this.metadata.name,
            debug: false
        }
    };    
    this.sources = {
        css: './src/css/styles.less',
        img: './src/img/**'
    };
    this.less = Object.assign({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }, opts.less || {})
}
