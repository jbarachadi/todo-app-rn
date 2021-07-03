module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            "@assets": "./src/assets",
            "@containers": ["./src/containers"],
            "@reducers": ["./src/reducers"],
            "@actions": ["./src/actions"],
            "@components": "./src/components",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "navigations": "./src/navigations",
            "@scenes": "./src/scenes",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@utils": "./src/utils"
          },
        }
      ]
    ]
  };
};
