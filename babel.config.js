module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", { // for a bug https://gist.github.com/ChronSyn/ffca12630eb36c71465a1c5d7149a6ae
        "alias": {
          "@@": "./src",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ],
  };
};
