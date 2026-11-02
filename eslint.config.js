import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores([
    '!node_modules/',
    'node_modules/*',
    'dist',
    'babel.config.js',
  ]),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', eslintConfigPrettier],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    rules: {
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
      eqeqeq: 'error',
    },
  },
]);
