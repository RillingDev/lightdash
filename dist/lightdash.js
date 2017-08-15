var lightdash = function () {
  'use strict';

  const _Object = Object;
  const _Array = Array;
  const _Number = Number;
  const _String = String;
  /**
   * ##############################
   * is
   * ##############################
   */

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
  /**
   * ##############################
   * has
   * ##############################
   */


  const hasKey = (target, key) => key in target;

  const hasLength = target => isDefined(target.length);
  /**
   * ##############################
   * to
   * ##############################
   */


  const toNumber = str => _Number(str);

  const toString = val => _String(val);
  /**
   * ##############################
   * forEach
   * ##############################
   */


  const forEach = (arr, fn) => arr.forEach(fn);

  const forEachDeep = (arr, fn) => {
    forEach(arr, (val, index) => {
      if (isArray(val)) {
        forEachDeep(val, fn);
      }

      fn(val, index, arr);
    });
  };

  const forEachEntry = (obj, fn) => {
    forEach(objEntries(obj), (entry, index) => {
      fn(entry[1], entry[0], index, obj);
    });
  };

  const forEachEntryDeep = (obj, fn) => {
    forEachEntry(obj, (val, key, index) => {
      if (isObject(val)) {
        forEachDeep(val, fn);
      }

      fn(val, key, index, obj);
    });
  };
  /**
   * ##############################
   * arr
   * ##############################
   */


  const arrClone = arr => _Array.from(arr);

  const arrCloneDeep = arr => arrMapDeep(arrClone(arr), val => isArray(val) ? arrClone(val) : val);

  const arrMap = (arr, fn) => arr.map(fn);

  const arrMapDeep = (arr, fn) => arrMap(arr, (val, index, arr) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));
  /**
   * ##############################
   * obj
   * ##############################
   */


  const objClone = obj => _Object.assign({}, obj);

  const objCloneDeep = obj => objMapDeep(objClone(obj), val => isObject(val) ? objClone(val) : val);

  const objMap = (obj, fn) => {
    const objNew = cloneObject(obj);
    forEachEntry(objNew, (val, key, index) => {
      objNew[key] = fn(val, key, index, objNew);
    });
    return objNew;
  };

  const objMapDeep = (obj, fn) => objMap(obj, (val, key, index, objNew) => {
    if (isObject(val)) {
      return objMapDeep(val, fn);
    } else {
      return fn(val, key, index, objNew);
    }
  }); //const objMerge
  //const objMergeDeep
  //const objDefaults
  //const objDefaultsDeep


  const objKeys = obj => _Object.keys(obj);

  const objValues = obj => _Object.values(obj);

  const objEntries = obj => _Object.entries(obj);

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
  return lightdash;
}();