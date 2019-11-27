module.exports = {
	extends: [
	  '../base-rules',
	  './react-rules',
	  './hooks-rules',
	].map(require.resolve),
  rules: {},
};
