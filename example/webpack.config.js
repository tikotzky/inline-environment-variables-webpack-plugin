// var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('..');

module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'index.js',
  },
  plugins: [
    new InlineEnviromentVariablesPlugin(),
  ],
};
