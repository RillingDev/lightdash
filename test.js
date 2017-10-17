"use strict";

const {
    isEmpty
} = require("./dist/lightdash.common");

console.log(isEmpty([1, 2, 3, 4, 5]));
console.log(isEmpty({}));
console.log(isEmpty([]));
console.log(isEmpty(""));
