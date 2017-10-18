import isArray from "./is/array";
import isArrayLike from "./is/arrayLike";
import isBoolean from "./is/boolean";
import isDefined from "./is/defined";
import isEmpty from "./is/empty";
import isEqual from "./is/equal";
import isInstanceOf from "./is/instanceOf";
import isMap from "./is/map";
import isNil from "./is/nil";
import isNumber from "./is/number";
import isObject from "./is/object";
import isObjectLike from "./is/objectLike";
import isPrimitive from "./is/primitive";
import isSame from "./is/same";
import isSet from "./is/set";
import isString from "./is/string";
import isStringNumber from "./is/stringNumber";
import isSymbol from "./is/symbol";
import isTypeOf from "./is/typeOf";
import isUndefined from "./is/undefined";

import hasKey from "./has/key";
import hasPath from "./has/path";

import getPath from "./get/path";

import forEach from "./for/each";
import forEachDeep from "./for/eachDeep";
import forEachEntry from "./for/eachEntry";
import forEachEntryDeep from "./for/eachEntryDeep";
import forTimes from "./for/times";

import arrChunk from "./arr/chunk";
import arrClone from "./arr/clone";
import arrCloneDeep from "./arr/cloneDeep";
import arrCompact from "./arr/compact";
import arrCount from "./arr/count";
import arrDifference from "./arr/difference";
import arrFlattenDeep from "./arr/flattenDeep";
import arrIntersection from "./arr/intersection";
import arrMap from "./arr/map";
import arrMapDeep from "./arr/mapDeep";
import arrStep from "./arr/step";
import arrUniq from "./arr/uniq";

import objClone from "./obj/clone";
import objCloneDeep from "./obj/cloneDeep";
import objDefaults from "./obj/defaults";
import objDefaultsDeep from "./obj/defaultsDeep";
import objEntries from "./obj/entries";
import objKeys from "./obj/keys";
import objMap from "./obj/map";
import objMapDeep from "./obj/mapDeep";
import objMerge from "./obj/merge";
import objMergeDeep from "./obj/mergeDeep";
import objValues from "./obj/values";

import mapFromObject from "./map/fromObject";

import numberClamp from "./number/clamp";
import numberInRange from "./number/inRange";
import numberRandomFloat from "./number/randomFloat";
import numberRandomInt from "./number/randomInt";

export {
    isSame,
    isEqual,
    isInstanceOf,
    isTypeOf,
    isUndefined,
    isDefined,
    isNil,
    isObject,
    isObjectLike,
    isArray,
    isArrayLike,
    isMap,
    isSet,
    isEmpty,
    isPrimitive,
    isNumber,
    isString,
    isStringNumber,
    isBoolean,
    isSymbol,

    hasKey,
    hasPath,

    getPath,

    forTimes,
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
    arrChunk,
    arrStep,
    arrCount,
    arrDifference,
    arrIntersection,
    arrUniq,

    objClone,
    objCloneDeep,
    objMap,
    objMapDeep,
    // objMerge,
    // objMergeDeep,
    objDefaults,
    // objDefaultsDeep,
    objKeys,
    objValues,
    objEntries,

    mapFromObject,

    numberInRange,
    numberClamp,
    numberRandomFloat,
    numberRandomInt,

};
