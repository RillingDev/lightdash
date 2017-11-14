"use strict";

const {
    arrCompact
} = require("./dist/lightdash.common");


console.log(arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""]));
