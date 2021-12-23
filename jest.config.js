/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
export default {
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	testPathIgnorePatterns: ["./node_modules/", "./__tests__/helper/"],
	// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
	globals: {
		"ts-jest": {
			useESM: true,
			tsconfig: "./__tests__/tsconfig.json",
		},
	},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
};
