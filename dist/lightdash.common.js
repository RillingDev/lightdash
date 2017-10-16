'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checks if a value is an array
 *
 * @param {*} val
 * @returns {boolean}
 */
const isArray = (val) => Array.isArray(val);

/**
 * Checks if the value is typeof the typestring
 *
 * @param {*} val
 * @param {string} type
 * @returns {boolean}
 */
const isTypeOf = (val, type) => typeof val === type;

/**
 * Checks if a value is undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isUndefined = (val) => isTypeOf(val, "undefined");

/**
 * Checks if a value is not undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isDefined = (val) => !isUndefined(val);

/**
 * Checks if a target has a length key
 *
 * @param {any} target
 * @returns {boolean}
 */
const hasLength = (target) => isDefined(target.length);

/**
 * Checks if a value is either undefined or null
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNil = (val) => isUndefined(val) || val === null;

/**
 * Checks if a value is not nil and has a typeof object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is object-like and has a length property
 *
 * @param {*} val
 * @returns {boolean}
 */
const isArrayLike = (val) => isObjectLike(val) && hasLength(val);

/**
 * Checks if a value is a boolean
 *
 * @param {*} val
 * @returns {boolean}
 */
const isBoolean = (val) => isTypeOf(val, "boolean");

/**
 * Checks if the value is instanceof the target
 *
 * @param {*} val
 * @param {Class} target
 * @returns {boolean}
 */
const isInstanceOf = (val, target) => val instanceof target;

/**
 * Checks if a value is an date object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isDate = (val) => isInstanceOf(val, Date);

/**
 * Returns an array of the objects keys
 *
 * @param {Object} obj
 * @returns {string[]}
 */
const objKeys = (obj) => Object.keys(obj);

/**
 * Checks if an array has no items, or an object has no keys
 *
 * @param {*} val
 * @returns {boolean}
 */
const isEmpty = (val) => {
    if (hasLength(val)) {
        return val.length === 0;
    }
    else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    }
    else {
        return false;
    }
};

/**
 * Returns an array of the objects entries
 *
 * @param {Object} obj
 * @returns {Entry[]}
 */
const objEntries = (obj) => Object.entries(obj);

/**
 * Iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 */
const forEach = (arr, fn) => arr.forEach(fn);

/**
 * Iterate over each entry of an object
 *
 * @param {object} obj
 * @param {ForEachEntryIterator} fn
 */
const forEachEntry = (obj, fn) => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index, obj);
    });
};

/**
 * Checks if a target has a certain key
 *
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 */
const hasKey = (target, key) => isDefined(target[key]);

/**
 * Checks if a value is an object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObject = (val) => isInstanceOf(val, Object);

/**
 * Deeply checks if the contents of two values are the same
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;
        forEachEntry(a, (aVal, key) => {
            // Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    const bVal = b[key];
                    result = isEqual(aVal, bVal);
                }
                else {
                    result = false;
                }
            }
        });
        return result;
    }
    return false;
};

/**
 * Checks if a number is in the given range
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const isInRange = (val, min, max) => val >= min && val <= max;

/**
 * Checks if a value is an map
 *
 * @param {*} val
 * @returns {boolean}
 */
const isMap = (val) => isInstanceOf(val, Map);

/**
 * Checks if a value is a number
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNumber = (val) => isTypeOf(val, "number");

/**
 * Checks if two values are the same
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const isSame = (a, b) => a === b;

/**
 * Checks if a value is an map
 *
 * @param {*} val
 * @returns {boolean}
 */
const isSet = (val) => isInstanceOf(val, Set);

/**
 * Checks if a value is a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isString = (val) => isTypeOf(val, "string");

/**
 * Checks if a value is a number as a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isStringNumber = (val) => !isNaN(Number(val));

/**
 * Checks if a value is a symbol
 *
 * @param {*} val
 * @returns {boolean}
 */
const isSymbol = (val) => isTypeOf(val, "symbol");

/**
 * Accesses a target by a path of keys. If the path doesn't exist, null is returned
 *
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 */
const getPath = (target, path) => {
    let targetCurrent = target;
    let index = 0;
    while (isDefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];
        if (hasKey(targetCurrent, keyCurrent)) {
            targetCurrent = targetCurrent[keyCurrent];
            index++;
        }
        else {
            return null;
        }
    }
    return targetCurrent;
};

/**
 * Checks if a target has a path of keys
 *
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 */
const hasPath = (target, path) => isNil(getPath(target, path));

/**
 * Returns length property of target
 *
 * @param {any} target
 * @returns {number}
 */
const getLength = (target) => target.length;

/**
 * Clamps a number in a range
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const numberClamp = (val, min, max) => {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    else {
        return val;
    }
};

/**
 * Return a random float number in the range
 *
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 */
const numberRandomFloat = (min = 0, max = 1) => min + Math.random() * (max - min);

/**
 * Return a random integer number in the range
 *
 * @param {number} [min=0]
 * @param {number} [max=100]
 * @returns {number}
 */
const numberRandomInt = (min = 0, max = 1) => Math.floor(numberRandomFloat(min, max) /
    (max - min) * (max - min + 1));

/**
 * Deeply iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 */
