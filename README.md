# babel-preset-es2015-mod [![Dependency Status](https://david-dm.org/orlin/babel-preset-es2015-mod.svg)](https://david-dm.org/orlin/babel-preset-es2015-mod)

> Babel preset for all es2015 plugins, modified to enable `--loose es6.modules`.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-mod
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-mod"]
}
```

### Via CLI

```sh
$ babel script.js --preset es2015-mod
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-mod"]
});
```
