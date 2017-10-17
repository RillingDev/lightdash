"use strict";

const {
    arrDifference,
    arrUniq,
    arrIntersection
} = require("./dist/lightdash.common");


console.log(arrDifference([2, 1], [2, 3]))
console.log(arrUniq([1, 2, 3], [0, 0, 0], [1, 2, 0]))
console.log(arrIntersection([2, 1], [2, 3]))
