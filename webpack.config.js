const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "kaz",
    projectName: "utility",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [
    '@kaz/utility',
    '@kaz/navbar',
    '@kaz/auth',    
    ]
    // modify the webpack config however you'd like to by adding to this object
  });
};
