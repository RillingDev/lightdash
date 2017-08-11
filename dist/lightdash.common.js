'use strict';

const _Object = Object;
const _Array = Array;
const _Number = Number;
const _String = String;

//is
const isSame = (a, b) => a === b;
//const isEqual = (a, b) => a===b;

const isInstanceOf = (val, target) => val instanceof target;
const isTypeOf = (val, type) => isSame(typeof val, type);

const isDefined = val => !isTypeOf(val, "undefined");
const isNil = val => !isDefined(val) || isSame(val, null);
const isEmpty = val => {
    if (isObjectLike(val)) {
        return isSame(_Object.values(val), 0);
    } else if (isArrayLike(val)) {
        return isSame(val.length, 0);
    } else {
        return false;
    }
};

const isObject = val => isInstanceOf(val, _Object);
const isObjectLike = val => !isNil(val) && isTypeOf(val, "object");
const isArray = val => _Array.isArray(val);
const isArrayLike = val => isObjectLike(val) && hasLength(val);
const isBoolean = val => isTypeOf(val, "boolean");
const isNumber = val => isTypeOf(val, "number");
const isString = val => isTypeOf(val, "string");
const isStringNumber = val => !isNaN(toNumber(val));

//has
const hasKey = (target, key) => key in target;
const hasLength = target => isDefined(target.length);

//to
const toNumber = str => _Number(str);
const toString = val => _String(val);

//clone
const cloneObject = obj => _Object.assign({}, obj);
//const cloneObjectDeep = arr => Array.from(arr);
const cloneArray = arr => _Array.from(arr);
//const cloneArrayDeep = arr => Array.from(arr);

//forEach
const forEach = (arr, fn) => arr.forEach(fn);
//const forEachDeep
const forEachEntry = (obj, fn) => {
    forEach(_Object.entries(obj), (entry, index) => {
        fn(entry[1], entry[0], index);
    });
};
//const forEachEntryDeep;

//arr

//obj
//const objMerge
//const objMergeDeep

const lightdash = {
    isSame,
    //isEqual,

    isInstanceOf,
    isTypeOf,

    isDefined,
    isNil,
    isEmpty,

    isObject,
    isObjectLike,
    isArray,
    isArrayLike,
    isBoolean,
    isNumber,
    isString,
    isStringNumber,

    hasKey,
    hasLength,

    toNumber,
    toString,

    cloneObject,
    //cloneObjectDeep,
    cloneArray,
    //cloneArray,

    forEach,
    //forEachDeep,
    forEachEntry,
    //forEachEntryDeep,
};

module.exports = lightdash;
