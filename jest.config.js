/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
		"<regex_match_files>": [
			"ts-jest",
			{
				tsconfig: "./__tests__/tsconfig.json",
				useESM: true,
			},
		],
	},
};
