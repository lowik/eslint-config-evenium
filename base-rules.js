module.exports = {
	//parser: 'babel-eslint',   // https://github.com/babel/babel-eslint
	parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
	env: { // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
		'browser': true, // browser global variables
		'node': true, // Node.js global variables and Node.js-specific rules
	},
	rules: {
		/**
		 * Strict mode
		 */
		// babel inserts 'use strict'; for us
		'strict': ['error', 'never'],   // http://eslint.org/docs/rules/strict

		/**
		 * ES6
		 */
		'no-var': 'error',           // http://eslint.org/docs/rules/no-var
		'prefer-const': 'error',     // http://eslint.org/docs/rules/prefer-const
		'no-const-assign': 'error',  // http://eslint.org/docs/rules/no-const-assign

		/**
		 * Variables
		 */
		'no-shadow': 'error',                    // http://eslint.org/docs/rules/no-shadow
		'no-shadow-restricted-names': 'error',   // http://eslint.org/docs/rules/no-shadow-restricted-names
		'no-undef': 'error',                     // http://eslint.org/docs/rules/no-undef
		'no-unused-vars': ['warn', {            // http://eslint.org/docs/rules/no-unused-vars
			'vars': 'local',
			'args': 'none'
		}],
		//'no-use-before-define': 'error',         // http://eslint.org/docs/rules/no-use-before-define

		/**
		 * Possible errors
		 */
		'comma-dangle': 'off', // ['error', 'always-multiline'],   // http://eslint.org/docs/rules/comma-dangle
		'no-cond-assign': ['error', 'always'],                 // http://eslint.org/docs/rules/no-cond-assign
		'no-console': 'off',                                 // http://eslint.org/docs/rules/no-console
		'no-debugger': 'warn',                                // http://eslint.org/docs/rules/no-debugger
		'no-alert': 'off',                                   // http://eslint.org/docs/rules/no-alert
		'no-constant-condition': 'warn',                      // http://eslint.org/docs/rules/no-constant-condition
		'no-dupe-keys': 'error',                               // http://eslint.org/docs/rules/no-dupe-keys
		'no-duplicate-case': 'error',                          // http://eslint.org/docs/rules/no-duplicate-case
		'no-empty': 'off',                                   // http://eslint.org/docs/rules/no-empty
		'no-ex-assign': 'error',                               // http://eslint.org/docs/rules/no-ex-assign
		'no-extra-boolean-cast': 'off',                      // http://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-semi': 'error',                              // http://eslint.org/docs/rules/no-extra-semi
		'no-func-assign': 'error',                             // http://eslint.org/docs/rules/no-func-assign
		'no-inner-declarations': 'error',                      // http://eslint.org/docs/rules/no-inner-declarations
		'no-invalid-regexp': 'error',                          // http://eslint.org/docs/rules/no-invalid-regexp
		'no-irregular-whitespace': 'error',                    // http://eslint.org/docs/rules/no-irregular-whitespace
		'no-obj-calls': 'error',                               // http://eslint.org/docs/rules/no-obj-calls
		'no-sparse-arrays': 'error',                           // http://eslint.org/docs/rules/no-sparse-arrays
		'no-unreachable': 'error',                             // http://eslint.org/docs/rules/no-unreachable
		'use-isnan': 'error',                                  // http://eslint.org/docs/rules/use-isnan
		'block-scoped-var': 'error',                           // http://eslint.org/docs/rules/block-scoped-var

		/**
		 * Best practices
		 */
		'consistent-return': 'error',        // http://eslint.org/docs/rules/consistent-return
		'curly': ['error', 'multi-line'],    // http://eslint.org/docs/rules/curly
		'default-case': 'error',             // http://eslint.org/docs/rules/default-case
		'dot-notation': ['error', {          // http://eslint.org/docs/rules/dot-notation
			'allowKeywords': true
		}],
		'eqeqeq': 'error',                   // http://eslint.org/docs/rules/eqeqeq
		'guard-for-in': 'error',             // http://eslint.org/docs/rules/guard-for-in
		'no-caller': 'error',                // http://eslint.org/docs/rules/no-caller
		'no-else-return': 'off',           // http://eslint.org/docs/rules/no-else-return
		'no-eq-null': 'error',               // http://eslint.org/docs/rules/no-eq-null
		'no-eval': 'error',                  // http://eslint.org/docs/rules/no-eval
		'no-extend-native': 'error',         // http://eslint.org/docs/rules/no-extend-native
		'no-extra-bind': 'error',            // http://eslint.org/docs/rules/no-extra-bind
		'no-fallthrough': 'error',           // http://eslint.org/docs/rules/no-fallthrough
		'no-floating-decimal': 'error',      // http://eslint.org/docs/rules/no-floating-decimal
		'no-implied-eval': 'error',          // http://eslint.org/docs/rules/no-implied-eval
		'no-lone-blocks': 'error',           // http://eslint.org/docs/rules/no-lone-blocks
		'no-loop-func': 'error',             // http://eslint.org/docs/rules/no-loop-func
		'no-multi-str': 'error',             // http://eslint.org/docs/rules/no-multi-str
		'no-native-reassign': 'error',       // http://eslint.org/docs/rules/no-native-reassign
		'no-new': 'error',                   // http://eslint.org/docs/rules/no-new
		'no-new-func': 'error',              // http://eslint.org/docs/rules/no-new-func
		'no-new-wrappers': 'error',          // http://eslint.org/docs/rules/no-new-wrappers
		'no-octal': 'error',                 // http://eslint.org/docs/rules/no-octal
		'no-octal-escape': 'error',          // http://eslint.org/docs/rules/no-octal-escape
		'no-param-reassign': 'off',        // http://eslint.org/docs/rules/no-param-reassign
		'no-proto': 'error',                 // http://eslint.org/docs/rules/no-proto
		'no-redeclare': 'error',             // http://eslint.org/docs/rules/no-redeclare
		'no-return-assign': 'error',         // http://eslint.org/docs/rules/no-return-assign
		'no-script-url': 'error',            // http://eslint.org/docs/rules/no-script-url
		'no-self-compare': 'error',          // http://eslint.org/docs/rules/no-self-compare
		'no-sequences': 'error',             // http://eslint.org/docs/rules/no-sequences
		'no-throw-literal': 'error',         // http://eslint.org/docs/rules/no-throw-literal
		'no-with': 'error',                  // http://eslint.org/docs/rules/no-with
		'radix': 'error',                    // http://eslint.org/docs/rules/radix
		'vars-on-top': 'error',              // http://eslint.org/docs/rules/vars-on-top
		'wrap-iife': ['error', 'any'],       // http://eslint.org/docs/rules/wrap-iife
		'yoda': 'error',                     // http://eslint.org/docs/rules/yoda

		/**
		 * Style
		 */
		// http://eslint.org/docs/rules/indent
		indent: ['error', 'tab', {
			SwitchCase: 1,
			FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
		}],
		'brace-style': [                           // http://eslint.org/docs/rules/brace-style
			'error',
			'1tbs', {
				'allowSingleLine': true
			}
		],
		'quotes': [
			'error', 'single', 'avoid-escape'         // http://eslint.org/docs/rules/quotes
		],
		'camelcase': ['error', {                     // http://eslint.org/docs/rules/camelcase
			'properties': 'never'
		}],
		'comma-spacing': ['error', {                 // http://eslint.org/docs/rules/comma-spacing
			'before': false,
			'after': true
		}],
		'comma-style': ['error', 'last'],            // http://eslint.org/docs/rules/comma-style
		'eol-last': 'error',                         // http://eslint.org/docs/rules/eol-last
		'func-names': 'warn',                       // http://eslint.org/docs/rules/func-names
		'key-spacing': ['error', {                   // http://eslint.org/docs/rules/key-spacing
			'beforeColon': false,
			'afterColon': true
		}],
		'new-cap': ['error', {                       // http://eslint.org/docs/rules/new-cap
			'newIsCap': true,
			'capIsNew': false
		}],
		'no-multiple-empty-lines': 'off',          // http://eslint.org/docs/rules/no-multiple-empty-lines
		//'no-nested-ternary': 'error',                // http://eslint.org/docs/rules/no-nested-ternary
		'no-new-object': 'error',                    // http://eslint.org/docs/rules/no-new-object
		'no-spaced-func': 'error',                   // http://eslint.org/docs/rules/no-spaced-func
		'no-trailing-spaces': 'off',               // http://eslint.org/docs/rules/no-trailing-spaces
		'no-extra-parens': ['error', 'functions'],   // http://eslint.org/docs/rules/no-extra-parens
		'no-underscore-dangle': 'off',             // http://eslint.org/docs/rules/no-underscore-dangle
		'one-var': ['error', 'never'],               // http://eslint.org/docs/rules/one-var
		'padded-blocks': 'off',                    // http://eslint.org/docs/rules/padded-blocks
		'semi': ['error', 'always'],                 // http://eslint.org/docs/rules/semi
		'semi-spacing': ['error', {                  // http://eslint.org/docs/rules/semi-spacing
			'before': false,
			'after': true
		}],
		'keyword-spacing': 'error', // http://eslint.org/docs/rules/keyword-spacing
		'space-before-blocks': 'error',                      // http://eslint.org/docs/rules/space-before-blocks
		'space-before-function-paren': ['error', 'never'],   // http://eslint.org/docs/rules/space-before-function-paren
		'space-infix-ops': 'error',                          // http://eslint.org/docs/rules/space-infix-ops
		'spaced-comment': 'off',
	}
};
