module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./src/tsconfig.json", "./spec/src/tsconfig.json"],
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        es6: true,
        "shared-node-browser": true,
    },
    plugins: ["import", "@typescript-eslint", "prettier"],
    extends: [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "no-shadow": "error",
        "no-undef-init": "error",
        "no-import-assign": "error",
        "no-template-curly-in-string": "warn",
        "array-callback-return": "warn",
        "consistent-return": "warn",
        "no-implicit-coercion": "warn",
        "no-dupe-else-if": "warn",
        radix: "warn",

        "prettier/prettier": "warn",

        "import/no-unresolved": "off", // Covered by TS
        "import/named": "off", // Covered by TS
        "import/namespace": "off", // Covered by TS
        "import/no-absolute-path": "error",
        "import/no-self-import": "error",
        "import/no-default-export": "warn",
        "import/no-webpack-loader-syntax": "warn",
        "import/no-useless-path-segments": "warn",
        "import/no-mutable-exports": "warn",

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
                assertionStyle: "as",
            },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
            },
        ],
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["strictCamelCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
            },
            { selector: "variable", format: ["strictCamelCase", "UPPER_CASE"] },
            {
                selector: "property",
                format: ["strictCamelCase", "StrictPascalCase"],
            },
            {
                selector: "property",
                modifiers: ["static"],
                format: ["UPPER_CASE"],
            },
            { selector: "typeAlias", format: ["StrictPascalCase"] },
            {
                selector: "typeParameter",
                format: ["PascalCase"], // Allow "T", "TValue", "Value" and such
            },
            {
                selector: "interface",
                format: ["StrictPascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
            { selector: "class", format: ["StrictPascalCase"] },
            { selector: "enum", format: ["StrictPascalCase"] },
            { selector: "enumMember", format: ["UPPER_CASE"] },
        ],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                types: {
                    // Based on defaults excluding `object`
                    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
                    String: {
                        message: "Use string instead",
                        fixWith: "string",
                    },
                    Boolean: {
                        message: "Use boolean instead",
                        fixWith: "boolean",
                    },
                    Number: {
                        message: "Use number instead",
                        fixWith: "number",
                    },
                    Symbol: {
                        message: "Use symbol instead",
                        fixWith: "symbol",
                    },

                    Function: {
                        message: [
                            "The `Function` type accepts any function-like value.",
                            "It provides no type safety when calling the function, which can be a common source of bugs.",
                            "It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",
                            "If you are expecting the function to accept certain arguments, you should explicitly define the function shape.",
                        ].join("\n"),
                    },

                    // object typing
                    Object: {
                        message: [
                            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.',
                        ].join("\n"),
                    },
                    "{}": {
                        message: [
                            '`{}` actually means "any non-nullish value".',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.',
                        ].join("\n"),
                    },
                },
                extendDefaults: false,
            },
        ],
    },
};
