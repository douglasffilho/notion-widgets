module.exports = {
  parserOptions: {
    ecmaVersion: 2021, // Allows all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'simple-import-sort', 'sonarjs'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended', // Static AST checker for accessibility rules on JSX elements.
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:sonarjs/recommended-legacy', // SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.
    'plugin:react-hooks/recommended', // Enforces the Rules of Hooks
  ],
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
  },
  ignorePatterns: ['!.prettierrc.js'],
};
