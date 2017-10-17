/**
 * Checks if a value is an array
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArray([]);
 * isArray([1, 2, 3]);
 *
 * @example
 * // returns false
 * isArray({});
 */
const isArray = (val) => Array.isArray(val);

/**
 * Checks if the value has a certain typestring
 *
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * //returns true
 * isTypeOf({},"object")
 * isTypeOf([],"object")
 * isTypeOf("foo","string")
 *
 * @example
 * //returns false
 * isTypeOf("foo","number")
 */
const isTypeOf = (val, type) => typeof val === type;

/**
 * Checks if a value is undefined
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(a.b)
 * isUndefined(undefined)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(1)
 * isUndefined(a)
 */
const isUndefined = (val) => isTypeOf(val, "undefined");

/**
 * Checks if a value is not undefined
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * const a = {};
 *
 * isDefined(1)
 * isDefined(a)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isDefined(a.b)
 * isDefined(undefined)
 */
const isDefined = (val) => !isUndefined(val);

/**
 * Checks if a target has a length key
 *
 * @since 2.0.0
 * @param {any} target
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 * isArrayLike("foo")
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike(1)
 */
const hasLength = (target) => isDefined(target.length);

/**
 * Checks if a value is either undefined or null
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNil(null)
 * isNil(undefined)
 *
 * @example
 * //returns false
 * isNil(0)
 * isNil({})
 */
const isNil = (val) => isUndefined(val) || val === null;

/**
 * Checks if a value is not nil and has a typeof object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike({})
 * isObjectLike([])
 *
 * @example
 * //returns false
 * isObjectLike(null)
 * isObjectLike(1)
 */
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is object-like and has a length property
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike("foo")
 * isArrayLike(1)
 */
const isArrayLike = (val) => isObjectLike(val) && hasLength(val);

/**
 * Checks if a value is a boolean
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isBoolean(true)
 * isBoolean(false)
 *
 * @example
 * //returns false
 * isBoolean(0)
 * isBoolean(null)
 * isBoolean("")
 */
const isBoolean = (val) => isTypeOf(val, "boolean");

/**
 * Checks if the value is instanceof the target
 *
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * //returns true
 * isInstanceOf({},Object)
 * isInstanceOf([],Object)
 * isInstanceOf([],Array)
 *
 * @example
 * //returns false
 * isInstanceOf({},Array)
 * isInstanceOf([],Map)
 */
const isInstanceOf = (val, target) => val instanceof target;

/**
 * Checks if a value is an date object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isDate(new Date())
 * isDate(new Date("2017/1/1"))
 *
 * @example
 * //returns false
 * isDate(Date.now())
 * isDate("2017/1/1")
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
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isEmpty([])
 * isEmpty({})
 * isEmpty("")
 *
 * @example
 * //returns false
 * isEmpty("foo")
 * isEmpty([1,2])
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
 * @since 1.0.0
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([1,2,3],"0")
 * isArrayLike({length:0},"length")
 * isArrayLike("foo","replace")
 *
 * @example
 * //returns false
 * isArrayLike({},"foo")
 * isArrayLike(null,"foo")
 * isArrayLike(1,"foo")
 */
const hasKey = (target, key) => isDefined(target[key]);

/**
 * Checks if a value is an object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObject({})
 * isObject([])
 *
 * @example
 * //returns false
 * isObject(1)
 */
const isObject = (val) => isInstanceOf(val, Object);

