"use strict";

const bundle = require("./lib/bundle");
const typescript_core = require("typescript");
const typescript = require("rollup-plugin-typescript");

bundle([{
    id: "es",
    ext: ".esm",
    name: "ES",
}, {
    id: "cjs",
    ext: ".common",
    name: "CommonJS",
}, {
    id: "iife",
    ext: "",
    name: "IIFE",
}], [
    typescript({
        typescript: typescript_core
    })
]);
