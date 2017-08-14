const _Object = Object;
const _Array = Array;
const _Number = Number;
const _String = String;

//is
const isSame = (a, b) => a === b;
const isEqual = (a, b) => {
    if (isSame(a, b)) {
        return true;
    }

    if (isObject(a)) {
        if (objKeys(a).length !== objKeys(b).length) {
            return false;
        } else {
            let result = true;

            forEachEntry(a, (val_a, key) => {
                if (hasKey(b, key)) {
                    const val_b = b[key];

                    result = isEqual(val_a, val_b);
                } else {
                    result = false;
                }
            });

            return result;
        }
    }

    return false;
};

const isInstanceOf = (val, target) => val instanceof target;
const isTypeOf = (val, type) => isSame(typeof val, type);

const isDefined = val => !isTypeOf(val, "undefined");
const isNil = val => !isDefined(val) || isSame(val, null);
const isEmpty = val => {
    if (isArrayLike(val)) {
        return isSame(val.length, 0);
    } else if (isObjectLike(val)) {
        return isSame(objKeys(val).length, 0);
    } else {
        return false;
    }
};

const isArray = val => _Array.isArray(val);
const isArrayLike = val => isObjectLike(val) && hasLength(val);
const isObject = val => isInstanceOf(val, _Object);
const isObjectLike = val => !isNil(val) && isTypeOf(val, "object");
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
const cloneArray = arr => _Array.from(arr);
//const cloneArrayDeep = arr => cloneArray(forEachDeep(arr,val=>isArray(val) ? cloneArray(val) : val));
const cloneObject = obj => _Object.assign({}, obj);
//const cloneObjectDeep = obj => cloneObject(forEachEntryDeep(arr,val=>isObject(val) ? cloneArray(val) : val));

//forEach
const forEach = (arr, fn) => arr.forEach(fn);
const forEachDeep = (arr, fn) => {
    forEach(arr, (val, index) => {
        if (isArray(val)) {
            forEachDeep(val, fn);
        }

        fn(val, index);
    });
};

const forEachEntry = (obj, fn) => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index);
    });
};
const forEachEntryDeep = (obj, fn) => {
    forEachEntry(obj, (val, key, index) => {
        if (isObject(val)) {
            forEachDeep(val, fn);
        }

        fn(val, key, index);
    });
};

//arr

//obj
const objKeys = obj => _Object.keys(obj);
const objValues = obj => _Object.values(obj);
const objEntries = obj => _Object.entries(obj);
//const objMerge
//const objMergeDeep

const lightdash = {
    isSame,
    isEqual,

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
    forEachDeep,
    forEachEntry,
    forEachEntryDeep,

    //objMerge,
    //objMergeDeep,
    objKeys,
    objValues,
    objEntries
};

export default lightdash;
