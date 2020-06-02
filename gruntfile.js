module.exports = grunt => {

    require('load-grunt-tasks')(grunt);
    
    let port = grunt.option('port') || 8000;
	let root = grunt.option('root') || './static';

    if (!Array.isArray(root)) root = [root];

    // Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: port,
                    base: root,
                    livereload: true,
                    open: true,
                    useAvailablePort: true
                }
            }
        },
        watch: {
            js: {
                files: [ 'gruntfile.js', 'static/reveal/reveal.js' ]
            },
			html: {
				files: root.map(path => path + '/**/*.html')
			},
			markdown: {
				files: root.map(path => path + '/**/*.md')
			},
			options: {
				livereload: true
			}
        }
    });

    // Default task
    grunt.registerTask( 'default', [ 'serve' ] );
    
    // Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};