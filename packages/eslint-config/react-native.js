import { defineConfig } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import reactNativePlugin from 'eslint-plugin-react-native'
import testingLibraryPlugin from 'eslint-plugin-testing-library'
import base from './base.js'

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  ...base,
  expoConfig,
  {
    plugins: {
      'react-native': reactNativePlugin,
    },
    rules: {
      'react-native/no-unused-styles': 'warn',
      'react-native/sort-styles': [
        'warn',
        'asc',
        { ignoreClassNames: false, ignoreStyleProperties: false },
      ],
    },
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    }
  },
  {
    // Target all test files
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibraryPlugin,
    },
    rules: {
      // Enforce testing library best practices
      'testing-library/await-async-queries': 'warn',
      'testing-library/no-await-sync-queries': 'warn',
      'testing-library/prefer-screen-queries': 'warn',
      'testing-library/prefer-presence-queries': 'warn',
    },
  },
])
