"use strict";

const {
    objDefaultsDeep
} = require("./dist/lightdash.common");

console.log(objDefaultsDeep({
    a: [1, 2],
    c: {
        f: 'x'
    }
}, {
    a: [1, 2, 3],
    b: 2,
    c: {
        f: 'y'
    }
}));
