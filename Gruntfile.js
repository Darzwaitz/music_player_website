module.exports = function(grunt){

    grunt.initConfig({
        concat: {
          js: {
            src: ['scripts/jscript.js','jquery-3.3.1.js'],
            dest: 'build/js/concat/scripts.js',
          },
          css: {
            src: ['css/style.css','css/playerCtrls.css','css/mediaQueries.css'],
            dest: 'build/css/concat/styles.css',
          },
        },
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: [{
             
              src: 'build/js/concat/scripts.js',
              dest: 'scripts/scripts.min.js',

            }]
          },
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'build/css/concat',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          },
        },
        watch: {
          js: {
            files: ['js/**/*.js'],
            tasks: ['concat','uglify'],
          },
          css: {
            files: ['css/**/*.css'],
            tasks: ['concat','cssmin'],
          },

      },
        

      });
      grunt.loadNpmTasks('grunt-contrib-concat');//concat JS & Css
      grunt.loadNpmTasks('grunt-contrib-cssmin');//minify Css
      grunt.loadNpmTasks('grunt-contrib-uglify-es');//minify JS
      grunt.loadNpmTasks('grunt-contrib-watch');//watch for changes on all files
      grunt.registerTask('default', ['concat','uglify','cssmin', 'watch']);//run all as default
      // grunt.registerTask('default', ['concat','watch']);
      
};