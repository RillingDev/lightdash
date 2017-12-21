"use strict";

const bundle = require("./lib/bundle");
const typescript_core = require("typescript");
const typescript = require("rollup-plugin-typescript2");
const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify-es");
const targets = require("../package.json").constants.js.targets;

const options_babel = {
    presets: [
        [
            "env",
            {
                modules: false,
                targets
            }
        ]
    ],
    plugins: ["external-helpers"]
};

bundle(
    [
        {
            type: "es",
            ext: ".esm"
        },
        {
            type: "cjs",
            ext: ".common"
        }
    ],
    [
        typescript({
            typescript: typescript_core
        })
    ]
);

bundle(
    [
        {
            type: "iife",
            ext: ""
        }
    ],
    [
        typescript({
            typescript: typescript_core
        }),
        babel(options_babel)
    ]
);

bundle(
    [
        {
            type: "iife",
            ext: ".min"
        }
    ],
    [
        typescript({
            typescript: typescript_core
        }),
        babel(options_babel),
        uglify()
    ]
);
