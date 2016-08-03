module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        files: ['src/**/*.js'],
        options: {
  	       jshintrc: '.jshintrc'
         },
      },
      concat: {
        options: {
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
        },
        dist: {
          src: ['src/**/*.js'],
          dest: 'build/build.js'
        }
      },
      uglify: {
        options: {
          banner: '/*<%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/'
        },
        build: {
          src: 'build/build.js',
          dest: 'build/build.min.js'
        }
      },
      wiredep: {
        task: {
          src: [ 'index.html' ],
          options: { }
          }
      },
	    connect: {
		      server: {
		          options: {
			             port: 9000,
                   base: '.',
                   keepalive: true,
                   open: {
                     target: 'http://localhost:9000'
                   }
              }
		      }
	  },
      watch: {
        files: ['<%= jshint.files %>', 'bower_components/*'],
        tasks: ['jshint', 'wiredep']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-wiredep');

   // Default task(s).
   grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'wiredep']);
};
