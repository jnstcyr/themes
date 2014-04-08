module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'js/src/dropdown.js',
					'js/src/collapse.js'
				],
				dest: 'js/build/scripts.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'js/build/scripts.min.js': ['js/build/scripts.js']
				}
			}
		},
		less:	{
			my_target: {
				files: {
					'css/build/layout.css': 'css/src/styles.less'
				}
			}
		},
		cssmin: {
			my_target: {
				expand: true,
				cwd: 'css/build/',
				src: ['*.css', '!*.min.css'],
				dest: 'css/build/',
				ext: '.min.css'
			}
		},
                watch: {
			jss: {
			    files: ['js/libs/*.js','js/src/jquery/*.js','js/src/*.js'],
			    tasks: ['concat', 'uglify']
			},
			css: {
				files: ['css/src/*'],
				tasks: ['less', 'cssmin']
			}
                },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['concat:dist']);
};