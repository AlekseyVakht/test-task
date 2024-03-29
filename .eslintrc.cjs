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
		camelcase: 'off',
		'jsx-a11y/control-has-associated-label': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-else-return': 'off',
		'no-promise-executor-return': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'no-param-reassign': 'off',
		'react/button-has-type': 'off',
		'no-nested-ternary': 'off',
		'react/no-array-index-key': 'off',
		'react/prop-types': 'off',
		'no-prototype-builtins': 'off',
		'no-return-assign': 'off',
		'dot-notation': 'off',
	},
};
