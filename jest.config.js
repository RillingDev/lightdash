/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/#use-esm-presets
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "./__tests__/tsconfig.json",
				useESM: true,
			},
		],
	},
};
