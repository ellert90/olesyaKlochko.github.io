module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ''
          },
          dist_css: {
            src: ['src/css/*.css'],
            dest: 'dist/style.main.css'
          },
          dist_js: {
            src: ['src/js/*.js'],
            dest: 'dist/script.main.js'
          }
        },
    uglify: {
      dist_js: {
        src: ['dist/script.main.js'],
        dest: 'dist/script.main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);


};
