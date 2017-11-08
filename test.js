"use strict";

const {
    objDefaults,
    objDefaultsDeep
} = require("./dist/lightdash.common");

const defaultVals = {
    a: "foo",
    b: "bar",
    c: [1, 3, 4],
    d: {
        a: 12,
        b: 2
    }
};
const foo = {
    a: "fizz",
    c: 1,
    d: {
        a: 23123
    }
};

console.log(objDefaultsDeep(foo, defaultVals));
