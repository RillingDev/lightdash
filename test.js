"use strict";

const {
    isObjectPlain,
    objClone,
    objCloneDeep
} = require("./dist/lightdash.common");

const defaultVals = {
    name: `command${1}`,
    fn: null,
    alias: [],
    args: [],
    sub: null
};
const foo = {
    fn: () => "bar",
    alias: ["fizz"],
};

console.log(isObjectPlain(foo));
console.log(isObjectPlain([]));
console.log(isObjectPlain(() => {}));
