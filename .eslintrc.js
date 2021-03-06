module.exports = {
    parser: "babel-eslint",
    "extends": "airbnb-base",
    "plugins": [
        "html"
    ],
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true
    },
    // check if imports actually resolve
    'settings': {
      'import/resolver': {
        'webpack': {
          'config': 'webpack.config.js'
        }
      }
    },
    "rules": {
      // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
          'js': 'never',
          'vue': 'never'
        }],
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "linebreak-style": [
            "error",
            "windows"
        ],
    }
};
