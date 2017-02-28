module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ''
          },
          dist_css: {
            src: ['app/src/style/*.scss'],
            dest: 'app/dist/main.scss'
          },
          dist: {
            src: ['app/src/js/*.js'],
            dest: 'app/dist/script.main.js'
          }
        },
    uglify: {
      dist: {
        src: ['app/dist/script.main.js'],
        dest: 'app/dist/script.main.min.js'
      }
    },
    sass: {
      dist: {
     files: [{
       expand: true,
       cwd: 'app/dist',
       src: ['*.scss'],
       dest: 'app/dist/style',
       ext: '.css'
     }]
   }
 },
 watch: {

     sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['app/src/style/*.scss', 'app/src/js/*.js'],
      tasks: ['concat', 'uglify', 'sass'],
    }

 }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);


};
