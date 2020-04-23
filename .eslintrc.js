module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", 
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": 0,
    // Fixes the issue with missing file extensions. https://github.com/benmosher/eslint-plugin-import/pull/1637
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  // Fixes the issue with being unable to resolve path to module https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  }
}
