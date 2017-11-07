"use strict";

const {
    arrRemoveIndex,
    arrRemoveItem
} = require("./dist/lightdash.common");

const a = [0, 1, 2, 3, 4, 5];
const b = ["foo", "bar", "fizz"];

console.log(arrRemoveItem(b, "bar"));
