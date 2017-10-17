"use strict";

const {
    forTimes
} = require("./dist/lightdash.common");


const a = [];

forTimes(1, 6, 1, val => a.push(val * 2))

console.log(a);
