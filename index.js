var modify = require("modify-babel-preset");

module.exports = modify("es2015", {
  "transform-es2015-modules-commonjs": { "loose": true },
  "transform-regenerator": { "async": false, "asyncGenerators": false }
});