const forEachDeep = (arr, fn) => forEach(arr, (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

/**
 * Deeply iterate over each entry of an object
 *
 * @param {object} obj
 * @param {ForEachEntryIterator} fn
 */
const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (val, key, index) => isObject(val) ? forEachEntryDeep(val, fn) : fn(val, key, index, obj));

/**
 * wrapper around a simple for-loop
 *
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {ForTimesIterator} fn
 */
const forTimes = (start, max, increase, fn) => {
    for (let index = start; index < max; index += increase) {
        fn(index);
    }
};

/**
 * Chunks an array
 *
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 */
const arrChunk = (arr, chunk) => {
    const result = [];
    if (chunk <= 0) {
        throw new Error("Cannot create chunks smaller than 1");
    }
    forTimes(0, arr.length, chunk, (index) => {
        result.push(arr.slice(index, index + chunk));
    });
    return result;
};

/**
 * Creates a new array with the values of the input array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrClone = (arr) => Array.from(arr);

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 * @returns {any[]}
 */
const arrMap = (arr, fn) => arr.map(fn);

/**
 * Deeply maps the values of the input array with the iterator function and return the result
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 * @returns {any[]}
 */
const arrMapDeep = (arr, fn) => arrMap(arr, (val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

/**
 * Deeply creates a new array with the values of the input array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrCloneDeep = (arr) => arrMapDeep(arrClone(arr), (val) => isArray(val) ? arrClone(val) : val);

/**
 * Filters every empty, undefined or null value from an array out
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrCompact = (arr) => arr.filter((val) => !isNil(val) && !isEmpty(val));

const arrCount = (arr) => {
    const result = new Map();
    forEach(arr, (val) => {
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });
    // tslint:disable-next-line
    return arrClone(result);
};

/**
 * Returns an array of all elements that only exist in one of every given arrays
 *
 * @param {...any[]} arrs
 * @returns {any[]}
 */
const arrDifference = (...arrs) => arrCount([].concat(...arrs))
    .filter((pair) => pair[1] === 1)
    .map((pair) => pair[0]);

/**
 * Recursively flattens an array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrFlattenDeep = (arr) => {
    const result = [];
    forEach(arr, (val) => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        }
        else {
            result.push(val);
        }
    });
    return result;
};

/**
 * Returns an array of all elements that exist in all given arrays
 *
 * @param {...any[]} arrs
 * @returns {any[]}
 */
const arrIntersection = (...arrs) => arrCount([].concat(...arrs))
    .filter((pair) => pair[1] === arrs.length)
    .map((pair) => pair[0]);

/**
 * Returns a new array with every n-th item
 *
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 */
const arrStep = (arr, step) => arr.filter((val, index) => index % step === 0);

// tslint:disable
/**
 * Returns an array of all unique elements in an array
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrUniq = (arr) => arrClone(new Set(arr));

/**
 * Creates a new object with the entries of the input object
 *
 * @param {object} obj
 * @returns {object}
 */
const objClone = (obj) => Object.assign({}, obj);

/**
 * Maps each entry of an object and returns the result
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
 * @returns {Object}
 */
const objMap = (obj, fn) => {
    const objNew = objClone(obj);
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
const objMapDeep = (obj, fn) => objMap(obj, (val, key, index, objNew) => {
    if (isObject(val)) {
        return objMapDeep(val, fn);
    }
    else {
        return fn(val, key, index, objNew);
    }
});

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @param {Object} obj
 * @returns {Object}
 */
const objCloneDeep = (obj) => objMapDeep(objClone(obj), (val) => isObject(val) ? objClone(val) : val);

/**
 * Returns an array of the objects values
 *
 * @param {Object} obj
 * @returns {any[]}
 */
const objValues = (obj) => Object.values(obj);

/**
 * Creates a Map from an Object
 * @param {Object} obj
 * @returns {Map}
 */
const mapFromObject = (obj) => new Map(objEntries(obj));

exports.isSame = isSame;
exports.isEqual = isEqual;
exports.isInstanceOf = isInstanceOf;
exports.isTypeOf = isTypeOf;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isNil = isNil;
exports.isBoolean = isBoolean;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isStringNumber = isStringNumber;
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isDate = isDate;
exports.isEmpty = isEmpty;
exports.isInRange = isInRange;
exports.hasKey = hasKey;
exports.hasLength = hasLength;
exports.hasPath = hasPath;
exports.getLength = getLength;
exports.getPath = getPath;
exports.numberClamp = numberClamp;
exports.numberRandomFloat = numberRandomFloat;
exports.numberRandomInt = numberRandomInt;
exports.forTimes = forTimes;
exports.forEach = forEach;
exports.forEachDeep = forEachDeep;
exports.forEachEntry = forEachEntry;
exports.forEachEntryDeep = forEachEntryDeep;
exports.arrClone = arrClone;
exports.arrCloneDeep = arrCloneDeep;
exports.arrMap = arrMap;
exports.arrMapDeep = arrMapDeep;
exports.arrFlattenDeep = arrFlattenDeep;
exports.arrCompact = arrCompact;
exports.arrChunk = arrChunk;
exports.arrStep = arrStep;
exports.arrCount = arrCount;
exports.arrDifference = arrDifference;
exports.arrIntersection = arrIntersection;
exports.arrUniq = arrUniq;
exports.objClone = objClone;
exports.objCloneDeep = objCloneDeep;
exports.objMap = objMap;
exports.objMapDeep = objMapDeep;
exports.objKeys = objKeys;
exports.objValues = objValues;
exports.objEntries = objEntries;
exports.mapFromObject = mapFromObject;
