import turboConfig from 'eslint-config-turbo/flat'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import onlyWarn from 'eslint-plugin-only-warn'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default defineConfig([
  ...turboConfig,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    rules: {
      'prettier/prettier': ['warn', {
        singleQuote: false,
        trailingComma: 'all',
        semi: false,
        printWidth: 100,
        tabWidth: 2,
      }],
    }
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],
    }
  },
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      'coverage/*',
      'build/*',
      'target/*',
      '.next/*',
      '.expo/*',
    ],
  },
])
