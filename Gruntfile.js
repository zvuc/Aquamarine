module.exports = function(grunt) {
  'use strict';
  
  require("load-grunt-tasks")(grunt, {
    pattern: ['grunt-*']
  });
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Meta
    meta: {
      banner: '/* \n' +
              ' * IRCCloud Aquamarine Theme - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
              ' * by Hansol Kim (zvuc) (http://xenosium.com) \n' +
              ' * github repo: https://github.com/zvuc/Aquamarine \n' +
              ' * \n' +
              ' * created on 2014-08-26 \n' +
              ' * last updated <%= grunt.template.today("yyyy-mm-dd") %> \n' +
              ' * \n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; <%= pkg.license %> License \n' +
              ' */\n'
    },

    // LESS
    less: {
      main: {
        files: {
          "src/source-processed.css": "src/source.less"
        }
      },
      frame: {
        files: {
          "aquamarine.css": "src/frame.less"
        }
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: {
        browser: ["last 3 versions", "ie 10"]
      },
      build: {
        expand: true,
        cwd: "src",
        src: ["source-processed.css"],
        dest: "src"
      }
    },

    // clean
    clean: {
      main: ["src/source-processed.css"],
    },

    // Banner
    usebanner: {
      options: {
        position: 'top',
        banner: '<%= meta.banner %>'
      },
      files: {
        src: [
            "src/source-processed.css",
          ]
      }
    },
    
    // watch
    watch: {
      less: {
        files: ['src/*'],
        tasks: ['default']
      }
    }

  });
  
  grunt.registerTask('default', ['less:main', 'autoprefixer', 'usebanner', 'less:frame', 'clean']);
  grunt.registerTask('dev', ['watch']);
  
}