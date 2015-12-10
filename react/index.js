const baseRules = require('../base-rules');
const reactRules = require('./react-rules');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(baseRules));

// manually merge in React rules
eslintrc.plugins = reactRules.plugins;
Object.keys(reactRules.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = reactRules.rules[ruleId];
});

module.exports = eslintrc;
