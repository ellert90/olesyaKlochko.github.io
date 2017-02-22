module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ''
          },
          dist_css: {
            src: ['app/src/css/*.css'],
            dest: 'app/dist/style.main.css'
          },
          dist_js: {
            src: ['app/src/js/*.js'],
            dest: 'app/dist/script.main.js'
          }
        },
    uglify: {
      dist_js: {
        src: ['app/dist/script.main.js'],
        dest: 'app/dist/script.main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);


};
