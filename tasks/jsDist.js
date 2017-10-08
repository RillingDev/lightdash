"use strict";

const bundle = require("./lib/bundle");
const typescript_core = require("typescript");
const typescript = require("rollup-plugin-typescript");
const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify-es");
const targets = require("../package.json").constants.js.targets;

const options_babel = {
    presets: [
        ["env", {
            modules: false,
            targets,
        }]
    ],
    plugins: [
        "external-helpers"
    ]
};

bundle([{
    id: "es",
    ext: ".esm",
    name: "ES",
}, {
    id: "cjs",
    ext: ".common",
    name: "CommonJS",
}], [
    typescript({
        typescript: typescript_core
    })
]);

bundle([{
    id: "iife",
    ext: "",
    name: "IIFE",
}], [
    typescript({
        typescript: typescript_core
    }),
    //babel(options_babel),
]);

bundle([{
    id: "iife",
    ext: ".min",
    name: "IIFE:min",
}], [
    typescript({
        typescript: typescript_core
    }),
    //babel(options_babel),
    uglify()
]);
