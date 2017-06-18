module.exports = function (wallaby) {
    return {
      files: [
        'support/tester.js'
      ],

      tests: [
        'topics/**/*.js'
      ],

      testFramework: 'qunit'
    };
  };