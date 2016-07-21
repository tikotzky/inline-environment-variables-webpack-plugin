inline-environment-variables-webpack-plugin
===========================================

Plugin which replaces all instances of `process.env.***` with the environment variable value.

Install
-------

```
npm install --save-dev inline-environment-variables-webpack-plugin
```

Usage
-----

### Inline all environment variables

If you would like to inline **all** environment variables then you can just instantiate the plugin without passing any config, as in the following example.


```javascript
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

var webpackConfig = {
  plugins: [
    new InlineEnviromentVariablesPlugin()
  ],
  // other webpack config ...
};
```

### Inline only selected environment variables

You can optionally pass a config to select which environment variables you would like to inline.

A config can be either a string an object or an array.

###### string config
A string config is defined like
```js
new InlineEnviromentVariablesPlugin('NODE_ENV')
```
The above config will inline `process.env.NODE_ENV` with the value of `process.env.NODE_ENV` at build time

###### object config
an object config is defined like
```js
new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' });
```

The above config will inline `process.env.NODE_ENV` with the value specified in the config. So in the above example it would change it to `'production'`;

###### array config

and array config is just a list of string and object configs. It would be defined like

```js
new InlineEnviromentVariablesPlugin([
  'SOME_VAR',
  'ANOTHER_ONE',
  {
    NODE_ENV: 'production',
    ONE_MORE: true
  }
]);
```

### Disable warnings

Pass in an object with `warnings` set to `false`.

`new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' }, { warnings: false })`
