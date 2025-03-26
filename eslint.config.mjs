import js from '@eslint/js';
import jsx from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      }
    },
    plugins: {
      'jsx-a11y': jsx,
      react,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      sonarjs,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
        destructuredArrayIgnorePattern: '^_'
      }],
      'react/jsx-uses-vars': 'error', // This is key for JSX usage detection
      // ... rest of your existing rules
    }
  },
  {
    // Preserve disable directives
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: false
    }
  },
  prettier,
  {
    ignores: ['!.prettierrc.js', 'node_modules', '.next', '.husky'],
  },
];
