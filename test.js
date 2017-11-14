"use strict";

const {
    randomNumber,
    randomItem
} = require("./dist/lightdash.common");

const foo = () => randomItem([1]);

console.log(foo());
console.log(foo());
console.log(foo());
console.log(foo());
console.log(foo());
