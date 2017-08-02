// var InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
var InlineEnvironmentVariablesPlugin = require('..');

module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'index.js',
  },
  plugins: [
    new InlineEnvironmentVariablesPlugin(),
  ],
};
