import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  prettier,
]);
