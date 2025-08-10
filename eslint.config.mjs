import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import reactPlugin from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'jsx-a11y/alt-text': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unknown-property': ['error', { ignore: [] }],
    },
  },
]

export default eslintConfig
