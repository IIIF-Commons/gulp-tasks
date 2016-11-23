const metadata = require('./package');

module.exports = function () {
    this.name = metadata.name;
    this.header = '// ' + this.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
    this.dependencies = {
        // libs that MUST be included in a consuming app for this component to work
        libs: [],
        // libs that MAY be included in a consuming app but are used here for examples purposes
        examples: [],
        // ts definitions to copy to the typings dir
        typings: []
    };
    this.fileNames = {
        cssOut: this.name + '.css',
        jsOut: this.name + '.js',
        jsMinOut: this.name + '.min.js',
        jsBundleOut: this.name + '.bundle.js',
        dtsOut: this.name + '.d.ts',
        dtsBundleOut: this.name + '.bundle.d.ts'
    };
    this.directories = {
        dist: './dist',
        examples: './examples',
        examplesCss: './examples/css',
        examplesImg: './examples/img',
        examplesJs: './examples/js',
        typings: './typings'
    };
    this.typescript = {
        src: [
            'src/_references.ts',
            'src/*.ts',
            'typings/*.ts',
            'typings/**/*.ts'
        ],
        config: {
            declarationFiles: true,
            noExternalResolve: true,
            noLib: false,
            module: 'commonjs',
            sortOutput: true
        }
    };
    this.browserify = {
        src: this.directories.dist,
        target: this.directories.dist,
        config: {
            standalone: this.name,
            debug: false
        }
    };
    this.sources = {
        css: './src/css/styles.less',
        img: './src/img/**'
    };
}