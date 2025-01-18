import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", "docs", "eslint.config.js", "jest.config.js"] },
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: ["./src/tsconfig.json", "./__tests__/tsconfig.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
