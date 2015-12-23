inline-environment-variables-webpack-plugin
===========================================

Plugin which replaces all instances of `process.env.***` with the actual variable.

Install
-------

```
npm install --save-dev inline-environment-variables-webpack-plugin
```

Usage
-----


```javascript
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

var webpackConfig = {
  plugins: [
	new InlineEnviromentVariablesPlugin()
  ],
  // other webpack config ...
};
```