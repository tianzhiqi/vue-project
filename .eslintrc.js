module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "html"
    ],
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true,
      es6: true
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
