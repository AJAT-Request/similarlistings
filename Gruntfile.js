module.exports = (grunt) => {
  grunt.initConfig({
    aws: grunt.file.readJSON('grunt-aws.json'),
    s3: {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        access: 'public-read',
        region: 'us-west-1',
      },
      dev: {
        upload: [{
          src: 'client/dist/bundle.js',
          dest: 'bundle.js',
          verify: true,
        }],
      },
    },
  });

  grunt.loadNpmTasks('grunt-s3');
};
