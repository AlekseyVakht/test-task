module.exports = {
	root: true,
	env: { browser: true, es2023: true },
	extends: [
		'eslint:recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx'],
			},
		],
		'react/function-component-definition': 'off',
		'prefer-const': 'warn',
		'no-unused-vars': 'off',
		'no-shadow': 'off',
		'no-unused-expressions': 'off',
	},
};
