import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginCypress from 'eslint-plugin-cypress'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    files: ['**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
    languageOptions: { ecmaVersion: 'latest' },
  },
  js.configs.recommended, // equivalent to 'eslint:recommended'
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
    extends: [pluginCypress.configs.recommended],
  },
  skipFormatting,
  {
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
})
