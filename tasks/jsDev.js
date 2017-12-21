"use strict";

const bundle = require("./lib/bundle");
const typescript_core = require("typescript");
const typescript = require("rollup-plugin-typescript2");

bundle(
    [
        {
            type: "es",
            ext: ".esm"
        },
        {
            type: "cjs",
            ext: ".common"
        },
        {
            type: "iife",
            ext: ""
        }
    ],
    [
        typescript({
            typescript: typescript_core
        })
    ]
);
