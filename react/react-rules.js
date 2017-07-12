module.exports = {
	'plugins': [
 	'react'                          // https://github.com/yannickcr/eslint-plugin-react
	],
	rules: {
		/**
		 * JSX style
		 */
		'react/display-name': 'off',         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/jsx-boolean-value': 'error',    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-quotes': 'off', // ['error', 'double'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
		'jsx-quotes': ['error', 'prefer-double'], // http://eslint.org/docs/rules/jsx-quotes
		'react/jsx-no-undef': 'error',         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
		'react/jsx-sort-props': 'off',       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-prop-types': 'off',  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
		'react/jsx-uses-react': 'error',       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
		'react/jsx-uses-vars': 'error',        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
		'react/no-multi-comp': 'off',        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-unknown-property': 'error',  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/prop-types': 'error',           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/react-in-jsx-scope': 'error',   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		'react/self-closing-comp': 'error',    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		// Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true,
      arrow: true,
    }],
		'react/sort-comp': ['error', {         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
			'order': [
				'lifecycle',
				'everything-else',
				'/^render.+$/',
				'render'
			]
		}]
	}
};
