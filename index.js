var webpack = require('webpack');

function InlineEnviromentVariablesPlugin() {

  var allEnvVars = Object.keys(process.env).reduce(function(allVariables, variable) {
    allVariables['process.env.' + variable] = JSON.stringify(process.env[variable]);
    return allVariables;
  }, {});

  return new webpack.DefinePlugin(allEnvVars);
}

module.exports = InlineEnviromentVariablesPlugin;
