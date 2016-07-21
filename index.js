var webpack = require('webpack');
var compose = require('fn-compose');

// make sure replacements is an array
function ensureReplacementsIsArray(replacements) {
  if (replacements.constructor !== Array) {
    return [replacements];
  }

  return replacements;
}

// convert string configs of type ['NODE_ENV']
// to an object of [{NODE_ENV: process.env.NODE_ENV}]
function convertAllReplacementsToObject(replacements) {
  return replacements.map(function (replacement) {
    var config = {};
    if (typeof replacement === 'string') {
      config[replacement] = process.env[replacement];
      return config;
    }
    return replacement;
  });
}

// now that all configs are objects merge em into a single object
function mergeReplacements(replacements) {
  return Object.assign.apply(null, replacements);
}

// compose all above actions into a single function
function normalizeReplacements(replacements) {
  var finalReplacements = replacements;
  if (typeof replacements === 'undefined') {
    finalReplacements = [process.env];
  }

  return compose(
    mergeReplacements,
    convertAllReplacementsToObject,
    ensureReplacementsIsArray
  )(finalReplacements);
}

// warn if you are trying to inline a env var that is not defined
function warnOnMissingEnvVars(variable) {
  if (typeof process.env[variable] === 'undefined') {
    console.warn('You tried to inline "' + variable + '", but it is not defined.');
  }
}

function InlineEnviromentVariablesPlugin(replacements, userOptions) {
  var defaultOptions = { warnings: true };
  var normalizedConfig = normalizeReplacements(replacements);
  var options = Object.assign(defaultOptions, userOptions);

  var finalConfig = Object.keys(normalizedConfig).reduce(function (config, variable) {
    if (options.warnings) warnOnMissingEnvVars(variable);
    config['process.env.' + variable] = JSON.stringify(normalizedConfig[variable]);
    return config;
  }, {});

  return new webpack.DefinePlugin(finalConfig);
}

module.exports = InlineEnviromentVariablesPlugin;