/**
 * Deep checks if the contents of two values are the same
 *
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * isEqual(1,1)
 * isEqual({},{})
 * isEqual([1,2],[1,2])
 * isEqual([1,2,[3,4]],[1,2,[3,4]])
 *
 * @example
 * //returns false
 * isEqual([1,2,3],[1])
 * isEqual([1,2,[3]],[1,2,[4]])
 */
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;
        // tslint:disable-next-line
        forEachEntry(a, (val_a, key) => {
            // Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    // tslint:disable-next-line
                    const val_b = b[key];
                    result = isEqual(val_a, val_b);
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
 * Checks if a value is a map
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isMap(new Map())
 *
 * @example
 * //returns false
 * isMap([[1,2]])
 */
const isMap = (val) => isInstanceOf(val, Map);

/**
 * Checks if a value is a number
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNumber(1)
 * isNumber(2.34)
 *
 * @example
 * //returns false
 * isNumber(null)
 */
const isNumber = (val) => isTypeOf(val, "number");

/**
 * Checks if a value is a primitive
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike(1)
 * isObjectLike(null)
 *
 * @example
 * //returns false
 * isObjectLike({})
 * isObjectLike([])
 */
const isPrimitive = (val) => !isObjectLike(val);

/**
 * Checks if two values are the same
 *
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * const a = [];
 *
 * isSame(1,1)
 * isSame("foo","foo")
 * isSame(a,a)
 *
 * @example
 * //returns false
 * isSame({},{})
 * isSame([],[])
 */
const isSame = (a, b) => a === b;

/**
 * Checks if a value is a set
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSet(new Set())
 *
 * @example
 * //returns false
 * isSet([1,2])
 */
const isSet = (val) => isInstanceOf(val, Set);

/**
 * Checks if a value is a string
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isString("foo")
 *
 * @example
 * //returns false
 * isString(1)
 */
const isString = (val) => isTypeOf(val, "string");

/**
 * Checks if a value is a number as a string
 *
 * @since 1.0.0
 * @param {string} val
 * @returns {boolean}
 * @example
 * //returns true
 * isStringNumber("123")
 * isStringNumber("0b010")
 *
 * @example
 * //returns false
 * isStringNumber("foo")
 */
const isStringNumber = (val) => !isNaN(Number(val));

/**
 * Checks if a value is a symbol
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSymbol(Symbol())
 *
 * @example
 * //returns false
 * isStringNumber("foo")
 */
const isSymbol = (val) => isTypeOf(val, "symbol");

/**
 * Accesses a target by a path of keys. If the path doesn't exist, null is returned
 *
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns 1
 * getLength({a:1},["a"]);
 *
 * @example
 * // returns 6
 * getLength([4,6,8],["1"]);
 *
 * @example
 * // returns 10
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
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
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns true
 * getLength({a:1},["a"]);
 * getLength([4,6,8],["1"]);
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
 *
 * @example
 * // returns false
 * getLength({a:1},["c"]);
 * getLength([4,6,8],["8"]);
 * getLength({a:{b:2,c:[10,20]}},["f","x","231","21"]);
 * getLength(1,["foo"]);
 */
const hasPath = (target, path) => isNil(getPath(target, path));

/**
 * Returns length property of target
 *
 * @since 1.0.0
 * @param {any} target
 * @returns {number}
 * @example
 * // returns 2
 * getLength([1,2]);
 *
 * @example
 * // returns 3
 * getLength("foo");
 *
 * @example
 * // returns 10
 * getLength({length:10});
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
 * Checks if a number is in the given range
 *
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const numberInRange = (val, min, max) => val >= min && val <= max;

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
    if (chunk < 1) {
        return [];
    }
    else {
        const result = [];
        forTimes(0, arr.length, chunk, (index) => {
            result.push(arr.slice(index, index + chunk));
        });
        return result;
    }
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

/**
 * Counts how many times an element appears in an array
 *
 * @param {any[]} arr
 * @returns {ElementCounted[]}
 */
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

export { isSame, isEqual, isInstanceOf, isTypeOf, isUndefined, isDefined, isNil, isObject, isObjectLike, isArray, isArrayLike, isMap, isSet, isDate, isEmpty, isPrimitive, isNumber, isString, isStringNumber, isBoolean, isSymbol, hasKey, hasLength, hasPath, getLength, getPath, numberInRange, numberClamp, numberRandomFloat, numberRandomInt, forTimes, forEach, forEachDeep, forEachEntry, forEachEntryDeep, arrClone, arrCloneDeep, arrMap, arrMapDeep, arrFlattenDeep, arrCompact, arrChunk, arrStep, arrCount, arrDifference, arrIntersection, arrUniq, objClone, objCloneDeep, objMap, objMapDeep, objKeys, objValues, objEntries, mapFromObject };
