module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    parserOptions: {
      sourceType: 'module'
    },
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "linebreak-style": [
            "error",
            "windows"
        ],
    }
};
