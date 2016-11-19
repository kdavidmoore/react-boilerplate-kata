module.exports = {
	"parser": "babel-eslint",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
		}
	}
};
