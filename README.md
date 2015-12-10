# eslint-config-evenium

This package provides Evenium's .eslintrc as an extensible shared config.
Based on eslint-config-airbnb but less strict.

## Usage

### Without React Style

1. `npm install --save-dev eslint-config-evenium babel-eslint`
2. add `"extends": "evenium"` to your .eslintrc

### With React Style

1. `npm install --save-dev eslint-config-evenium babel-eslint eslint-plugin-react`
2. add `"extends": "evenium/react"` to your .eslintrc


See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
