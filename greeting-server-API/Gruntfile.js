module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    jasmine_node: {
      all: ['spec/']
    },

    mocha_casperjs: {
      files: {
        src: ['test/**/*']
      }
    }

  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-jasmine-node');
  
  grunt.registerTask('mocha', ['mocha_casperjs']);
  grunt.registerTask('jasmine', ['jasmine_node']);

};