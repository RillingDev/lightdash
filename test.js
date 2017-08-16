"use strict";

const {
    isEqual
} = require("./dist/lightdash.common");

console.log(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], [1, 2, 3, 4, [5, 6, [7, 8, "foo"], 9]]));
