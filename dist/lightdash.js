var lightdash = function () {
  'use strict';

  const _Object = Object;
  const _Array = Array;
  const _Number = Number;
  const _Map = Map;
  const _Set = Set;
  const _Date = Date;
  const _Math = Math;
  /**
   * Checks if two values are the same
   *
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */

  const isSame = (a, b) => a === b;
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
      forEachEntry(a, (val_a, key) => {
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


  const isInstanceOf = (val, target) => val instanceof target;
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


  const isUndefined = val => isTypeOf(val, "undefined");
  /**
   * Checks if a value is not undefined
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isDefined = val => !isUndefined(val);
  /**
   * Checks if a value is either undefined or null
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isNil = val => isUndefined(val) || val === null;
  /**
   * Checks if a value is a boolean
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isBoolean = val => isTypeOf(val, "boolean");
  /**
   * Checks if a value is a number
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isNumber = val => isTypeOf(val, "number");
  /**
   * Checks if a value is a string
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isString = val => isTypeOf(val, "string");
  /**
   * Checks if a value is a number as a string
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isStringNumber = val => !isNaN(_Number(val));
  /**
   * Checks if a value is a symbol
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isSymbol = val => isTypeOf(val, "symbol");
  /**
   * Checks if a value is an array
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isArray = val => _Array.isArray(val);
  /**
   * Checks if a value is object-like and has a length property
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isArrayLike = val => isObjectLike(val) && hasKey(val, "length");
  /**
   * Checks if a value is an object
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isObject = val => isInstanceOf(val, _Object);
  /**
   * Checks if a value is not nil and has a typeof object
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isObjectLike = val => !isNil(val) && isTypeOf(val, "object");
  /**
   * Checks if a value is an map
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isMap = val => isInstanceOf(val, _Map);
  /**
   * Checks if a value is an map
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isSet = val => isInstanceOf(val, _Set);
  /**
   * Checks if a value is an date object
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isDate = val => isInstanceOf(val, _Date);
  /**
   * Checks if an array has no items, or an object has no keys
   *
   * @param {*} val
   * @returns {boolean}
   */


  const isEmpty = val => {
    if (hasKey(val, "length")) {
      return val.length === 0;
    } else if (isObjectLike(val)) {
      return objKeys(val).length === 0;
    } else {
      return false;
    }
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
   * Checks if a target has a path of keys
   *
   * @param {any} target
   * @param {Array<string>} path
   * @returns {boolean}
   */


  const hasPath = (target, path) => {
    let targetCurrent = target;
    let index = 0;

    while (isDefined(targetCurrent) && index < path.length) {
      const keyCurrent = path[index];

      if (hasKey(targetCurrent, keyCurrent)) {
        targetCurrent = targetCurrent[keyCurrent];
        index++;
      } else {
        return false;
      }
    }

    return true;
  };
  /**
   * Accesses a target by a path of keys. If the path doesn't exist, null is returned
   *
   * @param {any} target
   * @param {Array<string>} path
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
      } else {
        return null;
      }
    }

    return targetCurrent;
  };
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
    } else if (val > max) {
      return max;
    } else {
      return val;
    }
  };
  /**
   * Checks if a number is in the given range
   *
   * @param {number} val
   * @param {number} min
   * @param {number} max
   * @returns {boolean}
   */


  const numberIsInRange = (val, min, max) => val >= min && val <= max;
  /**
   * Return a random float number in the range
   *
   * @param {number} [min=0]
   * @param {number} [max=1]
   * @returns {number}
   */


  const numberRandomFloat = (min = 0, max = 1) => min + _Math.random() * (max - min);
  /**
   * Return a random integer number in the range
   *
   * @param {number} [min=0]
   * @param {number} [max=100]
   * @returns {number}
   */


  const numberRandomInt = (min = 0, max = 1) => _Math.floor(numberRandomFloat(min, max) / (max - min) * (max - min + 1));
  /**
   * Iterate over each value of an array
   *
   * @param {Array<any>} arr
   * @param {ForEachIterator} fn
   */


  const forEach = (arr, fn) => arr.forEach(fn);
  /**
   * Deeply iterate over each value of an array
   *
   * @param {Array<any>} arr
   * @param {ForEachIterator} fn
   */


  const forEachDeep = (arr, fn) => forEach(arr, (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));
  /**
   * Iterate over each entry of an object
   *
   * @param {Object} obj
   * @param {ForEachEntryIterator} fn
   */


  const forEachEntry = (obj, fn) => {
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


  const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (val, key, index) => isObject(val) ? forEachEntryDeep(val, fn) : fn(val, key, index, obj));
  /**
   * Creates a new array with the values of the input array
   *
   * @param {Array<any>} arr
   * @returns {Array<any>}
   */


  const arrClone = arr => _Array.from(arr);
  /**
   * Deeply creates a new array with the values of the input array
   *
   * @param {Array<any>} arr
   * @returns {Array<any>}
   */


  const arrCloneDeep = arr => arrMapDeep(arrClone(arr), val => isArray(val) ? arrClone(val) : val);
  /**
   * Maps the values of the input array with the iterator function and return the result
   *
   * @param {Array<any>} arr
   * @param {ForEachIterator} fn
   * @returns {Array<any>}
   */


  const arrMap = (arr, fn) => arr.map(fn);
  /**
   * Deeply maps the values of the input array with the iterator function and return the result
   *
   * @param {Array<any>} arr
   * @param {ForEachIterator} fn
   * @returns {Array<any>}
   */


  const arrMapDeep = (arr, fn) => arrMap(arr, (val, index, arr) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));
  /**
   * Recursively flattens an array
   *
   * @param {Array<any>} arr
   * @returns {Array<any>}
   */


  const arrFlattenDeep = arr => {
    const result = [];
    forEach(arr, val => {
      if (isArray(val)) {
        result.push(...arrFlattenDeep(val));
      } else {
        result.push(val);
      }
    });
    return result;
  };
  /**
   * Filters every empty, undefined or null value from an array out
   *
   * @param {Array<any>} arr
   * @returns {Array<any>}
   */


  const arrCompact = arr => arr.filter(val => !isNil(val) && !isEmpty(val)); //const arrDifference=(arr,...arr)
  //const arrShared=(arr,...arr)
  //const arrUnique=(arr,...arr)
  //const arrChunk
  //const arrStep

  /**
   * Creates a new object with the entries of the input object
   *
   * @param {Object} obj
   * @returns {Object}
   */


  const objClone = obj => _Object.assign({}, obj);
  /**
   * Deeply creates a new object with the entries of the input object
   *
   * @param {Object} obj
   * @returns {Object}
   */


  const objCloneDeep = obj => objMapDeep(objClone(obj), val => isObject(val) ? objClone(val) : val);
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


  const objKeys = obj => _Object.keys(obj);
  /**
   * Returns an array of the objects values
   *
   * @param {Object} obj
   * @returns {Array<any>}
   */


  const objValues = obj => _Object.values(obj);
  /**
   * Returns an array of the objects entries
   *
   * @param {Object} obj
   * @returns {Array<[string, any]>}
   */


  const objEntries = obj => _Object.entries(obj);
  /**
   * Creates a Map from an Object
   * @param {Object} obj
   * @returns {Map}
   */


  const mapFromObject = obj => new _Map(objEntries(obj));

  const lightdash = {
    isSame,
    isEqual,
    isInstanceOf,
    isTypeOf,
    isUndefined,
    isDefined,
    isNil,
    isBoolean,
    isNumber,
    isString,
    isStringNumber,
    isSymbol,
    isObject,
    isObjectLike,
    isArray,
    isArrayLike,
    isMap,
    isSet,
    isDate,
    isEmpty,
    hasKey,
    hasPath,
    getPath,
    numberClamp,
    numberIsInRange,
    numberRandomFloat,
    numberRandomInt,
    forEach,
    forEachDeep,
    forEachEntry,
    forEachEntryDeep,
    arrClone,
    arrCloneDeep,
    arrMap,
    arrMapDeep,
    arrFlattenDeep,
    arrCompact,
    objClone,
    objCloneDeep,
    objMap,
    objMapDeep,
    objKeys,
    objValues,
    objEntries,
    mapFromObject
  };
  return lightdash;
}();