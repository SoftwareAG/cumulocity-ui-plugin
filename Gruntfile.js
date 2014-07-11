module.exports = function (grunt) {
  'use strict';

  var DEFAULT_HOST = 'integration.cumulocity.com',
    DEFAULT_PROTOCOL = 'http',
    host = DEFAULT_HOST,
    protocol = DEFAULT_PROTOCOL;

  if (grunt.option('host')) {
    host = grunt.option('host');
    if (host === 'developer') {
      host = 'developer.cumulocity.com';
    }

    if (host === 'developer.cumulocity.com') {
      protocol = 'https';
    }
  }

  grunt.config('cumulocity.host', host);
  grunt.config('cumulocity.protocol', protocol);

  grunt.config('paths.root', './');
  grunt.config('paths.temp', '.tmp');
  grunt.config('paths.build', 'build');
  grunt.config('paths.plugins', 'plugins');
  grunt.config('paths.bower', 'bower_components');

  //Load cumulocity grunt tasks
  grunt.loadNpmTasks('grunt-cumulocity-ui-tasks');

  grunt.registerTask('server', [
    'readApplication',
    'readPlugins',
    'connect:plugin',
    'watch'
  ]);

  grunt.registerTask('build', [
    'pluginBuildAll'
  ]);

};