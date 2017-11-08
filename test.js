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
        a: 12
    }
};
const foo = {
    a: "fizz",
    c: 1
};

console.log(objDefaults(foo, defaultVals));
