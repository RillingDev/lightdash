"use strict";

const {
    arrChunk
} = require("./dist/lightdash.common");


const objDefault = {
    a: 1,
    b: 2,
    c: 3
};

const obj = {
    a: 1,
    c: 5
};



console.log(arrChunk([1, 2, 3, 4, 5, 6], 2));
