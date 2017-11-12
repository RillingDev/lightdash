"use strict";

const {
    objDefaults,
    objDefaultsDeep
} = require("./dist/lightdash.common");

const defaultVals = {
    name: `command${1}`,
    fn: null,
    alias: [],
    args: [],
    sub: null,
    check: () => 1
};
const foo = {
    fn: () => "bar",
    alias: ["fizz"],
};

console.log(objDefaultsDeep(foo, defaultVals));
