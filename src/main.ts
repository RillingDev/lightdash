"use strict";

type Class = Function;
type ForEachIterator = (val?: any, index?: number, arr?: Array<any>) => void;
type ForEachEntryIterator = (val?: any, key?: string, index?: number, obj?: Object) => void;

const _Object = Object;
const _Array = Array;
const _Number = Number;
const _String = String;





/**
 * Checks if two values reference the same object
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const isSame = (a: any, b: any): boolean => a === b;

/**
 * Deeply checks if the contents of two values are the same
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const isEqual = (a: any, b: any): boolean => {
    if (a === b) {
        return true;
    }

    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;

        forEachEntry(a, (val_a: any, key: string): void => {
            //Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    const val_b = b[key];

                    result = isEqual(val_a, val_b);
                } else {
                    result = false;
                }
            }
        });

        return result;
    }

    return false;
};

/**
 * Checks if the value is instanceof the target
 *
 * @param {*} val
 * @param {Class} target
 * @returns {boolean}
 */
const isInstanceOf = (val: any, target: Class): boolean => val instanceof target;

/**
 * Checks if the value is typeof the typestring
 *
 * @param {*} val
 * @param {string} type
 * @returns {boolean}
 */
const isTypeOf = (val: any, type: string): boolean => typeof val === type;

/**
 * Checks if a value is undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isUndefined = (val: any): boolean => isTypeOf(val, "undefined");

/**
 * Checks if a value is not undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isDefined = (val: any): boolean => !isUndefined(val);

/**
 * Checks if a value is either undefined or null
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNil = (val: any): boolean => isUndefined(val) || val === null;

/**
 * Checks if an array has no items, or an object has no keys
 *
 * @param {*} val
 * @returns {boolean}
 */
const isEmpty = (val: any): boolean => {
    if (isObjectLike(val)) {
        return (isArrayLike(val) ? val.length : objKeys(val).length) === 0;
    } else {
        return false;
    }
};

/**
 * Checks if a value is an array
 *
 * @param {*} val
 * @returns {boolean}
 */
const isArray = (val: any): boolean => _Array.isArray(val);

/**
 * Checks if a value is object-like and has a length property
 *
 * @param {*} val
 * @returns {boolean}
 */
const isArrayLike = (val: any): boolean => isObjectLike(val) && hasKey(val, "length");

/**
 * Checks if a value is an object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObject = (val: any): boolean => isInstanceOf(val, _Object);

/**
 * Checks if a value is not nil and has a typeof object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObjectLike = (val: any): boolean => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is a boolean
 *
 * @param {*} val
 * @returns {boolean}
 */
const isBoolean = (val: any): boolean => isTypeOf(val, "boolean");

/**
 * Checks if a value is a number
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNumber = (val: any): boolean => isTypeOf(val, "number");

/**
 * Checks if a value is a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isString = (val: any): boolean => isTypeOf(val, "string");

/**
 * Checks if a value is a number as a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isStringNumber = (val: any): boolean => !isNaN(_Number(val));





/**
 * Checks if a target has a certain key
 *
 * @param {Object} target
 * @param {string} key
 * @returns {boolean}
 */
const hasKey = (target: Object, key: string): boolean => key in target;





/**
 * Iterate over each value of an array
 *
 * @param {Array<any>} arr
 * @param {ForEachIterator} fn
 */
const forEach = (arr: Array<any>, fn: ForEachIterator): void => arr.forEach(fn);

/**
 * Deeply iterate over each value of an array
 *
 * @param {Array<any>} arr
 * @param {ForEachIterator} fn
 */
const forEachDeep = (arr: Array<any>, fn: ForEachIterator): void => {
    forEach(arr, (val, index) => {
        if (isArray(val)) {
            forEachDeep(val, fn);
        }

        fn(val, index, arr);
    });
};

/**
 * Iterate over each entry of an object
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
 */
const forEachEntry = (obj: Object, fn: ForEachEntryIterator): void => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index, obj);
    });
};

/**
 * Deeply iterate over each entry of an object
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
 */
const forEachEntryDeep = (obj: Object, fn: ForEachEntryIterator): void => {
    forEachEntry(obj, (val, key, index) => {
        if (isObject(val)) {
            forEachEntryDeep(val, fn);
        }

        fn(val, key, index, obj);
    });
};





/**
 * Creates a new array with the values of the input array
 *
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
const arrClone = (arr: Array<any>): Array<any> => _Array.from(arr);

/**
 * Deeply creates a new array with the values of the input array
 *
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
const arrCloneDeep = (arr: Array<any>): Array<any> => arrMapDeep(arrClone(arr), val => isArray(val) ? arrClone(val) : val);

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @param {Array<any>} arr
 * @param {ForEachIterator} fn
 * @returns {Array<any>}
 */
const arrMap = (arr: Array<any>, fn: ForEachIterator): Array<any> => arr.map(fn);

/**
 * Deeply maps the values of the input array with the iterator function and return the result
 *
 * @param {Array<any>} arr
 * @param {ForEachIterator} fn
 * @returns {Array<any>}
 */
const arrMapDeep = (arr: Array<any>, fn: ForEachIterator): Array<any> => arrMap(arr, (val, index, arr) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));





/**
 * Creates a new object with the entries of the input object
 *
 * @param {Object} obj
 * @returns {Object}
 */
const objClone = (obj: Object): Object => _Object.assign({}, obj);

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @param {Object} obj
 * @returns {Object}
 */
const objCloneDeep = (obj: Object): Object => objMapDeep(objClone(obj), val => isObject(val) ? objClone(val) : val);

/**
 * Maps each entry of an object and returns the result
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
 * @returns {Object}
 */
const objMap = (obj: Object, fn: ForEachEntryIterator): Object => {
    const objNew: { [key: string]: any } = objClone(obj);

    forEachEntry(objNew, (val, key, index) => {
        objNew[key] = fn(val, key, index, objNew);
    });

    return objNew;
};

/**
 * Deeply maps each entry of an object and returns the result
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
 * @returns {Object}
 */
const objMapDeep = (obj: Object, fn: ForEachEntryIterator): Object => objMap(obj, (val, key, index, objNew) => {
    if (isObject(val)) {
        return objMapDeep(val, fn);
    } else {
        return fn(val, key, index, objNew);
    }
});

/*
//const objMerge
//const objMergeDeep
//const objDefaults
//const objDefaultsDeep
*/

/**
 * Returns an array of the objects keys
 *
 * @param {Object} obj
 * @returns {Array<string>}
 */
const objKeys = (obj: Object): Array<string> => _Object.keys(obj);

/**
 * Returns an array of the objects values
 *
 * @param {Object} obj
 * @returns {Array<any>}
 */
const objValues = (obj: Object): Array<any> => _Object.values(obj);

/**
 * Returns an array of the objects entries
 *
 * @param {Object} obj
 * @returns {Array<[string, any]>}
 */
const objEntries = (obj: Object): Array<[string, any]> => _Object.entries(obj);





const lightdash = {
    isSame,
    isEqual,
    isInstanceOf,
    isTypeOf,
    isUndefined,
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

    forEach,
    forEachDeep,
    forEachEntry,
    forEachEntryDeep,

    arrClone,
    arrCloneDeep,
    arrMap,
    arrMapDeep,

    objClone,
    objCloneDeep,
    objMap,
    objMapDeep,
    objKeys,
    objValues,
    objEntries
};

export default lightdash;
