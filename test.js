"use strict";

const {
    objDefaultsDeep
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



console.log(objDefaultsDeep(obj, objDefault));
